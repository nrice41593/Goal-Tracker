import { 
  StyleSheet, 
  Text, 
  View,
  Pressable
} from 'react-native';

export default function GoalItem (props) {
  return (
    <Pressable 
        android_ripple={{color: '#fff'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      padding: 5,
      height: 50,
      borderRadius: 8,
      backgroundColor: 'rgb(242,242,247)',
      alignItems: 'center',
      flexDirection: 'row',
      
    },
    pressedItem:{
      opacity: 0.5,
    },  
    goalText: {
      fontSize: 18,
      color: 'rgb(28,28,30)',
      padding: 5,
      alignItems: 'flex-start'
    }
  });