import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';

import HeaderImageScrollView from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StarRating from '../components/StarRating';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const DetailsProducto = ({route, navigation}) => {
  const {restaurant, image} = route.params;

  return (
    <View style={styles.container}>
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => <Image source={image} style={styles.image} />}
        renderForeground={() => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}>
            <FontAwesome name={'arrow-left'} color={'white'} size={30} />
          </TouchableOpacity>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView}>
            <Text style={styles.navTitle}>{restaurant.name}</Text>
          </Animatable.View>
        )}>
        <View style={styles.titleContainer}>
          <Text style={styles.imageTitle}>{restaurant.name}</Text>

          <View style={styles.description}>
            <Text style={styles.description}>
              {restaurant.shortDescription}
            </Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.description}>{restaurant.longDescription}</Text>
          </View>
          <View style={styles.stars}>
            <Text style={styles.poppins}>Calificación {'     '}</Text>
            <StarRating
              ratings={restaurant.stars}
              reviews={restaurant.quantityVotes}
              size={22.5}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>
              {' '}
              <FontAwesome5 name="map-marked-alt" color={'black'} size={20} />
              {'  '}
              Dirección
            </Text>
            <Text style={styles.contentText}>{restaurant.address}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>
              <FontAwesome name="phone" color={'black'} size={20} />
              {'  '}
              Teléfono
            </Text>
            <Text style={styles.contentText}>{restaurant.phone}</Text>
          </View>
        </View>
      </HeaderImageScrollView>
    </View>
  );
};

export default DetailsProducto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poppins: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 17.5,
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
  titl: {
    fontSize: 23,
    color: '#007AFF',
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
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  contentTitle: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 17.5,
    width: '100%',
    textAlign: 'center',
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17.5,
    width: '100%',
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  stars: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    marginVertical: 20,
    justifyContent: 'center',
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
    padding: 20,
  },
  imageTitle: {
    color: '#007AFF',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontFamily: 'Poppins-ExtraBold',
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

  description: {
    marginTop: 10,
    fontSize: 16,
  },
  back: {
    marginTop: 10,
    marginLeft: 10,
    flex: 0,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    backgroundColor: '#00b3ff',
    position: 'absolute',
  },
});
