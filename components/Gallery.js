import { css } from '@emotion/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Gallery = () => {
  return (
    <SafeAreaView
      style={css`
        flex: 1;
        background-color: #ccc;
        align-items: center;
        justify-content: center;
      `}
    >
      <Text>Gallery APP</Text>
    </SafeAreaView>
  );
};

export { Gallery };
