import { StyleSheet } from 'react-native';

export const makeStyles = () =>
  StyleSheet.create({
    heroImage: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
  heroContent: {
    paddingHorizontal: 16,
    marginTop: -50, // pulls the content up into the faded zone
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    marginTop: 6,
  },
  meta: {
    color: '#999',
    marginTop: 4,
  },
  description: {
    color: '#aaa',
    marginTop: 12,
  },
  ctaRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  watchButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  watchText: {
    color: '#000',
    fontWeight: '600',
  },
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