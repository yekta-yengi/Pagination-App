/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
//import {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';

import PhotoItem from './PhotoItem';

import { connect, useDispatch } from 'react-redux';
import { topPhotosRequest } from '../store/action';
import { Photo } from 'pexels';

//import api_data from '../data/api_data.json'; dummy data

const { height } = Dimensions.get('window');

export const PhotoItemList = ({photoModel}:{photoModel: any}) => {

  const dispatch = useDispatch();

  //const [photos, setPhotos] = useState([] as Photo[]);

  const [pageNum, setpageNum] = useState(1);

  const getMorePhotos = () => {
    setpageNum(pageNum + 1);
  };

  const requestAPI = () => {
    dispatch(topPhotosRequest({
      page : pageNum,
    }
    ));
  };

  useEffect(() => {
    requestAPI();
  }, [pageNum]);

  return (
    <View style={styles.container}>
      <FlatList
        data={photoModel as [] as Photo[]}
        renderItem={({item}) => <PhotoItem photoInfo={item} url={item.src.portrait}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={height}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        onEndReached={getMorePhotos}
      />
    </View>
  );
};

const mapStateToProps = (state: { photo: any; }) => {
  return {
      photoModel: state.photo,
  };
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps)(PhotoItemList);
