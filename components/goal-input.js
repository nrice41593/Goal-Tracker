import { useState } from 'react';
import { 
  Button, 
  StyleSheet,
  TextInput, 
  View,
  Modal,
  Image
} from 'react-native';

export default function GoalInput (props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        
        <Image source={require('../assets/goalIcon.png')} style={styles.image}/>

        <TextInput 
          placeholder='Goals' 
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#5A5A5A'/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#5A5A5A'/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: '#7DF9FF',
      padding: 16
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      width: '100%',
      padding: 10,
      backgroundColor: '#fff'
    },
    buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },
    button: {
      width: 100,
      marginHorizontal: 8
    },  
    image: {
      width: 200,
      height: 200,
      margin: 20
    },  
})