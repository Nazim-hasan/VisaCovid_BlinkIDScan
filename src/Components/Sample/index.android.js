/**
 * Sample React Native App for BlinkID
 * https://github.com/BlinkID/blinkid-react-native
 */

import React, {Component} from 'react';
import * as BlinkIDReactNative from 'blinkid-react-native';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import IDScan from '../../../assets/updated/resize.png';

const licenseKey = Platform.select({
  // iOS license key for applicationID: com.microblink.sample
  ios: 'sRwAAAEUY29tLnZpc2Fjb3ZpZC5pZHNjYW7lnvzL4ey+kfIjlEtZinhx0ew8QqrGwuj+hVvGYAZnpe4GEUsA0NBIeCYHQykC8EmGvVBUrLKeakcLK7ipOsg8nbMUnkQvAqNOBOJk+ZFDJ/VmjDwl+MrF+b4ikpaPrnjbXUaufIWwqL3o3mnPiUEqvXhxhh4vsE0D2Sk5Dk5TlkFfGvwX+GN1tS7awK/jkZcZkVznTuRNwJtnirRgAMKaYDnnE4AkLZfFbvO5St49UQ==',
  // android license key for applicationID: com.microblink.sample
  android:
    'sRwAAAAUY29tLnZpc2Fjb3ZpZC5pZHNjYW6af8t2QkR55SCC3VKDwMi0ZcgCJMAkF5Gdbhc+GZwbabaLp1wEwD/7JxE9Qjw6XN+uPUpc5+UlG5dWHmvA0nGrPbfR2cmGvHN5QReZL0SyR7/ZdnxNwp6DbnlZwgZkWqgoh+wJrnrPKwK0J9asoJ6yuP8x+EMFC3iROxdFG9q2nDur01WEfRtLC7KlgUsyLkOpyUnO3PBCr5kufDJOacJ9+tykmdCxcby/sR2+13rZTQ==',
});

var renderIf = function (condition, content) {
  if (condition) {
    return content;
  }
  return null;
};

function buildResult(result, key) {
  if (result && result != -1) {
    return key + ': ' + result + '\n';
  }
  return '';
}

function buildDateResult(result, key) {
  if (result) {
    return (
      key +
      ': ' +
      result.day +
      '.' +
      result.month +
      '.' +
      result.year +
      '.' +
      '\n'
    );
  }
  return '';
}

