import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    zIndex: 100,
    marginTop: 'auto',
  },
  bottomMenuContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    position: 'relative',
    borderRadius: 40,
    height: 66,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#f8f8f8',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },
});
