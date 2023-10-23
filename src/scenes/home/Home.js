import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,ScrollView,Image,Pressable,SafeAreaView
} from 'react-native'
import film1 from './images/filmy/diuna.jpeg'
import film2 from './images/filmy/venom.jpeg'
import film3 from './images/filmy/eternals.jpg'
import film4 from './images/filmy/legion.jpeg'
import film5 from './images/filmy/sweet.jpg'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#262626",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white"
  },
})

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Repertuar</Text>
    <ScrollView >
      <Pressable   
      onPress={() => {
            navigation.navigate('Film1')
          }} >
    <Image source={film1}  style={{ width: 410, height: 159 }} />
    </Pressable>
    <Pressable   
      onPress={() => {
            navigation.navigate('Film_Venom')
          }} >
    <Image source={film2}  style={{ width: 410, height: 159 }} />
    </Pressable>
    <Pressable   
      onPress={() => {
            navigation.navigate('Film_Eternals')
          }} >
    <Image source={film3}  style={{ width: 410, height: 159 }} />
    </Pressable>
    <Pressable   
      onPress={() => {
            navigation.navigate('Film_Suicide')
          }} >
    <Image source={film4}  style={{ width: 410, height: 159 }} />
    </Pressable>
    <Pressable   
      onPress={() => {
            navigation.navigate('Film_Sweet')
          }} >
    <Image source={film5}  style={{ width: 410, height: 159 }} />
    </Pressable>
    </ScrollView>
   
  </SafeAreaView>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
