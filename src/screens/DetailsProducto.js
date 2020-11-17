import React from 'react';
import {  View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,} from 'react-native';

    import HeaderImageScrollView, {
        TriggeringView,
      } from 'react-native-image-header-scroll-view';
      
      import * as Animatable from 'react-native-animatable';
    import FontAwesome from 'react-native-vector-icons/FontAwesome';

   

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;


const DetailsProducto = () => {
  return (
      
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source='../assets/images/Restaurantes/pizza-mozzarella.jpg' style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>title</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>title</Text>
          </Animatable.View>
        )}>
        
     

       

        
      </HeaderImageScrollView>
    </View>
  );
};

export default DetailsProducto;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: MAX_HEIGHT,
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
    },
    name: {
      fontWeight: 'bold',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionContent: {
      fontSize: 16,
      textAlign: 'justify',
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer: {
      flexDirection: 'row',
      backgroundColor: '#FF6347',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingHorizontal: 15,
    },
    category: {
      fontSize: 14,
      color: '#fff',
      marginLeft: 10,
    },
    titleContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 24,
    },
    navTitleView: {
      height: MIN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle: {
      color: 'white',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
    sectionLarge: {
      minHeight: 300,
    },
  });
  