// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent( 'arpoints', () => App );

// index.ios.js

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';
import { PointLocations } from './components/PointLocations';

export default class ReactNativeARKit extends Component {
  render() {
    return ( <View style={{
        flex: 1
      }}>
      <ARKit style={{
          flex: 1
        }} debug="debug"
        // enable plane detection (defaults to Horizontal)
        planeDetection={ARKit.ARPlaneDetection.Horizontal}
        // enable light estimation (defaults to true)
        lightEstimationEnabled="lightEstimationEnabled"
        // get the current lightEstimation (if enabled)

        // it fires rapidly, so better poll it from outside with

        // ARKit.getCurrentLightEstimation()
        onLightEstimation={e => console.log( e.nativeEvent )}
        // event listener for (horizontal) plane detection
        onPlaneDetected={anchor => console.log( anchor )}
        // event listener for plane update
        onPlaneUpdated={anchor => console.log( anchor )}
        // arkit sometimes removes detected planes
        onPlaneRemoved={anchor => console.log( anchor )}
        // event listeners for all anchors, see [Planes and Anchors](#planes-and-anchors)
        onAnchorDetected={anchor => console.log( anchor )} onAnchorUpdated={anchor => console.log( anchor )} onAnchorRemoved={anchor => console.log( anchor )}
        // you can detect images and will get an anchor for these images
        detectionImages={[{
            resourceGroupName: 'DetectionImages'
          }
        ]} onARKitError={console.log}
        // if arkit could not be initialized (e.g. missing permissions), you will get notified here
      >
        <ARKit.Cone position={{
            x: 0,
            y: 0.2,
            z: 0
          }} shape={{
            topR: 0,
            bottomR: 0.05,
            height: 0.1
          }}/>
        <ARKit.Text text="You are here!" position={{
            x: 0.2,
            y: 0.6,
            z: 0
          }} font={{
            size: 0.15,
            depth: 0.05
          }}/>
      </ARKit>
    </View> );
  }
}

AppRegistry.registerComponent( 'arpoints', () => ReactNativeARKit );
