import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 30,
    shadowColor: '',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    backgroundColor: 'white',
    elevation: 5,
  },
});
