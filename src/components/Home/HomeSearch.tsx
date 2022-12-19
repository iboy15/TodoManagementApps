import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput } from 'react-native';
import { View } from '../Themed';
import { styles } from './styles';

type BodyInputProps = {
  searchParams: string;
  setSearchParams: any;
};

export function HomeSearch({ searchParams, setSearchParams }: BodyInputProps) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} />
      <TextInput
        value={searchParams}
        onChangeText={setSearchParams}
        placeholder="Search task"
      />
    </View>
  );
}

export default HomeSearch;
