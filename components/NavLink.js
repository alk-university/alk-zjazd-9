import { css } from '@emotion/native';
import React from 'react';
import { View } from 'react-native';
import { Link, Route } from 'react-router-native';
import { COLOR_PALETTE } from '../AppStyl';

const navItem = {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 30,
};

const navItemActive = {
  backgroundColor: COLOR_PALETTE.background_navy_blue,
};

const NavLink = ({
  children,
  to,
  exact,
  activeLinkStyle = navItemActive,
  underlayColor = COLOR_PALETTE.background_blue,
}) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <Link
          style={match ? { ...navItem, ...activeLinkStyle } : navItem}
          underlayColor={underlayColor}
          to={to}
        >
          <View
            style={css`
              flex-direction: 'row';
            `}
          >
            {children}
          </View>
        </Link>
      )}
    />
  );
};

export { NavLink };
