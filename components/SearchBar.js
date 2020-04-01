import React from 'react'
import {View,TextInput ,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
 
SearchBar  = ({term,onTermChange,onTermSubmit}) => {
    return(         
    <View style={styles.searchBar}>
        <TouchableOpacity style={{flexDirection:'row' ,  alignItems:'center'}}
        value={term}
        autoCorrect={false}
        >        
		    <Image
            style={styles.tinyLogo}
            source={require('../assets/search.png')}/> 
            <TextInput style={styles.searchBarText} placeholder={'Search'}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            ></TextInput>
        </TouchableOpacity>
    </View>
           )
} 
const styles = StyleSheet.create({
    tinyLogo:{
        margin:10
},
    searchBarText:{
        color:'#A9B9BA' , 
        flex:1,
        alignSelf:'center',
        height:68,
        fontSize:18
},
    searchBar:{
        backgroundColor:'#D4DCDC',
        height:68,
        alignItems:'center',
        margin:20,
        borderRadius:7,
        flexDirection:'row'
    },

})
export default SearchBar