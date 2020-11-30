import React from 'react';
import {Dimensions, TouchableOpacity, Image} from 'react-native';
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
  SubProductImageContainer,
  SubProductImage,
  SubProductContent,
} from './Market.styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';

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
      imageUrl: 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
    },
    {
      id: '2',
      description: 'Pizza',
      bgColor: '#0f0b3f',
      imageUrl: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg',
    },
    {
      id: '3',
      description: 'Pollo',
      bgColor: '#00b3ff',
      imageUrl: 'https://www.hola.com/imagenes/cocina/recetas/20190729146642/pollo-asado-al-horno-con-tomillo/0-705-707/pollo-asado-horno-tomillo-m.jpg',
    },
    {
      id: '4',
      description: 'Salchipapas',
      bgColor: '#0f0b3f',
      imageUrl: 'https://i.pinimg.com/736x/ae/d0/da/aed0daa947c99a4a5eadebe5dc65c80d.jpg',
    },
    {
      id: '5',
      description: 'Arepas',
      bgColor: '#0f0b3f',
      imageUrl: 'https://www.recetasderechupete.com/wp-content/uploads/2019/11/Tipos-de-arepa-2.jpg',
    },
    {
      id: '6',
      description: 'Gaseosas',
      bgColor: '#00b3ff',
      imageUrl: 'https://www.arrozpaisa.info/NeivaCajaAgraria/wp-content/uploads/2019/05/gaseosas-1-5.jpg',
    },
    {
      id: '7',
      description: 'Licores',
      bgColor: '#0f0b3f',
      imageUrl: 'https://licoresdelasabana.com/wp-content/uploads/2019/08/whiski_licores_de_la_sabana-min.jpg',
    },
    {
      id: '8',
      description: 'Carnes',
      bgColor: '#00b3ff',
      imageUrl: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/04/como-sauvizar-carnes.jpg',
    },
  ],
  [
    {
      id: '1',
      description: 'Fritos',
      bgColor: '#00b3ff',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91M5DIRwhoL._SX466_PIbundle-64,TopRight,0,0_AA466SH20_.jpg',
    },
    {
      id: '2',
      description: 'Dulces',
      bgColor: '#0f0b3f',
      imageUrl: 'https://image.freepik.com/foto-gratis/diferentes-tipos-dulces-dulces-colores_23-2147921698.jpg',
    },
    {
      id: '3',
      description: 'Helados',
      bgColor: '#00b3ff',
      imageUrl: 'https://i.blogs.es/098b7c/helados1/450_1000.jpg',
    },
    {
      id: '4',
      description: 'Ensaladas',
      bgColor: '#0f0b3f',
      imageUrl: 'https://s1.eestatic.com/2016/10/11/cocinillas/Cocinillas_162247460_116258365_1024x576.jpg',
    },
    {
      id: '5',
      description: 'Vegetariano',
      bgColor: '#0f0b3f',
      imageUrl: 'https://www.aguademar.es/blog/wp-content/uploads/2018/08/MEDITERRANEA_banner_VEGANOS_1200x628-02-1200x628.jpg',
    },
    {
      id: '6',
      description: 'food China',
      bgColor: '#00b3ff',
      imageUrl: 'https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-china.jpg?width=1200&enable=upscale',
    },
    {
      id: '7',
      description: 'Gourmet',
      bgColor: '#0f0b3f',
      imageUrl: 'https://s1.eestatic.com/2017/11/19/cocinillas/Cocinillas_263237264_116407383_1024x576.jpg',
    },
    {
      id: '8',
      description: 'Servicios',
      bgColor: '#00b3ff',
      imageUrl: 'https://www.marketingdirecto.com/wp-content/uploads/2015/01/servicio_al_cliente.png',
    },
  ],
  [
    {
      id: '1',
      description: 'Mascotas',
      bgColor: '#00b3ff',
      imageUrl: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/mascotas-preferidas-espanoles.jpg',
    },
    {
      id: '2',
      description: 'USA',
      bgColor: '#0f0b3f',
      imageUrl: 'https://www.mooxye.com/blog/wp-content/uploads/2019/08/joshua-hoehne-7s1j-DZ5KYQ-unsplash-750x379.jpg',
    },
    {
      id: '3',
      description: 'Cracks',
      bgColor: '#00b3ff',
      imageUrl: 'https://yt3.ggpht.com/ytc/AAUvwnjb-nYpbiEDKFzAZhfBJGOafMjgsKAxmSVt0ycSUw=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: '4',
      description: 'Deportes',
      bgColor: '#0f0b3f',
      imageUrl: 'https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.jpg',
    },
    {
      id: '5',
      description: 'Bonos',
      bgColor: '#0f0b3f',
      imageUrl: 'https://apuestasfree.com/wp-content/uploads/2019/12/bono-200000-pesos-colombia.png',
    },
    {
      id: '6',
      description: 'Juguetería',
      bgColor: '#00b3ff',
      imageUrl: 'https://www.america-retail.com/static//2020/08/jugueteria.png',
    },
    {
      id: '7',
      description: 'Sex Shop',
      bgColor: '#0f0b3f',
      imageUrl: 'https://www.dhresource.com/f2/albu/g8/M01/73/6F/rBVaVF4HA1KAVh09AAa0sRj292s668.jpg',
    },
    {
      id: '8',
      description: 'Bebés y Niños',
      bgColor: '#00b3ff',
      imageUrl: 'https://previews.123rf.com/images/oksun70/oksun701509/oksun70150900120/46041764-dos-adorables-beb%C3%A9s-ni%C3%B1os-jugando-con-juguetes-educativos-los-ni%C3%B1os-peque%C3%B1os-ni%C3%B1a-y-un-ni%C3%B1o-sentado-en-el-suelo-aisla.jpg',
    },
  ],
  [
    {
      id: '1',
      description: 'Vehículos',
      bgColor: '#00b3ff',
      imageUrl: 'https://revistapym.com.co/wp-content/uploads/2017/01/vehiculos.jpg',
    },
    {
      id: '2',
      description: 'IQOS Y HEETS',
      bgColor: '##0f0b3f',
      imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/T5QCGUZQVBC6NHCXA6BXSA2C4U.jpg',
    },
    {
      id: '3',
      description: 'Fundaciones',
      bgColor: '#00b3ff',
      imageUrl: 'https://www.asociacionproade.org/s/cc_images/cache_2473296869.jpg?t=1492503175',
    },
    {
      id: '4',
      description: 'Navidad',
      bgColor: '#0f0b3f',
      imageUrl: 'https://www.agenciapi.co/sites/default/files/styles/foto_noticia_principal/public/2018-12/Navidad.jpg?h=c673cd1c&itok=-QlN6Qwl',
    },
    {
      id: '5',
      description: 'Eventos',
      bgColor: '#0f0b3f',
      imageUrl: 'https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg',
    },
    {
      id: '6',
      description: 'Recetas',
      bgColor: '#00b3ff',
      imageUrl: 'https://cdn7.recetasdeescandalo.com/wp-content/uploads/2020/03/Recetas-de-cuarentena-para-comer-bien-durante-el-confinamiento.jpg',
    },
  ],
];

