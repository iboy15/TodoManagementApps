import React from 'react';
import { ChipButton } from './ChipButton';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { todoCategoriesList } from '../../constants/static';
import StepIndicator from 'react-native-step-indicator';
import { styles } from './styles';
import { isEqual } from 'lodash';

type BottomPickerProps = {
  priority: number;
  onStepPress: () => void;
  selectedCategory: string;
  setSelectedCategory: any;
};

const BottomPicker=({
  priority,
  onStepPress,
  selectedCategory,
  setSelectedCategory,
}: BottomPickerProps) =>{
  return (
    <>
      <StepIndicator
        stepCount={3}
        customStyles={thirdIndicatorStyles}
        currentPosition={priority}
        onPress={onStepPress}
        labels={['Low', 'Medium', 'High']}
      />
      <View style={styles.seperator} />
      <Text>Choose Category</Text>
      <View style={styles.chipContentContainer}>
        {todoCategoriesList.map(item => {
          const isSelected = item.title === selectedCategory;
          return (
            <ChipButton
              key={item.title}
              title={item.title}
              icon={item.icon}
              setSelectedCategory={setSelectedCategory}
              isSelected={isSelected}
            />
          );
        })}
      </View>
    </>
  );
}


function areEqual(prevProps: any, nextProps: any) {
  return isEqual(prevProps, nextProps);
}

export default React.memo(BottomPicker, areEqual);

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.light.tint,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Colors.light.tint,
  stepStrokeUnFinishedColor: Colors.light.tint,
  separatorFinishedColor: '#dedede',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#ffffff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: Colors.light.secondary,
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: Colors.light.tint,
};
