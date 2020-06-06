import { css } from '@emotion/native';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import splash from './../assets/splash.png';

const textStyle = css`
  color: blue;
  font-size: 30px;
`;
const imageStyle = css`
  width: 100px;
  height: 100px;
`;

const Playground = () => {
  const [text, setText] = useState('Wartosc poczatkowa');

  const handleClick = () => {
    console.warn('click');
  };

  const paddingTop = Constants.statusBarHeight + 'px';

  return (
    <SafeAreaView
      style={css`
        flex: 1;
        background-color: #ccc;
        align-items: center;
        /* justify-content: center; */
      `}
    >
      <ScrollView>
        <Text style={textStyle}>
          Open up App.js to start working on your app!
        </Text>

        <View
          style={css`
            width: 100px;
            height: 100px;
            background-color: pink;
          `}
        />

        <TouchableOpacity onPress={handleClick}>
          <View
            style={css`
              width: 100px;
              height: 60px;
              margin-top: 30px;
              background-color: orange;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <Text>My button</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleClick}
          style={css`
            width: 100px;
            height: 60px;
            margin-top: 30px;
            background-color: orange;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <Text>My button</Text>
        </TouchableOpacity>

        <Image
          style={imageStyle}
          source={{
            uri:
              'https://images.unsplash.com/photo-1591331501569-bf2216b6723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          }}
        />

        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />
        <Image style={imageStyle} source={splash} />

        <TextInput
          style={css`
            height: 40px;
            border-color: gray;
            border-width: 1px;
            width: 100px;
          `}
          onChangeText={setText}
          value={text}
        />

        <Text>{text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export { Playground };
