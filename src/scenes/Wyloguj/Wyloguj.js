import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { Avatar,NativeBaseProvider} from 'native-base'
import avatar from './avatar.jpg'

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
    marginTop: 15,
    color: "white"
  },
  textst: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
    marginTop: 5
  },
})

const Wyloguj = ({ route, navigation }) => {
  const from = route?.params?.from
 
  const onSubmit = () => {
    navigation.navigate("Profile",{isLoggedIn:false})
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Twój Profil</Text>
       
        <Avatar
        bg="lightBlue.400"
        size="2xl"
        marginTop={5}
        marginBottom={5}
        source={avatar}
      >
        <Avatar.Badge bg="green.500" size="xl" />
      </Avatar>
      <Text style={styles.title}>Witaj: {route.params.daneEmail}</Text>
           
            <Button
              title="Wyloguj się"
              color='#dc2626'
              backgroundColor="#171717"
              onPress={onSubmit}
              
            />
             
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

Wyloguj.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Wyloguj.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Wyloguj
