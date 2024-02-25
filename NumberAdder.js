// NumberAdder.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from './action';

const NumberAdder = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.total);

  const [numberToAdd, setNumberToAdd] = useState('');

  const handleAddNumber = () => {
    if (numberToAdd !== '') {
      dispatch(addNumber(parseInt(numberToAdd, 10)));
      setNumberToAdd('');
    }
  };

  return (
    <View>
      <Text>Total: {total}</Text>
      <TextInput
        placeholder="Enter number"
        value={numberToAdd}
        onChangeText={(text) => setNumberToAdd(text)}
        keyboardType="numeric"
      />
      <Button title="Add Number" onPress={handleAddNumber} />
    </View>
  );
};

export default NumberAdder;
