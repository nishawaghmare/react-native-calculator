import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const App = () => {

  const [display, setDisplay] = useState("0")
  const [firstNum, setFirstNum] = useState("")
  const [operator, setOperator] = useState("")
  const [justCalculated, setJustCalculated] = useState(false)

  const handleNumberPress = (num:string) => {
    if (num === "." && display.includes(".")){
      return
    }
    if (justCalculated){
      setDisplay(num)
      setJustCalculated(false)
      return
    }
    else
      if(display === '0')
        setDisplay(num)     // create new number after zero
      else
        setDisplay(display+num)    // create multidigit number
  }

  const calculate = (a:string, b:string, op:string): number => {
    let result: number = 0;
    switch (op) {
      case '+': 
        result = Number(a) + Number(b)
        break;
      case '-': 
        result = Number(a) - Number(b)
        break;
      case '*': 
       result = Number(a) * Number(b)
        break;
      case '/': 
        if(Number(b) === 0){
          return NaN
        }
       result = Number(a) / Number(b)
        break;
      case '%': 
       result = Number(a) % Number(b)
        break;
    
      default:
        result = 0;
    }
    return result
  }

  const handleOperatorPress = (op:string) => {
    if(firstNum && operator) {
      let result = calculate(firstNum, display, operator)
      setFirstNum(result.toString())
      setDisplay("0")
      setOperator(op)
      setJustCalculated(false)
    } 
    else{
      setFirstNum(display);     
      setDisplay("0")   
      setOperator(op)
      setJustCalculated(false)
    } 
  }

  const handleEquals = () => {
    if(!operator){
      setDisplay(display)
      setJustCalculated(true)
      return
    }

    let result = calculate(firstNum, display, operator)
    if(isNaN(result) || !isFinite(result)){
      setDisplay("Error")
    }else{
      setDisplay(result.toString())
    }
    setFirstNum("")
    setOperator("")
    setJustCalculated(true)
  }

  const handleClearButton = () => {
    setDisplay("0")
    setFirstNum("")
    setOperator("")
    setJustCalculated(false)
  }

  const handleClearCurrentEntry = () => {
    setDisplay("0")
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
          <TouchableOpacity onPress={() => handleClearButton()} style={styles.btnContainer}>
            <Text style={styles.btn}> C </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleClearCurrentEntry()} style={styles.btnContainer}>
            <Text style={styles.btn}> CE </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorPress("%")} style={styles.btnContainer}>
            <Text style={styles.btn}> % </Text>
          </TouchableOpacity>
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