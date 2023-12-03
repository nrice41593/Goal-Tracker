import { useState } from 'react'
import { 
  StyleSheet, 
  View,
  FlatList,
  Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/goal-item';
import GoalInput from './components/goal-input';



export default function App() {
  const [modalIsVisibile, setModalIsVisibile] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisibile(true)
  }
  function endAddGoalHandler() {
    setModalIsVisibile(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return( 
    <>
      <StatusBar style='dark'/>
      <View style={styles.appContainer}>

        <Button 
          title='Add New Goal' 
          onPress={startAddGoalHandler}
        />
        
        <GoalInput 
          visible={modalIsVisibile} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
        />
        
        <View style={styles.listContainer}> 
          <FlatList 
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 50
  },
  listContainer: {
    flex: 5
  },
});
