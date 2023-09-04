import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1687529788874-1498923753-ebcd7c4c3c7e8e7b282c42ee3db4e6ce1687529796-1920-1920.webp?864711003',
  },
  {
    coverImageUri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1687529668137-3342357759-8c566d9f7ebf6567a7a3df924c5141a91687529678-1920-1920.webp?864711003',
  },
  {
    coverImageUri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1627503359084-6980601132-651c66399e4e3b57770c68fec71f7bcc1627503361-1920-1920.webp?864711003',
  },
  {
    coverImageUri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1685633349060-1804278969-71afa2e4c834bb9af560a629cf9b0dc61685633356-1920-1920.webp?864711003', 
  },
];

const CarouselSliders = () => {
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View>
        <Image
          style={styles.card}
          source={{ uri: data.coverImageUri }}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 1,
    height: width * 0.4,
  }
});

export default CarouselSliders;
