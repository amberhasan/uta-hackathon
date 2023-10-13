import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TowerDetails = () => {
  const [selectedTower, setSelectedTower] = useState(null);
  const lastTap = useRef(null); // This ref will keep track of the last tap timestamp

  const towers = {
    'Tower A': {
      location: '123 Tower St.',
      height: '200m',
      frequency: '2.4GHz',
    },
    'Tower B': {
      location: '456 Tower Ln.',
      height: '250m',
      frequency: '5GHz',
    },
    'Tower C': {
      location: '789 Tower Rd.',
      height: '230m',
      frequency: '2.4GHz',
    },
  };

  const handleTap = tower => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (lastTap.current && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      setSelectedTower(null); // Hide details if double tapped
    } else {
      setSelectedTower(tower); // Show details if single tapped
    }

    lastTap.current = now;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tower Details</Text>

      <View style={styles.dropdownContainer}>
        {['Tower A', 'Tower B', 'Tower C'].map(tower => (
          <TouchableOpacity
            key={tower}
            style={styles.dropdownItem}
            onPress={() => handleTap(tower)}>
            <Text style={styles.towerText}>{tower}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedTower && (
        <View style={styles.detailsCard}>
          <Text style={styles.detailsHeader}>{selectedTower}</Text>
          <Text>Location: {towers[selectedTower].location}</Text>
          <Text>Height: {towers[selectedTower].height}</Text>
          <Text>Frequency: {towers[selectedTower].frequency}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    margin: 20,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    width: '80%',
    paddingVertical: 10,
  },
  dropdownItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
  },
  towerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsCard: {
    width: '80%',
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  detailsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TowerDetails;
