import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useFunds } from '../hooks/useFunds';
import FundList from '../components/FundList'
import { FontAwesome } from '@expo/vector-icons';

const Funds = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { data: funds, isLoading, error } = useFunds();

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const filteredFunds = funds?.filter((fund: any) =>
    fund.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#ccc" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={handleSearchChange}
            placeholder="Search Funds"
          />
        </View>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <FontAwesome name="filter" size={20} color="#000" />
          <Text style={styles.dropdownText}></Text>
          <FontAwesome name={dropdownVisible ? "chevron-up" : "chevron-down"} size={16} color="#000" />
        </TouchableOpacity>
      </View>
      {dropdownVisible && (
        <View style={styles.dropdownMenu}>
          <Text style={styles.dropdownOption}>Option 1</Text>
          <Text style={styles.dropdownOption}>Option 2</Text>
        </View>
      )}
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error fetching funds</Text>}
     <FundList />
    </View>
  );
};

export default Funds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    maxHeight: "90%"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    flex: 1,
    marginRight: 8, 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownText: {
    marginLeft: 8,
    fontSize: 16,
    marginRight: 4, 
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 4,
    marginBottom: 16,
  },
  dropdownOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
  fundItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
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
  fundName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  annualReturn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnText: {
    fontSize: 16,
    marginLeft: 4,
  },
  detailsButton: {
    marginTop: 16,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
  },
  detailsButtonText: {
    fontWeight: 'bold',
    color: '#1F2937',
  },
});
