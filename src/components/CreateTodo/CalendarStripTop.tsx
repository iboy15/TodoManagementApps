import { Text, View } from '../Themed';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import { styles } from './styles';
import Colors from '../../constants/Colors';
import React from 'react';
import { isEqual } from 'lodash';

const dayChangeAnimation = {
  type: 'border',
  duration: 200,
  borderWidth: 1,
  borderHighlightColor: 'white',
};

type CalendarStripProps = {
  selectedDate: Date;
  setSelectedDate:any;
};

const CalendarStripe = ({
  selectedDate,
  setSelectedDate,
}: CalendarStripProps) => {
  return (
    <View style={styles.topContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text>{moment(selectedDate).format('Do MMMM YYYY')}</Text>
          <Text>02 tasks today</Text>
        </View>
      </View>

      <CalendarStrip
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        dayComponentHeight={90}
        scrollable
        showMonth={false}
        selectedDate={selectedDate}
        onDateSelected={value => {
          setSelectedDate(value);
        }}
        daySelectionAnimation={dayChangeAnimation}
        style={styles.calendar}
        highlightDateNumberStyle={{
          color: 'white',
          fontSize: 14,
        }}
        startingDate={new Date()}
        highlightDateContainerStyle={calendarStyle.selectedContainer}
        dayContainerStyle={{ paddingVertical: 5 }}
        highlightDateNameStyle={calendarStyle.highlightDateNameStyle}
        highlightDateNumberContainerStyle={calendarStyle.highlightDateNumber}
        useNativeDriver={false}
        iconContainer={{ flex: 0.1 }}

        // useIsoWeekday={false}
      />
    </View>
  );
};

function areEqual(prevProps: any, nextProps: any) {
  return isEqual(prevProps, nextProps);
}

export default React.memo(CalendarStripe, areEqual);

const calendarStyle = {
  selectedContainer: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 10,
    height: 65,
  },
  highlightDateNumber: {
    backgroundColor: Colors.dark.secondary,
    borderRadius: 40,
    padding: 4,
    paddingTop: 6,
    minWidth: 30,
    minHeight: 30,
  },
  highlightDateNameStyle: {
    color: 'white',
    // fontFamily: 'Roboto-Medium',
    fontSize: 9,
    padding: 5.5,
  },
};
