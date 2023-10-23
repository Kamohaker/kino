import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View} from 'react-native'
import Button from 'components/Button'
import {IconButton,NativeBaseProvider} from 'native-base'
import { AntDesign } from "@expo/vector-icons"
import FontIcon from 'react-native-vector-icons/FontAwesome5'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#262626",
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    marginTop: 15,
    color:"white"
  },
  textbox: {
    color: "white",
    fontSize: 20,
    marginBottom:5
  },
  textgets: {
    color: '#dc2626',
    fontSize: 20,
    marginBottom:5
  },
  boxes: {
    backgroundColor: "#0891b2",
    width:55,
    height:50,
  },

})
const Podsumowanie = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <NativeBaseProvider>
    <View backgroundColor= "#262626">
    <IconButton
       backgroundColor="#171717"
       _icon={{
        color: '#dc2626',
        as: AntDesign,
        name: "back",
      }}
      onPress={() => {
        navigation.goBack()
  }}></IconButton>
    </View>
   <View style={styles.root}>
   <Text style={styles.title}>Podsumowanie</Text>
   <FontIcon name="mask" size={110} color="#dc2626"/>
   <Text style={styles.textbox}>Bilet na film:</Text>
   <Text style={styles.textgets}> {route.params.nazwa}</Text>
   <Text style={styles.textbox}>Sztuki: </Text>
   <Text style={styles.textgets}>{route.params.ilosc}</Text>
   <Text style={styles.textbox}>Miejsca:</Text>
   <Text style={styles.textgets}>{route.params.miejsce + ''}</Text>
   <Text style={styles.textbox}>Do zapłaty: </Text>
   <Text style={styles.textgets}>{route.params.cena + ' zł'}</Text>
    <Button 
    title="Kup"
    color= '#dc2626'
           backgroundColor="#171717" onPress={() => {
        navigation.navigate('Repertuar')
  }}></Button>
      </View>
    </NativeBaseProvider>
  )
}

Podsumowanie.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Podsumowanie.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Podsumowanie
