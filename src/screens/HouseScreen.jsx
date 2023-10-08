import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

function HouseScreen({setView}) {
  const [maintenanceInfo, setMaintenanceInfo] = useState([
    {id: '1', text: 'Seasonal Inspections: Prepare for upcoming season'},
    {id: '2', text: 'HVAC: Change filters'},
    {id: '3', text: 'Roof & Gutters: Check for damages and clean blockages'},
    {id: '4', text: 'Safety Checks: Test smoke alarms and CO detectors'},
    {id: '5', text: 'Plumbing: Check for leaks and clean drains'},
    {id: '6', text: 'Electrical Systems: Inspect main panel and outlets'},
    {id: '7', text: 'Landscaping: Prune trees and fertilize lawn'},
    {id: '8', text: 'Pest Control: Schedule annual inspection'},
    {id: '9', text: 'General Cleaning: Deep clean specific areas'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Maintenance Info</Text>
      <FlatList
        data={maintenanceInfo}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.infoItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => setView('home')}>
        <Text style={styles.buttonText}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  infoItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#667EEA',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HouseScreen;
