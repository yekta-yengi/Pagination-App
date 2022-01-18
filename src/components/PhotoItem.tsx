/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';

const { width, height } = Dimensions.get('window');

const PhotoItem = ({
  photoInfo, url,
}: {
  photoInfo:any,
  url:string
}) => {

  const { id, photographer, alt} = photoInfo;
  
  return (
    <View style={styles.container} key={id as React.Key}>
      <ImageBackground style={styles.image} source={{uri:url}} />
      <Text style={styles.alt}>{alt}</Text>
      <Text style={styles.photographer}>{photographer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
  image: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textContainer:{
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%',
  },
  alt:{
    fontSize:17,
    fontWeight:'700',
    textAlign:'center',
    marginTop:10,
    marginHorizontal:7,
    paddingVertical:10,
    paddingLeft:14,
    paddingRight:2,
    textShadowRadius: 20,
    color:'white',
    borderRadius:20,
    textShadowColor: 'rgba(2,2,2,0.4)',
    backgroundColor: 'rgba(207,208,207,0.5)',
  },
  photographer:{
    fontSize:14,
    fontWeight:'300',
    fontFamily:'Roboto',
    color:'white',
    textAlign:'right',
    textAlignVertical:'bottom',
    paddingTop: height / 1.18,
    paddingRight: 14,
    textShadowRadius: 20,
    textShadowColor: 'rgba(2,2,2,0.7)',
  },
});

export default PhotoItem;
