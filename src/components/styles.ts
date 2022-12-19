import { StyleSheet } from 'react-native';
import { width } from '../common/utils';
import Colors from '../constants/Colors';

export const styles = StyleSheet.create({
  menuOptionContainer:{
    flexDirection: 'row',
  },
  threeDotIcon:{
    top: 5,
    left:5
  },
  menuContainer:{
    height: 30,
  },
  cardOptionsContainer:{
    padding: 6,
  },
  optionPriorityText: {
    fontSize: 14,
    color: Colors.light.tint,
    marginLeft: 8,
  },
  optionText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 8,
  },
  taskCardContainer: {
    backgroundColor: 'white',
    shadowColor: '',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  priorityTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priorityIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priorityCard: {
    padding: 8,
    marginLeft: 16,
    borderRadius: 8,

    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 5,
    width: width / 3,
    height:220
   
  },
  chipText: {
    color: 'white',
    marginLeft: 4,
    fontSize: 10,
  },
  selectedCategoryCover: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  chipCircleContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: Colors.dark.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.light.tint,
    marginRight: 4,
    paddingLeft: 8,
    paddingRight: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 6,
    alignItems: 'center',
  },
});
