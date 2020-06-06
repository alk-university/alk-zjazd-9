import { css } from '@emotion/native';
import Constants from 'expo-constants';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { COLOR_PALETTE } from './AppStyl';
import { Nav } from './components/Nav';
import { Gallery } from './views/Gallery';
import { Playground } from './views/Playground';
import { Weather } from './views/Weather';

const App = () => {
  return (
    <NativeRouter>
      <View
        style={css`
          background-color: ${COLOR_PALETTE.background_navy_blue};
          padding-top: ${Constants.statusBarHeight + 'px'};
          height: ${Dimensions.get('window').height - 80 + 'px'};
        `}
      >
        <Nav />
        <Route exact path="/" component={Weather} />
        <Route path="/playground" component={Playground} />
        <Route path="/gallery" component={Gallery} />
      </View>
    </NativeRouter>
  );
};

export default App;
