import { CardOptions } from './CardOptions';
import moment from 'moment';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from './Themed';
import CategoryChip from './CategoryChip';
import { styles } from './styles';
import ReadMore from '@fawazahmed/react-native-read-more';
import Colors from '../constants/Colors';
import { width } from '../common/utils';

type PriorityCardProps = {
  id: string;
  priority: number;
  title: string;
  category: string;
  taskDate: Date;
  startTime: Date;
  canEdit: boolean;
  detail: string;
};

export function TaskCard({
  id,
  title,
  priority,
  category,
  taskDate,
  startTime,
  canEdit,
  detail,
}: PriorityCardProps) {
  return (
    <TouchableOpacity style={styles.taskCardContainer}>
      <View style={{ width: width / 1.23 }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16 }}>
            {title}
          </Text>
          {
            <CategoryChip
              priority={priority}
              category={category}></CategoryChip>
          }
        </View>
        {detail && (
          <ReadMore
            seeMoreStyle={{ color: Colors.light.tint }}
            numberOfLines={3}
            style={{
              marginTop: 8,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: 'gray',
            }}>
            {detail}
          </ReadMore>
        )}
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 14,
            marginTop: 12,
          }}>
          {moment(taskDate).format('ddd, DD MMM')}{' '}
          {moment(startTime).format('LT')}
        </Text>
      </View>
      {canEdit && <CardOptions id={id} isPriority={false} />}
    </TouchableOpacity>
  );
}

export default TaskCard;
