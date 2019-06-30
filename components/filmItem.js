import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import { getImageFromApi } from '../api/TMDBApi'

class FilmItem extends React.Component{
    render() {   
        
        const film = this.props.film
        return (
            <View style={styles.main_container}>

                <Image 
                    style={styles.image_film}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                    <View style={styles.main_details}>
                    <View style={styles.header}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                        
                        <Text style={styles.sortie_text}>Sortie le {film.release_date}</Text>
                    </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height:190,
        flexDirection:'row'
    },
    main_details:{
        flex:1,
        margin: 5
    },
    header:{
        flex:3,
        flexDirection:'row',     
    },
    image_film:{
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    title_text: {
        flex:1,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    description_text: {
        flex:7,
        fontStyle: 'italic',
        color: '#666666'    
    },
    vote_text: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },
    sortie_text: {
        textAlign: 'right',
        fontSize: 14 
    }
})

export default FilmItem