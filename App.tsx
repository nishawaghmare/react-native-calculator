import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const App = () => {

  const [display, setDisplay] = useState("0")
  const [firstNum, setFirstNum] = useState("")
  const [operator, setOperator] = useState("")
  let [justCalculated, setJustCalculated] = useState(false)

  const handleNumberPress = (num:string) => {
    if (justCalculated){
      setDisplay(num)
      setJustCalculated(false)
    }
    else
      if(display === '0')
        setDisplay(num)     // create new number after zero
      else
        setDisplay(display+num)    // create multidigit number
    console.log("before display", display);
    console.log("pressed number", num);
  }

  const handleOperatorPress = (op:string) => {   
    setFirstNum(display);     // firstNum is the number user pressed before an operator
    setDisplay("0")   // This will ensure display start fresh after operator
    setOperator(op)
  }

  const handleEquals = () => {
    console.log("firstNum", firstNum);
    console.log("operator", operator);
    console.log("display", display);
    let total = Number(firstNum) + Number(display)
    console.log("total:", total);
    setDisplay(total.toString())
    setJustCalculated(true)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.display}>
        <Text style={styles.displayText}> {display} </Text>
      </View>

      <View style={styles.buttons}>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress("7")} style={styles.btnContainer}>
            <Text style={styles.btn}> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("8")} style={styles.btnContainer}>
            <Text style={styles.btn}> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("9")} style={styles.btnContainer}>
            <Text style={styles.btn}> 9 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("/")} style={styles.btnContainer}>
            <Text style={styles.btn}> / </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress("4")} style={styles.btnContainer}>
            <Text style={styles.btn}> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("5")} style={styles.btnContainer}>
            <Text style={styles.btn}> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("6")} style={styles.btnContainer}>
            <Text style={styles.btn}> 6 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("*")} style={styles.btnContainer}>
            <Text style={styles.btn}> * </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress("1")} style={styles.btnContainer}>
            <Text style={styles.btn}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("2")} style={styles.btnContainer}>
            <Text style={styles.btn}> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("3")} style={styles.btnContainer}>
            <Text style={styles.btn}> 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("-")} style={styles.btnContainer}>
            <Text style={styles.btn}> - </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress("0")} style={styles.btnContainer}>
            <Text style={styles.btn}> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress(".")} style={styles.btnContainer}>
            <Text style={styles.btn}> . </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEquals()} style={styles.btnContainer}>
            <Text style={styles.btn}> = </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("+")} style={styles.btnContainer}>
            <Text style={styles.btn}> + </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberPress("C")} style={styles.btnContainer}>
            <Text style={styles.btn}> C </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("CE")} style={styles.btnContainer}>
            <Text style={styles.btn}> CE </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberPress("%")} style={styles.btnContainer}>
            <Text style={styles.btn}> % </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => handleNumberPress("AC")} style={styles.btnContainer}>
            <Text style={styles.btn}> AC </Text>
          </TouchableOpacity> */}
        </View>
        
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#001',
  },
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
  btnContainer:{
    justifyContent: 'center',
    alignItems: 'center', 
    flex:1
  },
});

export default App;