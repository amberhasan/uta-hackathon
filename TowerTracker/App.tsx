import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import TowerMap from './src/screens/TowerMap';
import SignalStrength from './src/screens/SignalStrength';
import Coverage from './src/screens/Coverage';
import TowerDetails from './src/screens/TowerDetails';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('TowerMap');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'TowerMap':
        return <TowerMap />;
      case 'SignalStrength':
        return <SignalStrength />;
      case 'Coverage':
        return <Coverage />;
      case 'TowerDetails':
        return <TowerDetails />;
      default:
        return <TowerMap />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {renderScreen()}
      <NavBar setActiveScreen={setActiveScreen} />
    </SafeAreaView>
  );
};

const NavBar: React.FC<{setActiveScreen: (screen: string) => void}> = ({
  setActiveScreen,
}) => (
  <View style={styles.navBar}>
    <TouchableOpacity onPress={() => setActiveScreen('TowerMap')}>
      <Text>Map</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveScreen('SignalStrength')}>
      <Text>Strength</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveScreen('Coverage')}>
      <Text>Coverage</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setActiveScreen('TowerDetails')}>
      <Text>Details</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
});

export default App;
