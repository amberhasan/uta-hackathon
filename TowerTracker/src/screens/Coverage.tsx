import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const Coverage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const mockData = [
    {
      id: '1',
      tower: 'Tower A',
      area: 'City Center',
      details:
        'Operational since 2010. Supports 4G and 5G services. Recently underwent maintenance in September 2023.',
      coverageStrength: 0.9,
    },
    {
      id: '2',
      tower: 'Tower B',
      area: 'North District',
      details:
        'Powered by renewable energy sources. Supports 3G, 4G, and 5G services. Infrastructure upgrade planned for December 2023.',
      coverageStrength: 0.8,
    },
    {
      id: '3',
      tower: 'Tower C',
      area: 'West Side',
      details:
        'Covers the largest area in the district. Equipped with advanced lightning protection systems. Operational since 2015.',
      coverageStrength: 0.95,
    },
    {
      id: '4',
      tower: 'Tower D',
      area: 'East Side',
      details:
        'Operational since 2008. Supports 2G, 3G, and 4G services. Scheduled for decommissioning in 2025.',
      coverageStrength: 0.6,
    },
    {
      id: '5',
      tower: 'Tower E',
      area: 'South District',
      details:
        'Newest tower, inaugurated in 2023. Fully supports 5G services. Features eco-friendly design and minimal energy consumption.',
      coverageStrength: 1,
    },
    {
      id: '6',
      tower: 'Tower F',
      area: 'Uptown',
      details:
        'Supports 3G and 4G services. Has an integrated backup power system ensuring uninterrupted service.',
      coverageStrength: 0.85,
    },
    {
      id: '7',
      tower: 'Tower G',
      area: 'Downtown',
      details:
        'Operational since 2012. Supports 2G, 3G, and 4G services. Underwent a major infrastructure upgrade in 2020.',
      coverageStrength: 0.75,
    },
  ];

  const toggleDetails = id => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const renderTower = ({item}) => {
    const isExpanded = item.id === expandedId;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => setExpandedId(isExpanded ? null : item.id)}>
        <View style={styles.towerHeader}>
          <Text style={styles.towerName}>{item.tower}</Text>

          <View style={styles.towerStrengthContainer}>
            <View
              style={{
                ...styles.fillStrength,
                height: `${item.coverageStrength * 100}%`,
              }}
            />
            <View style={styles.towerStrength} />
          </View>
        </View>

        <Text style={styles.areaName}>Covers: {item.area}</Text>
        {isExpanded && <Text style={styles.details}>{item.details}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coverage Areas</Text>
      <FlatList
        data={mockData}
        renderItem={renderTower}
        keyExtractor={item => item.id}
      />
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
  areaName: {
    fontSize: 16,
    marginTop: 10,
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
  details: {
    marginTop: 10,
    fontStyle: 'italic',
  },
  towerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  towerStrengthContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  towerStrength: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#333',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  fillStrength: {
    width: '75%',
    height: '55%',
    backgroundColor: '#4CAF50',
  },
});

export default Coverage;
