import { StyleSheet } from 'react-native';

export const makeStyles = () =>
  StyleSheet.create({
    investButton: {
    backgroundColor: '#222',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#444',
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  investText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  });