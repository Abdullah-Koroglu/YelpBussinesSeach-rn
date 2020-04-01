import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'


SearchDetail = ({results}) =>{
    return(
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={{
              uri:results.image_url
            }}
        />
        <Text style={styles.textStyle}>{results.name}</Text>
        <Text style={color='gray'}>{results.rating} Stars {results.review_count} Reviews</Text>
    </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        marginLeft:12
    },
    image:{
        width:240,
        height:180,
        borderRadius:4
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:18,
        padding:4
}
})

export default SearchDetail