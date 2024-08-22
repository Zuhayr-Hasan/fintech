import React from 'react';
import { Image, StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

const alfalahLogo = require('../assets/alfalah.png');
const meezanLogo = require('../assets/meezan.png');

const filteredFunds = [
  { 
    id: 1,
    name: 'Alfalah Islamic Bank',
    annualReturn: 20.20,
    logo: alfalahLogo, 
  },
  {
    id: 2,
    name: 'Meezan Cash Fund',
    annualReturn: -19.81,
    logo: meezanLogo,
  },
  { 
    id: 3,
    name: 'Alfalah Islamic Bank',
    annualReturn: 20.20,
    logo: alfalahLogo, 
  },
  {
    id: 4,
    name: 'Meezan Cash Fund',
    annualReturn: -19.81,
    logo: meezanLogo,
  },
  { 
    id: 5,
    name: 'Alfalah Islamic Bank',
    annualReturn: 20.20,
    logo: alfalahLogo, 
  },
  {
    id: 6,
    name: 'Meezan Cash Fund',
    annualReturn: 19.81,
    logo: meezanLogo,
  },
  { 
    id: 7,
    name: 'Alfalah Islamic Bank',
    annualReturn: 20.20,
    logo: alfalahLogo, 
  },
];

const FundList = () => {
  return (
    <View style={styles.container}>
      <Text>Total funds ({filteredFunds.length})</Text>
      <FlatList
        data={filteredFunds}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fundItem}>
            <View style={styles.fundRow}>
              <View style={styles.fundInfo}>
                <Image source={item.logo} style={styles.fundLogo} />
                <Text style={styles.fundName}>{item.name}</Text>
              </View>
              <View style={styles.annualReturn}>
                <Text style={styles.annualReturnLabel}>Annual Return</Text>
                <Text  
                    style={[
                    styles.returnText,
                    { color: item.annualReturn >= 0 ? 'green' : 'red', backgroundColor: item.annualReturn >= 0 ? "#ebfaee" : "#faebec" }
                  ]}>
                  {item.annualReturn >= 0 ? `↑ +${item.annualReturn}%` : `↓ ${item.annualReturn}%`}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FundList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  fundItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  fundRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fundInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fundLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain', 
  },
  fundName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  annualReturn: {
    alignItems: 'flex-end', 
  },
  annualReturnLabel: {
    fontSize: 14,
    color: '#666',
  },
  returnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 5
  },
  detailsButton: {
    marginTop: 16,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  detailsButtonText: {
    color: '#1F2937',
    fontSize: 14,
  },
});
