import { useState } from 'react'
import { 
  StyleSheet, 
  View,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/goal-item';
import GoalInput from './components/goal-input';



export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return( 
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler}/>
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
  },
  listContainer: {
    flex: 5
  },
});
