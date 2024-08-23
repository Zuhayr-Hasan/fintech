import React from 'react';
import { Image, StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useFunds } from '../hooks/useFunds';

const alfalahLogo = require('../assets/alfalah.png');
const meezanLogo = require('../assets/meezan.png');

const FundList = () => {
  const { data, error, isLoading } = useFunds();

  console.log(data);

  return (
    <View style={styles.container}>
      <Text>Total funds ({data?.length})</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fundItem}>
            <View style={styles.fundRow}>
              <View style={styles.fundInfo}>
                { item.name.includes("Meezan") ? <Image source={meezanLogo} style={styles.fundLogo} /> : <Image source={alfalahLogo} style={styles.fundLogo} />}
                
                <Text style={styles.fundName}>{item.name}</Text>
              </View>
              <View style={styles.annualReturn}>
                <Text style={styles.annualReturnLabel}>Annual Return</Text>
                <Text  
                    style={[
                    styles.returnText,
                    { color: item.NAV >= 0 ? 'green' : 'red', backgroundColor: item.NAV >= 0 ? "#ebfaee" : "#faebec" }
                  ]}>
                  {item.NAV >= 0 ? `↑ +${item.NAV}%` : `↓ ${item.NAV}%`}
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
    maxWidth: 180,
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