import { css } from '@emotion/native';
import Constants from 'expo-constants';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Link, NativeRouter, Route } from 'react-router-native';
import { Gallery } from './components/Gallery';
import { Playground } from './components/Playground';
import { Weather } from './components/Weather';

const Nav = () => {
  return (
    <View
      style={css`
        flex-direction: row;
        justify-content: space-around;
        position: absolute;
        bottom: -80px;
        left: 0;
        background-color: violet;
        width: 100%;
        height: 80;
      `}
    >
      <Link underlayColor={'yellow'} to="/">
        <Text>Weather</Text>
      </Link>

      <Link underlayColor={'yellow'} to="/playground">
        <Text>Playground</Text>
      </Link>

      <Link underlayColor={'yellow'} to="/gallery">
        <Text>Gallery</Text>
      </Link>
    </View>
  );
};

const App = () => {
  return (
    <NativeRouter>
      <View
        style={css`
          background-color: orange;
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
