import {StyleSheet} from 'react-native';
export const primaryStyles = StyleSheet.create({
  baseLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerLayout: {
    flex: 1,
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  width: {
    width: '100%',
  },
  loading: {
    display : 'flex',
    alignItems: 'center',
    height : '100%',
    justifyContent: 'center',
    backgroundColor: '#00b3fa',
    flexDirection : 'column'
  },
  loadingLogo:{
    width : 200,
    height : 200
  }
});
