import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { styles } from '../styles';
import { Text } from '../Themed';
import { CardOptions } from '../CardOptions';
import moment from 'moment';

type PriorityCardProps = {
  icon: string;
  title: string;
  detail: string;
  id: string;
  taskDate: Date;
  startTime: Date;
};

export function PriorityCard({
  icon,
  title,
  detail,
  id,
  taskDate,
  startTime,
}: PriorityCardProps) {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      style={[
        styles.priorityCard,
        {
          backgroundColor: Colors[colorScheme].tint,
          shadowColor: Colors[colorScheme].tint,
        },
      ]}>
      <View style={styles.priorityTopContainer}>
        <View style={styles.priorityIconContainer}>
          <MaterialIcons
            size={24}
            color="white"
            name={icon ? icon[0].icon : 'content-paste'}
          />
        </View>
        <View>
          <CardOptions id={id} isPriority={true} />
        </View>
      </View>

      <Text
        style={{
          color: 'white',
          marginTop: 12,
          fontFamily: 'Poppins-SemiBold',
          fontSize: 14,
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: 12,
          marginTop: 8,
          fontFamily: 'Poppins-Regular',
        }}>
        {detail.length > 30 ? detail.substring(0, 30) + '...' : detail}
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Light',
          fontSize: 14,
          marginTop: 'auto',
          color: 'white',
        }}>
        {moment(taskDate).format('ddd, DD MMM')}{' '}
        {moment(startTime).format('LT')}
      </Text>
    </TouchableOpacity>
  );
}

export default PriorityCard;
