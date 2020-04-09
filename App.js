import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [number, setUrl] = useState(1);

  const getRandomNum = () => {
      return Math.floor((Math.random() * 6));
  };

  const prefix = `/assets/DiceAssets/dice${number}.png`;


  return (
    <View style={styles.container}>
      <Image source={require(`./assets/DiceAssets/dice1.png`)}/>
      <TouchableOpacity onPress={() => setUrl(getRandomNum())}>
      <Text style={styles.gameButton}>
        Play Game
      </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton: {
    marginTop: 35,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: 'bold',
    borderWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius:2,
    borderColor: '#FFF'

  }
});
