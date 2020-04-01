import React from 'react'
import {Text, View, StyleSheet, ScrollView,TouchableOpacity,FlatList} from 'react-native'
import SearchDetail from '../components/SearchDetail'
import {withNavigation} from 'react-navigation'

const ResultsSect = (props) =>{


return (
<View><Text style={styles.textStyle}>{props.title}</Text>

<FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={results => results.id}
        renderItem={({item}) =>{ 
        return(<TouchableOpacity
 onPress={() => console.log(props.navigation.push('Detail',{id:item.id}))}
><View>
                <SearchDetail
                        style={styles.detailStyle}
                        results={ item }/>
        </View></TouchableOpacity>)
        }}
></FlatList>
</View>)
}

const styles = StyleSheet.create({
   textStyle:{
        fontSize:30,
        paddingLeft:10
},
detailStyle:{
        borderRadius:2
}
})

export default withNavigation(ResultsSect)