const {width} = Dimensions.get('window');

class Market extends React.Component {
  state = {
    activeSlideIndex: 0,
  };

  render() {
    const {activeSlideIndex} = this.state;

    return (
      <MarketContainer>
        <MainProducts>
          {PRODUCTS.map((p) => this.renderProduct(p))}
        </MainProducts>
        <Carousel
          data={PAGES}
          renderItem={this.renderPage}
          sliderWidth={width - 20}
          itemWidth={width - 20}
          onSnapToItem={(index) => this.setState({activeSlideIndex: index})}
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

  renderProduct({id, description, bgColor}) {
    return (
      <MainProductContainer key={id}>
        <MainProductContent style={{backgroundColor: bgColor}}>
          <MainProductImage></MainProductImage>
          <MainProductDescription>{description}</MainProductDescription>
        </MainProductContent>
      </MainProductContainer>
    );
  }

  renderPage = ({index}) => {
    return (
      <ScrollableSection style={{width: width - 20}} key={index}>
        {PAGES[index].map((item, i) => (
          <SubProductContainer key={i}>
            <SubProductContent>
              <SubProductImageContainer style={{backgroundColor: item.bgColor}}>
                <SubProductImage
                 source={{uri : item.imageUrl || null }}
                />
              </SubProductImageContainer>
              <SubProductDescription>{item.description}</SubProductDescription>
            </SubProductContent>
          </SubProductContainer>
        ))}
      </ScrollableSection>
    );
  };
}

export default Market;
