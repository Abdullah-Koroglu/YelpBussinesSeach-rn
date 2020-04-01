import React from 'react'
import {Image,Text, ScrollView, StyleSheet, View } from 'react-native'

ImageDetail = props => {
    
    return(<View
      style={{paddingTop: 50,paddingLeft:50}}>
        <Image
        style={styles.imageSytle}
        source={props.imageSource}
        />
        <Text>{props.name}</Text>
        </View>);

}

const styles = StyleSheet.create({
  imageSytle:{
    height:100 ,
    width:250
  }
})

export default ImageDetail;