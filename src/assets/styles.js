import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "#F2F2F2",
      paddingLeft: 16,
      paddingRight: 16
    },

    containerScroll: {
      minHeight: "auto",
      padding: 8,
      marginBottom: 16,
    },

    center: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center' 
    },

    alertGreen: {
      width: '100%',
      height: 'auto',
      justifyContent: 'center',
      color: '#ff6666',
      backgroundColor: '#ffe6e6',
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'red',
      marginTop: 8,
      marginBottom: 8,
      padding: 8,
    }, 

    alertRed: {
      height: 'auto',
      justifyContent: 'center',
      color: '#ff6666',
      backgroundColor: '#ffe6e6',
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'red',
      marginTop: 8,
      marginBottom: 8,
      padding: 8,
    }, 
    
    alertOrange: {
      height: 'auto',
      justifyContent: 'center',
      color: '#ff6666',
      backgroundColor: '#ffe6e6',
      borderWidth: 1,
      borderRadius: 6,
      borderColor: 'red',
      marginTop: 8,
      marginBottom: 8,
      padding: 8,
    }, 

    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },

    strongShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,          
        },
        elevation: 5,
    }
});

export default Styles;