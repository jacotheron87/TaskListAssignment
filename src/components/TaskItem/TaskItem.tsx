import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Task } from '../../types/Task';

/*
Display a task as a card.
Allows marking incomplete tasks as complete using a button.
onComplete is a callback function to handle task completion.
Styles are defined to differentiate between completed and incomplete tasks.
*/

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
}

const TaskItem = ({ task, onComplete }: TaskItemProps): JSX.Element => {
  return (
    <Card
      style={[
        styles.card,
        task.completed ? styles.cardCompleted : null, // Apply conditional background color
      ]}
    >
      <Card.Title title={task.title} />
      <Card.Actions>
        {!task.completed && (
          <Button onPress={() => onComplete(task.id)}>Mark as Complete</Button>
        )}
        {task.completed && <Text style={styles.completed}>✓ Completed</Text>}
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: 'white', // Default color
  },
  cardCompleted: {
    backgroundColor: '#D4E4BC', // Background color when completed
  },
  completed: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default TaskItem;
