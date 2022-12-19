import BottomPicker from './../../components/CreateTodo/BottomPicker';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Text, View } from '../../components/Themed';
import moment from 'moment';
import { SetStateAction, useState } from 'react';
import Colors from '../../constants/Colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { IS_ANDROID } from '../../common/utils';
import useColorScheme from '../../hooks/useColorScheme';
import CalendarStripTop from '../../components/CreateTodo/CalendarStripTop';
import BodyInput from '../../components/CreateTodo/BodyInput';
import Toast from 'react-native-toast-message';
import {useDataTask} from '../../services/dataService';
import { useNavigation } from '@react-navigation/native';

export default function CreateTodoScreen() {
  const colorScheme = useColorScheme();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [priority, setPriority] = useState<number>(1);
  const [dateMode, setDateMode] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Work');
  const { addData } = useDataTask();

  const navigation=useNavigation()

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: SetStateAction<Date>) => {
    dateMode === 'start' ? setStartTime(date) : setEndTime(date);
    hideDatePicker();
  };

  const onStepPress = (position: number) => {
    setPriority(position);
  };

  const onCreateTaskPress = () => {
    try {
      if (title === '') {
        Toast.show({
          type: 'error',
          text1: 'Title is empty',
          text2: 'Please fill the title',
        });
      } else {
        addData({
          id: new Date().valueOf().toString(),
          title,
          detail,
          priority,
          category: selectedCategory,
          isDeleted: false,
          isDone: false,
          taskDate:selectedDate,
          startTime,
          endTime,
          createdAt: new Date(),
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ooppss, Sorry,',
        text2: 'Some thing went wrong, Please try again',
      });
    }

  };

  return (
    <KeyboardAvoidingView
      behavior={!IS_ANDROID === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <CalendarStripTop
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <BodyInput
        setDateMode={setDateMode}
        startTime={startTime}
        endTime={endTime}
        title={title}
        setTitle={setTitle}
        detail={detail}
        setDetail={setDetail}
        setDatePickerVisibility={setDatePickerVisibility}
      />
      <Text>Choose Priority</Text>
      <View style={{ height: 8 }} />

      <BottomPicker
        priority={priority}
        onStepPress={onStepPress}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <TouchableOpacity
        onPress={onCreateTaskPress}
        style={[
          styles.createTaskBtn,
          { backgroundColor: Colors[colorScheme].tint },
        ]}>
        <Text style={{ color: 'white' }}>Create Task</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Toast position="bottom" onHide={()=>navigation.goBack()} visibilityTime={2000}/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  createTaskBtn: {
    width: '100%',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 20,
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: 'white',
  },
});
