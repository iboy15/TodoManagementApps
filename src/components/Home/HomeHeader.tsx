import React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export function HomeHeader() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.topContainer}>
      <View>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 16,
          }}>
          Hi ! {'\n'}Have a great day
        </Text>
      </View>
      <FontAwesome
        name="user-circle"
        size={36}
        color={Colors[colorScheme].secondary}
      />
    </View>
  );
}

export default HomeHeader;
