import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Calculator App</Text> */}

      <View style={styles.display}>
        <Text style={styles.displayText}> 0 </Text>
      </View>

      <View style={styles.buttons}>
        {/* <Text> Buttons will come here </Text> */}

        <View style={styles.row}>
          <Text style={styles.btn}>7</Text>
          <Text style={styles.btn}>8</Text>
          <Text style={styles.btn}>9</Text>
          <Text style={styles.btn}>/</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.btn}>4</Text>
          <Text style={styles.btn}>5</Text>
          <Text style={styles.btn}>6</Text>
          <Text style={styles.btn}>*</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.btn}>1</Text>
          <Text style={styles.btn}>2</Text>
          <Text style={styles.btn}>3</Text>
          <Text style={styles.btn}>-</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.btn}>0</Text>
          <Text style={styles.btn}>.</Text>
          <Text style={styles.btn}>=</Text>
          <Text style={styles.btn}>+</Text>
        </View>
        
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#001',
  },
  // title: {
  //   fontSize: 28,
  //   fontWeight: 'bold',
  // },
  display:{
    flex:2,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:20,
  },
  displayText:{
    fontSize:48,
    color:'white',
  },
  buttons:{
    flex:5,
    backgroundColor:'#1c1c1c',
    justifyContent:'center',
    alignItems: 'center',
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    marginVertical:10,
  },
  btn:{
    fontSize:28,
    color:'white',
    backgroundColor:'#333',
    width:60,
    height:60,
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius:30,
  },
});

export default App;