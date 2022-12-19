import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { styles } from '../styles';
import { Text } from '../Themed';

type ChipButtonProps = {
  setSelectedCategory: any;
  isSelected: boolean;
  title: string;
  icon: string;
};

export function ChipButton({
  setSelectedCategory,
  isSelected,
  title,
  icon,
}: ChipButtonProps) {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(title)}
      key={title}
      style={styles.chipContainer}>
      <View style={styles.chipCircleContainer}>
        <MaterialIcons name={icon} size={14} color={Colors[colorScheme].tint} />
      </View>

      <Text style={styles.chipText}>{title}</Text>
      {isSelected && (
        <View style={styles.selectedCategoryCover}>
          <FontAwesome name="check" color="white" size={18} />
        </View>
      )}
    </TouchableOpacity>
  );
}
