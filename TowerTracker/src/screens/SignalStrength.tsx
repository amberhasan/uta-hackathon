import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const SignalStrength = () => {
  const mockData = [
    {id: '1', tower: 'Tower A', strength: 80},
    {id: '2', tower: 'Tower B', strength: 60},
    {id: '3', tower: 'Tower C', strength: 45},
    // ... You can add more mock data here
  ];

  const getColorForStrength = strength => {
    if (strength > 75) return 'green';
    if (strength > 50) return 'yellow';
    return 'red';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signal Strength</Text>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.towerName}>{item.tower}</Text>
            <View style={styles.signalBarContainer}>
              <View
                style={[
                  styles.signalBar,
                  {
                    width: `${item.strength}%`,
                    backgroundColor: getColorForStrength(item.strength),
                  },
                ]}></View>
            </View>
            <Text style={styles.signalStrengthText}>{item.strength}%</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      {/* Footer goes here, if any */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  towerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signalBarContainer: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  signalBar: {
    height: '100%',
    borderRadius: 10,
  },
  signalStrengthText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignalStrength;
