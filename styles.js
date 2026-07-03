import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#554971',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontFamily: 'Trebuchet',
    marginLeft: 20,
    color: '#ffffff',
  },
  logo: {
    width: 60,
    height: 60,
    margin: 10,
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    fontFamily: 'Trebuchet',
    flex: 1,
    //alignItems: 'stretch',//
    
  },
  container: {
    backgroundColor: '#ffffff',
    fontFamily: 'Trebuchet',
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
    fontFamily: 'Trebuchet',
    fontWeight: 'bold',
  },
  taskItem: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  taskField: {
    fontFamily: 'Trebuchet',
    fontSize: 16,
    color: '#8AC6D0',
  },
  taskText: {
    fontSize: 16,
    fontFamily: 'Trebuchet',
    color: '#262626',
    textAlign: 'left',
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
    backgroundColor: '#63768D',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Trebuchet',
    fontSize: 18,
    textAlign: 'center',
  },
  actionButton: {
    margin: 7,
    width: '45%',
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#8AC6D0',
  },
  actionText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Trebuchet',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: '#595959',
    color: '#262626',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'Trebuchet',
  },
  settingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  settingText: {
    fontSize: 16,
    fontFamily: 'Trebuchet',
    color: '#8AC6D0',
    textAlign: 'left',
  },
  icon: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    //marginRight: 10,//
  },
  imageContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  image: {
    width: 250,
    height: 200,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent:'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#98A869',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    borderTopWidth: '#333',
  },
  navText: {
    color: '#ffffff',
    textAlign: 'center',

  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#888',
    //backgroundColor: '#ffffff',//
    borderRadius: 20,
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 20,
  },

  eventPreviews: {
    width: '100%',
    padding: 15,
    marginTop: 20,
  },

  previewText: {
    fontSize: 16,
    marginBottom: 15,
  },

  eventImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 10,
  },

  eventCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
  },

  eventTitle: {
    fontSize:18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 4,
    color: '#fffff',
  },

  eventTime: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  
 
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 15,
  marginBottom: 10,
  color: '#666'
},

divider: {
  height: 1,
  width: '90%',
  backgroundColor: '#ccc',
  marginVertical: 20,
  color: '#666'
},
 

});
