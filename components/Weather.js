import { css } from '@emotion/native';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

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
      <Text>Lokalizacja:</Text>
      <TextInput
        style={css`
          border: 1px solid #ccc;
          margin: 20px 0;
          padding: 10px;
        `}
        value={loc}
        onChangeText={setLoc}
      />

      <Button onPress={handleSearch} title="Sprawdź pogodę" />

      {data && <Text>Temperatura: {getCelsius(data.main?.temp)} °C</Text>}
    </View>
  );
};

export { Weather };
