import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TowerMap = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tower Map</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.buttonText}>⚙️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a location or tower..."
        />
      </View>
      <View style={styles.mapPlaceholder}>
        <Text>Map Component goes here</Text>
      </View>

      {/* <View style={styles.legend}>
        <Text>High signal tower</Text>
        <Text>Medium signal tower</Text>
        <Text>Low signal tower</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  searchBar: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 5,
  },
  searchInput: {
    padding: 10,
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#E5E7EB',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default TowerMap;
