import { TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import React from 'react';
import { isEqual } from 'lodash';
import moment from 'moment';

type BodyInputProps = {
  startTime: Date;
  endTime: Date;
  title: string;
  setTitle: any;
  detail: string;
  setDetail: any;
  setDateMode: any;
  setDatePickerVisibility: any;
};

const BodyInput = ({
  startTime,
  endTime,
  title,
  setTitle,
  detail,
  setDetail,
  setDateMode,
  setDatePickerVisibility,
}: BodyInputProps) => {
  const showDatePicker = (dateMode: string) => {
    setDateMode(dateMode);
    setDatePickerVisibility(true);
  };
  return (
    <>
      <View style={styles.rowContainer}>
        <View>
          <Text>From</Text>
          <TouchableOpacity
            style={styles.timeBtn}
            onPress={() => showDatePicker('start')}>
            <Ionicons
              style={{ marginRight: 12 }}
              name="md-time-outline"
              size={24}
              color="black"
            />
            <Text>{moment(startTime).format('LT')}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>To </Text>
          <TouchableOpacity
            style={styles.timeBtn}
            onPress={() => showDatePicker('end')}>
            <Ionicons
              style={{ marginRight: 12 }}
              name="md-time-outline"
              size={24}
              color="black"
            />
               <Text>{moment(endTime).format('LT')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 4 }} />

      <Text>Title</Text>

      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.titleInput}
        placeholder="Task title"
      />

      <View style={{ height: 4 }} />

      <Text>Add Details</Text>

      <TextInput
        textAlignVertical="top"
        value={detail}
        multiline
        onChangeText={setDetail}
        style={styles.detailInput}
        placeholder="Task details"
      />
    </>
  );
};

function areEqual(prevProps: any, nextProps: any) {
  return isEqual(prevProps, nextProps);
}

export default React.memo(BodyInput, areEqual);
