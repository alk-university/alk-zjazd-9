import styled, { css } from '@emotion/native';
import React from 'react';
import { View } from 'react-native';
import { COLOR_PALETTE } from './../AppStyl';
import { NavLink } from './NavLink';

const WhiteText = styled.Text`
  color: ${COLOR_PALETTE.font_white};
`;

const Nav = () => {
  return (
    <View
      style={css`
        flex-direction: row;
        justify-content: space-around;
        position: absolute;
        bottom: -80px;
        left: 0;
        background-color: ${COLOR_PALETTE.background_dark_blue};
        width: 100%;
        height: 80;
      `}
    >
      <NavLink exact to="/">
        <WhiteText>Weather</WhiteText>
      </NavLink>

      <NavLink to="/gallery">
        <WhiteText>Gallery</WhiteText>
      </NavLink>

      <NavLink to="/playground">
        <WhiteText>Playground</WhiteText>
      </NavLink>
    </View>
  );
};

export { Nav };
