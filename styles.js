import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#efefef',
  },
  headerTitle: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000000',
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    margin: 14,
    width: 250,
    height: 50,
    backgroundColor: '#cb6d4f',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  }
});
