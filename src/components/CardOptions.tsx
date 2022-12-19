import React from 'react';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useDataTask } from '../services/dataService';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { Text } from './Themed';
import { styles } from './styles';

type CardOptionsProps = {
  id: string;
  isPriority?: boolean;
};

export function CardOptions({ id, isPriority }: CardOptionsProps) {
  const { setDeleteData, setFinishData } = useDataTask();
  return (
    <TouchableOpacity style={styles.cardOptionsContainer}>
      <Menu style={styles.menuContainer}>
        <MenuTrigger>
          <Entypo
            style={styles.threeDotIcon}
            name="dots-three-vertical"
            size={18}
            color="gray"
          />
        </MenuTrigger>
        <MenuOptions
          customStyles={isPriority ? optionsPriorityStyles : optionsStyles}>
          <MenuOption
            style={styles.menuOptionContainer}
            onSelect={() => {
              setFinishData(id);
            }}>
            <Ionicons
              name="checkmark-done" // color={Colors.IconOption}
              size={18}
              color={isPriority ? Colors.light.tint : 'white'}
            />
            <Text
              style={
                isPriority ? styles.optionPriorityText : styles.optionText
              }>
              Set as Done
            </Text>
          </MenuOption>
          <MenuOption
            style={styles.menuOptionContainer}
            onSelect={() => {
              setDeleteData(id);
            }}>
            <FontAwesome5
              name="trash" // color={Colors.IconOption}
              size={18}
              color={isPriority ? Colors.light.tint : 'white'}
            />
            <Text
              style={
                isPriority ? styles.optionPriorityText : styles.optionText
              }>
              Remove Task
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </TouchableOpacity>
  );
}

const optionsStyles = {
  optionsContainer: {
    backgroundColor: Colors.light.tint,
    paddingLeft: 7,
    paddingVertical: 5,
    width: 155,
    borderRadius: 8,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 3,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  // optionText: {
  //   ...Font.style.lightWhiteText,
  // },
};

const optionsPriorityStyles = {
  optionsContainer: {
    backgroundColor: 'white',
    paddingLeft: 7,
    paddingVertical: 5,
    width: 155,
    borderRadius: 8,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 3,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  // optionText: {
  //   ...Font.style.lightWhiteText,
  // },
};
