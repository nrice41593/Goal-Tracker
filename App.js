import { startTransition, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  ScrollView 
} from 'react-native';



export default function App() {
  
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    console.log(enteredText)
    setGoal(enteredText)
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      goal
    ]);
    setGoal('')
    console.log(courseGoals)
  }
  function resetGoalList() {
    setCourseGoals([])
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Institution' 
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <Text>List of Goals</Text>
      <View style={styles.listContainer}> 
        <ScrollView>
          {courseGoals.map((goal) => 
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.institutionText}>{goal}</Text>
            <Text style={styles.amountText}> $1,100</Text>
          </View>
          )}
        </ScrollView>
      </View>
      <Button title='Reset List' onPress={resetGoalList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
    
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    width: '80%',
    padding: 5
  },
  listContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 5,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgb(242,242,247)',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  institutionText: {
    fontSize: 18,
    color: 'rgb(28,28,30)',
    padding: 5,
    alignItems: 'flex-start'
  },
  amountText: {
    alignItems: 'flex-end'
  }
});
