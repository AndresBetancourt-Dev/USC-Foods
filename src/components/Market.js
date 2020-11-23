import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import {
  MarketContainer,
  MainProductContainer,
  MainProductImage,
  MainProductDescription,
  MainProducts,
  MainProductContent,
  ScrollableSection,
  SubProductDescription,
  SubProductContainer,
  SubProductImage,
  SubProductContent,
} from './Market.styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const PRODUCTS = [
  {
    id: '1',
    description: 'Categorias',
    bgColor: '#00b3ff',
    
    
  },
  {
    id: '2',
    description: 'Restaurantes',
    bgColor: '#0f0b3f',
  },
];

const PAGES = [
  [
    {
      id: '1',
      description: 'Hamburguesa',
      bgColor: '#00b3ff',
      
      
    },
    {
      id: '2',
      description: 'Pizza',
      bgColor: '#0f0b3f',
    },
    {
      id: '3',
      description: 'Pollo',
      bgColor: '#00b3ff',
    },
    {
      id: '4',
      description: 'Salchipapas',
      bgColor: '#0f0b3f',
    },
    {
      id: '5',
      description: 'Arepas',
      bgColor: '#0f0b3f',
    },
    {
      id: '6',
      description: 'Gaseosas',
      bgColor: '#00b3ff',
    },
    {
      id: '7',
      description: 'Licores',
      bgColor: '#0f0b3f',
    },
    {
      id: '8',
      description: ' Box',
      bgColor: '#00b3ff',
    },
  ],
  [
    {
      id: '1',
      description: 'SOAT',
      bgColor: '#00b3ff',
    },
    {
      id: '2',
      description: 'Tecnología',
      bgColor: '#0f0b3f',
    },
    {
      id: '3',
      description: 'Moda',
      bgColor: '#00b3ff',
    },
    {
      id: '4',
      description: 'Belleza',
      bgColor: '#0f0b3f',
    },
    {
      id: '5',
      description: 'Hogar',
      bgColor: '#0f0b3f',
    },
    {
      id: '6',
      description: 'Floristería',
      bgColor: '#00b3ff',
    },
    {
      id: '7',
      description: 'Regalos',
      bgColor: '#0f0b3f',
    },
    {
      id: '8',
      description: 'Servicios',
      bgColor: '#00b3ff',
    },
  ],
  [
    {
      id: '1',
      description: 'Mascotas',
      bgColor: '#00b3ff',
    },
    {
      id: '2',
      description: 'USA',
      bgColor: '#0f0b3f',
    },
    {
      id: '3',
      description: 'Cracks',
      bgColor: '#00b3ff',
    },
    {
      id: '4',
      description: 'Deportes',
      bgColor: '#0f0b3f',
    },
    {
      id: '5',
      description: 'Bonos',
      bgColor: '#0f0b3f',
    },
    {
      id: '6',
      description: 'Juguetería',
      bgColor: '#00b3ff',
    },
    {
      id: '7',
      description: 'Sex Shop',
      bgColor: '#0f0b3f',
    },
    {
      id: '8',
      description: 'Bebés y Niños',
      bgColor: '#00b3ff',
    },
  ],
  [
    {
      id: '1',
      description: 'Vehículos',
      bgColor: '#00b3ff',
    },
    {
      id: '2',
      description: 'IQOS Y HEETS',
      bgColor: '##0f0b3f',
    },
    {
      id: '3',
      description: 'Fundaciones',
      bgColor: '#00b3ff',
    },
    {
      id: '4',
      description: 'Navidad',
      bgColor: '#0f0b3f',
    },
    {
      id: '5',
      description: 'Eventos',
      bgColor: '#0f0b3f',
    },
    {
      id: '6',
      description: 'Recetas',
      bgColor: '#00b3ff',
    },
  ],
];

const { width } = Dimensions.get('window');

class Market extends React.Component {
  state = {
    activeSlideIndex: 0,
  };

  render() {
    const { activeSlideIndex } = this.state;

    return (
      <MarketContainer>
           <MainProducts>{PRODUCTS.map(p => this.renderProduct(p))}
           </MainProducts>
        <Carousel
          data={PAGES}
          renderItem={this.renderPage}
          sliderWidth={width - 20}
          itemWidth={width - 20}
          onSnapToItem={index => this.setState({ activeSlideIndex: index })}
        />
        <Pagination
          dotsLength={PAGES.length}
          activeDotIndex={activeSlideIndex}
          inactiveDotOpacity={0.4}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            backgroundColor: '#aaa',
          }}
        />
      </MarketContainer>
    );
  }

  renderProduct({ id, description, bgColor }) {
    return (
      <MainProductContainer key={id}>
        <MainProductContent style={{ backgroundColor: bgColor }}>
          <MainProductImage />
          <MainProductDescription>{description}</MainProductDescription>
        
        </MainProductContent>
      </MainProductContainer>
    );
  }

  renderPage = ({ index }) => {
    return (
      <ScrollableSection style={{ width: width - 20 }} key={index}>
        {PAGES[index].map((item, i) => (
          <SubProductContainer key={i}>
            <SubProductContent>
              <SubProductImage style={{ backgroundColor: item.bgColor }} />
              <SubProductDescription>{item.description}</SubProductDescription>
            </SubProductContent>
          </SubProductContainer>
        ))}
      </ScrollableSection>
    );
  };
}

export default Market;
