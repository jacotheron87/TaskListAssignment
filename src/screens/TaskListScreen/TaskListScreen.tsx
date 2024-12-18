import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { Task } from '../../types/Task';
import { fetchTasks } from '../../services/api/tasksService';
import TaskItem from '../../components/TaskItem/TaskItem';

/*
Fetches and displays a list of tasks.
Handles loading, success, and error states.
Allows marking tasks as completed.
*/

const TaskListScreen = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setError(null); // Clear any existing error if successful
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
        setError(err.message); // Set the error message
      })
      .finally(() => setLoading(false));
  }, []);

  const markAsComplete = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  return (
    <View style={styles.container}>
      {/* Error Message */}
      {error && (
        <Card style={styles.errorCard}>
          <Card.Content>
            <Text style={styles.errorText}>{error}</Text>
          </Card.Content>
        </Card>
      )}

      {/* Task List */}
      {!error && (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem task={item} onComplete={markAsComplete} />
          )}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorCard: {
    margin: 16,
    backgroundColor: '#f8d7da', // Light red for error
  },
  errorText: {
    color: '#721c24', // Dark red for error text
    fontSize: 16,
  },
});

export default TaskListScreen;
