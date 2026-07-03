
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../alert';
import styles from '../Styles';
import { getColors } from './theme';
import { Ionicons } from '@expo/vector-icons';

export default function TaskList({ navigation, darkMode }) {
  const colors = getColors(darkMode);
  const [id, setId] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = tasks.filter((item) =>
    item.eventName.toLowerCase().includes(searchText.toLowerCase())
  );

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving Tasks:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleAddTask = () => {
    if (
      id.trim() !== '' &&
      eventName.trim() !== '' &&
      eventDate.trim() !== '' &&
      description.trim() !== ''
    ) {
      const newTask = { id, eventName, eventDate, description };
      const newTasks = tasks.concat(newTask);
      setTasks(newTasks);
      saveTasks(newTasks);
      setId('');
      setEventName('');
      setEventDate('');
      setDescription('');
      alert('Success', 'Event has been added successfully.');
    } else {
      return alert('Missing Fields', 'Please fill out all the fields.');
    }
  };

  const viewTaskHandler = (task) => {
    navigation.navigate('ViewScreen', { task });
  };

  const deleteTask = (index) => {
    let updatedTasks = tasks.concat();
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteHandler = (index) => {
    return alert(
      'Delete Event',
      'Are you sure you want to delete ' + tasks[index].eventName + '?',
      [
        { text: 'Yes', onPress: () => deleteTask(index) },
        { text: 'No' },
      ]
    );
  };

  return (
    <View style={[styles.mainContainer, { backgroundColor: colors.bg }]}>
      <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          
          <Text style={[styles.title, { color: colors.text }]}>Search Events</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.card,
                color: colors.text,
                borderColor: colors.text,
              },
            ]}
            placeholder="Search For Events"
            placeholderTextColor={darkMode ? '#aaa' : '#999'}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />

          <Text style={[styles.title, { color: colors.text }]}>Add New Event</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.card,
                color: colors.text,
                borderColor: colors.text,
              },
            ]}
            placeholder="Enter Event ID"
            placeholderTextColor={darkMode ? '#aaa' : '#999'}
            value={id}
            onChangeText={(text) => setId(text)}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.card,
                color: colors.text,
                borderColor: colors.text,
              },
            ]}
            placeholder="Enter Event Name"
            placeholderTextColor={darkMode ? '#aaa' : '#999'}
            value={eventName}
            onChangeText={(text) => setEventName(text)}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.card,
                color: colors.text,
                borderColor: colors.text,
              },
            ]}
            placeholder="Enter Event Date"
            placeholderTextColor={darkMode ? '#aaa' : '#999'}
            value={eventDate}
            onChangeText={(text) => setEventDate(text)}
          />
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.card,
                color: colors.text,
                borderColor: colors.text,
              },
            ]}
            placeholder="Enter Event Description"
            placeholderTextColor={darkMode ? '#aaa' : '#999'}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={[styles.title, { color: colors.text }]}>ADD EVENT</Text>
          </TouchableOpacity>

          <FlatList
            data={filteredTasks}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <View style={{ alignItems: 'center' }}>
                <View style={styles.taskItem}>
                  <Text style={[styles.taskField, { color: colors.text }]}>
                    ID: <Text style={[styles.taskText, { color: colors.text }]}>{item.id}</Text>
                  </Text>

                  <Text style={[styles.taskField, { color: colors.text }]}>
                    Event: <Text style={[styles.taskText, { color: colors.text }]}>{item.eventName}</Text>
                  </Text>

                  <Text style={[styles.taskField, { color: colors.text }]}>
                    Date: <Text style={[styles.taskText, { color: colors.text }]}>{item.eventDate}</Text>
                  </Text>

                  <Text style={[styles.taskField, { color: colors.text }]}>
                    Description: <Text style={[styles.taskText, { color: colors.text }]}>{item.description}</Text>
                  </Text>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => viewTaskHandler(item)}
                    >
                      <Text style={styles.actionText}>VIEW EVENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={() => deleteHandler(index)}
                    >
                      <Text style={styles.actionText}>DELETE EVENT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

        </View>
      </ScrollView>
    </View>
  );
}