export default class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFrontImageDocument: false,
      resultFrontImageDocument: '',
      showBackImageDocument: false,
      resultBackImageDocument: '',
      showImageFace: false,
      resultImageFace: '',
      showSuccessFrame: false,
      successFrame: '',
      results: '',
      licenseKeyErrorMessage: '',
    };
  }

  async scan() {
    try {
      // to scan any machine readable travel document (passports, visas and IDs with
      // machine readable zone), use MrtdRecognizer
      // var mrtdRecognizer = new BlinkIDReactNative.MrtdRecognizer();
      // mrtdRecognizer.returnFullDocumentImage = true;

      // var mrtdSuccessFrameGrabber = new BlinkIDReactNative.SuccessFrameGrabberRecognizer(mrtdRecognizer);

      // BlinkIDCombinedRecognizer automatically classifies different document types and scans the data from
      // the supported document
      var blinkIdCombinedRecognizer =
        new BlinkIDReactNative.BlinkIdCombinedRecognizer();
      blinkIdCombinedRecognizer.returnFullDocumentImage = true;
      blinkIdCombinedRecognizer.returnFaceImage = true;

      const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
        new BlinkIDReactNative.BlinkIdOverlaySettings(),
        new BlinkIDReactNative.RecognizerCollection([
          blinkIdCombinedRecognizer /*, mrtdSuccessFrameGrabber*/,
        ]),
        licenseKey,
      );

      if (scanningResults) {
        let newState = {
          showFrontImageDocument: false,
          resultFrontImageDocument: '',
          showBackImageDocument: false,
          resultBackImageDocument: '',
          showImageFace: false,
          resultImageFace: '',
          results: '',
          showSuccessFrame: false,
          successFrame: '',
        };

        for (let i = 0; i < scanningResults.length; ++i) {
          let localState = this.handleResult(scanningResults[i]);
          newState.showFrontImageDocument =
            newState.showFrontImageDocument ||
            localState.showFrontImageDocument;
          if (localState.showFrontImageDocument) {
            newState.resultFrontImageDocument =
              localState.resultFrontImageDocument;
          }
          newState.showBackImageDocument =
            newState.showBackImageDocument || localState.showBackImageDocument;
          if (localState.showBackImageDocument) {
            newState.resultBackImageDocument =
              localState.resultBackImageDocument;
          }
          newState.showImageFace =
            newState.showImageFace || localState.showImageFace;
          if (localState.resultImageFace) {
            newState.resultImageFace = localState.resultImageFace;
          }
          newState.results += localState.results;
          newState.showSuccessFrame =
            newState.showSuccessFrame || localState.showSuccessFrame;
          if (localState.successFrame) {
            newState.successFrame = localState.successFrame;
          }
        }
        newState.results += '\n';
        this.setState(newState);
      }
    } catch (error) {
      console.log(error);
      this.setState({
        showFrontImageDocument: false,
        resultFrontImageDocument: '',
        showBackImageDocument: false,
        resultBackImageDocument: '',
        showImageFace: false,
        resultImageFace: '',
        results: 'Scanning has been cancelled',
        showSuccessFrame: false,
        successFrame: '',
      });
    }
  }

  handleResult(result) {
    var localState = {
      showFrontImageDocument: false,
      resultFrontImageDocument: '',
      showBackImageDocument: false,
      resultBackImageDocument: '',
      resultImageFace: '',
      results: '',
      showSuccessFrame: false,
      successFrame: '',
    };

    if (result instanceof BlinkIDReactNative.BlinkIdCombinedRecognizerResult) {
      let blinkIdResult = result;

      let resultString =
        buildResult(blinkIdResult.firstName, 'First name') +
        buildResult(blinkIdResult.lastName, 'Last name') +
        buildResult(blinkIdResult.fullName, 'Full name') +
        buildResult(blinkIdResult.localizedName, 'Localized name') +
        buildResult(
          blinkIdResult.additionalNameInformation,
          'Additional name info',
        ) +
        buildResult(blinkIdResult.address, 'Address') +
        buildResult(
          blinkIdResult.additionalAddressInformation,
          'Additional address info',
        ) +
        buildResult(blinkIdResult.documentNumber, 'Document number') +
        buildResult(
          blinkIdResult.documentAdditionalNumber,
          'Additional document number',
        ) +
        buildResult(blinkIdResult.sex, 'Sex') +
        buildResult(blinkIdResult.issuingAuthority, 'Issuing authority') +
        buildResult(blinkIdResult.nationality, 'Nationality') +
        buildDateResult(blinkIdResult.dateOfBirth, 'Date of birth') +
        buildResult(blinkIdResult.age, 'Age') +
        buildDateResult(blinkIdResult.dateOfIssue, 'Date of issue') +
        buildDateResult(blinkIdResult.dateOfExpiry, 'Date of expiry') +
        buildResult(
          blinkIdResult.dateOfExpiryPermanent,
          'Date of expiry permanent',
        ) +
        buildResult(blinkIdResult.expired, 'Expired') +
        buildResult(blinkIdResult.maritalStatus, 'Martial status') +
        buildResult(blinkIdResult.personalIdNumber, 'Personal id number') +
        buildResult(blinkIdResult.profession, 'Profession') +
        buildResult(blinkIdResult.race, 'Race') +
        buildResult(blinkIdResult.religion, 'Religion') +
        buildResult(blinkIdResult.residentialStatus, 'Residential status') +
        buildResult(blinkIdResult.processingStatus, 'Processing status') +
        buildResult(blinkIdResult.recognitionMode, 'Recognition mode');
      let licenceInfo = blinkIdResult.driverLicenseDetailedInfo;
      if (licenceInfo) {
        resultString +=
          buildResult(licenceInfo.restrictions, 'Restrictions') +
          buildResult(licenceInfo.endorsements, 'Endorsements') +
          buildResult(licenceInfo.vehicleClass, 'Vehicle class') +
          buildResult(licenceInfo.conditions, 'Conditions');
      }

      // there are other fields to extract
      localState.results += resultString;

      // Document image is returned as Base64 encoded JPEG
      if (blinkIdResult.fullDocumentFrontImage) {
        localState.showFrontImageDocument = true;
        localState.resultFrontImageDocument =
          'data:image/jpg;base64,' + blinkIdResult.fullDocumentFrontImage;
      }
      if (blinkIdResult.fullDocumentBackImage) {
        localState.showBackImageDocument = true;
        localState.resultBackImageDocument =
          'data:image/jpg;base64,' + blinkIdResult.fullDocumentBackImage;
      }
      // Face image is returned as Base64 encoded JPEG
      if (blinkIdResult.faceImage) {
        localState.showImageFace = true;
        localState.resultImageFace =
          'data:image/jpg;base64,' + blinkIdResult.faceImage;
      }
    }
    return localState;
  }

  render() {
    let displayFrontImageDocument = this.state.resultFrontImageDocument;
    let displayBackImageDocument = this.state.resultBackImageDocument;
    let displayImageFace = this.state.resultImageFace;
    let displaySuccessFrame = this.state.successFrame;
    let displayFields = this.state.results;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, marginTop: 10}}>
          Scan Your ID Card
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={this.scan.bind(this)}>
          <Image style={styles.IDScanLogo} source={IDScan} />
        </TouchableOpacity>

        {/* <Button
                onPress={this.scan.bind(this)}
                title="Scan"
                color="#48B2E8"
            /> */}

        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          y>
          <Text style={styles.results}>{displayFields}</Text>
          {renderIf(
            this.state.showFrontImageDocument,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displayFrontImageDocument, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          {renderIf(
            this.state.showBackImageDocument,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displayBackImageDocument, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          {renderIf(
            this.state.showImageFace,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displayImageFace, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          {renderIf(
            this.state.showSuccessFrame,
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{uri: displaySuccessFrame, scale: 3}}
                style={styles.imageResult}
              />
            </View>,
          )}
          <View style={styles.buttonContainerNext}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                this.props.navigation.navigate('NIDDetails');
              }}>
              <Text style={styles.textLogin}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '5%',
  },
  buttonContainerNext: {
    margin: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  results: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
  imageResult: {
    flex: 1,
    flexShrink: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0daf7',
    borderWidth: 2,
    width: 280,
    height: 180,
    marginLeft: '17%',
    borderRadius: 10,
    marginTop: 40,
  },
  IDScanLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    marginBottom: 5,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginBottom: 10,
    backgroundColor: '#021078',
  },
  textLogin: {
    color: '#ffffff',
  },
});

AppRegistry.registerComponent('Sample', () => Sample);
