import { css } from '@emotion/native';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { COLOR_PALETTE } from './../AppStyl';

const Weather = () => {
  const [loc, setLoc] = useState('Berlin');
  const [data, setData] = useState(null);

  const handleSearch = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        loc +
        '&appid=2a1a2f39b94b6bb68a2abb96353ac8b2'
    )
      .then((r) => r.json())
      .then(setData);
  };

  const getCelsius = (kelvin) => Math.ceil(kelvin - 273.15);

  return (
    <View
      style={css`
        padding: 30px;
      `}
    >
      <Text
        style={css`
          color: ${COLOR_PALETTE.pastel_green};
          font-size: 32px;
          text-align: center;
          margin-top: 100px;
        `}
      >
        Lokalizacja:
      </Text>
      <TextInput
        style={css`
          border: 1px solid ${COLOR_PALETTE.pastel_green};
          margin: 20px 0;
          padding: 10px;
          color: ${COLOR_PALETTE.pastel_green};
        `}
        value={loc}
        onChangeText={setLoc}
      />

      <Button onPress={handleSearch} title="Sprawdź pogodę" />

      {data && (
        <Text
          style={css`
            color: ${COLOR_PALETTE.pastel_green};
            font-size: 20px;
            text-align: center;
            margin-top: 100px;
          `}
        >
          Temperatura: {getCelsius(data.main?.temp)} °C
        </Text>
      )}
    </View>
  );
};

export { Weather };
