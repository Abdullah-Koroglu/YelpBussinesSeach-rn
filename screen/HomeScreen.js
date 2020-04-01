import React , { useState ,useEffect}from 'react'
import {View ,Text,StyleSheet,TouchableOpacity} from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsSect from '../components/ResultsSect'

HomeScreen = (props) => {
    const [term,setTerm] = useState ('');
    const [results,setResults] = useState([]);

    filterResultsByPrice = (price) =>{
        return results.filter(results =>{
            return results.price===price
        })
    }

    let url = new URL('https://api.yelp.com/v3/businesses/search?')
    var params = {limit:45,term,location:'NYC' } 
    params = new URLSearchParams(params).toString();

    // useEffect(() => {
    //     setTerm('pasta');
    //     searchApi();
    //   },[]);

    async function searchApi () {
if(term!='')
{ const response =  await fetch( 'https://api.yelp.com/v3/businesses/search?' + params , {
		
                 headers: {
                 'Authorization': 'Bearer CT7EgMMho5lGgrzoiiPy1aBq9ZULLTUlJJ2IntpjDX7YVRpDSUof0q9pf-YxUJlzgILItIV_J-CS4oGfrJr2y3egZdPt1PwMfyLVVLuyndaJti9uGZhdBS9kPWx_XnYx' 
            },parameters:{params}
        })
  const data = await response.json();
    //TODO err catch
        setResults(data.businesses);
        //console.log(results)
}
else{
    setResults([])
}
}
    return(
        <View>
            <SearchBar term={term} onTermChange={setTerm}
            onTermSubmit={searchApi}/>
            <Text >{results.length} Results Been Found</Text>
            <ResultsSect results={filterResultsByPrice('$')} title={'Ucuz'}  />
            <ResultsSect results={filterResultsByPrice('$$')} title={"Orta"} />
            <ResultsSect results={filterResultsByPrice('$$$')} title={'Pahalı'} />
            <TouchableOpacity  
                onLongPress={() => console.log('naber')}
            >
                <Text style={styles.tush}>GULU GULU</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({   
    resultsCont:{
       
    },
    textStyle:{
        fontSize:80
},
    tush:{
        fontSize:28,
        color:'#cce2e3',
        alignSelf:'center',
        padding:40
}
})
export default HomeScreen
