import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import FilmItem from './filmItem'
import {getFilmsFromApiWithSearchedText } from '../api/TMDBApi'

class Search extends React.Component {
// Components/Search.js

  constructor(props) {
    super(props)
    this.state = {
      films: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
    this.searchedText=""
  }
  _searchTextInputChanged(text){
    this.searchedText=text
  }

  _loadFilms(){
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true }) // Lancement du chargement
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
      this.setState({films: data.results})
    })
  }
}

    render() {
      console.log("RENDER")
        return (
          <View style={styles.main_container}>
            <TextInput 
              style={styles.textinput} placeholder='Titre du film'
              onChangeText={(text) => this._searchTextInputChanged(text)}
              onSubmitEditing={() => this._loadFilms()}
            
            />
            <Button title='Rechercher' onPress={() => this._loadFilms()}/>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
              data={this.state.films}
              keyExtractor={(item)=> item.id.toString()}
              renderItem={({item}) => <FilmItem film={item}/>}
            />
          </View>
        )
    }
}

// Components/Search.js

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 25
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search