import { css } from '@emotion/native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';

const Gallery = () => {
  const pictures = [
    'https://images.unsplash.com/photo-1583499076055-41653be297df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1552859951-676c58ffcc46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1583566714335-f04a4ed33a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('pink');
  const [myText, setMyText] = useState('..............');

  const getThumbStyle = (index) => {
    let output = css`
      width: 90px;
      height: 90px;
    `;

    if (currentIndex === index) {
      // mark as active
      output = { ...output, opacity: 0.3 };
    }

    return output;
  };

  const onSwipeUp = (gestureState) => {
    setMyText('You swiped up!');
  };

  const onSwipeDown = (gestureState) => {
    setMyText('You swiped down!');
  };

  const onSwipeLeft = (gestureState) => {
    setMyText('You swiped left!');
  };

  const onSwipeRight = (gestureState) => {
    setMyText('You swiped right!');
  };

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        setBackgroundColor('red');
        break;
      case SWIPE_DOWN:
        setBackgroundColor('green');
        break;
      case SWIPE_LEFT:
        setBackgroundColor('blue');
        break;
      case SWIPE_RIGHT:
        setBackgroundColor('yellow');
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SafeAreaView
      style={css`
        flex: 1;
        background-color: #ccc;
        align-items: center;
        justify-content: center;
      `}
    >
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}
        style={{
          backgroundColor,
        }}
      >
        <View
          style={css`
            width: 300px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          <Image
            style={css`
              width: 300px;
              height: 300px;
              margin-bottom: 10px;
            `}
            source={{ uri: pictures[currentIndex] }}
          />

          {pictures.map((uri, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentIndex(index)}
              >
                <Image style={getThumbStyle(index)} source={{ uri }} />
              </TouchableOpacity>
            );
          })}

          <Text>{myText}</Text>
        </View>
      </GestureRecognizer>
    </SafeAreaView>
  );
};

export { Gallery };
