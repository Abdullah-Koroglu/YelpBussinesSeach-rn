import React , {useState , useEffect}from 'react'
import {View, Text,StyleSheet,TouchableOpacity, Button, FlatList,Image} from 'react-native'
 
DetailScreen = (props) => {
    const [results,setResults] = useState([]);
    const id = props.navigation.getParam('id')
    useEffect(()=>{
        searchApi(id)
        console.log(results)
    },[]    
    )

    async function searchApi (id) {
         const response =  await fetch( 'https://api.yelp.com/v3/businesses/' + id , {
                         headers: {
                         'Authorization': 'Bearer CT7EgMMho5lGgrzoiiPy1aBq9ZULLTUlJJ2IntpjDX7YVRpDSUof0q9pf-YxUJlzgILItIV_J-CS4oGfrJr2y3egZdPt1PwMfyLVVLuyndaJti9uGZhdBS9kPWx_XnYx' 
                    },
                })
          const data = await response.json();
            //TODO err catch
                setResults(data);   
                     
        }
    return(
        <View>
            <Text>{results.name}</Text>
            <FlatList
            data={results.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return<Image style={styles.imageStyle} source={ {uri : item} }/>
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle:{
        height:230,
        width:320,
        margin:20}
})
export default DetailScreen