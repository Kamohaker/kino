import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { colors } from 'theme'
import {
  StyleSheet, Text,Image,SafeAreaView
} from 'react-native'
import { NativeBaseProvider,VStack,Stack,Center,ScrollView,IconButton} from 'native-base'
import film1 from './images/filmy/eternals.jpg'
import { AntDesign } from "@expo/vector-icons"
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
    color:"white"
  },
  textst: {
    fontSize: 14,
    color:"white"
  },
  textopis: {
    fontSize: 14,
    color:"white",
    marginLeft: 15,
    marginRight:15
  },
})

const Film_Eternals = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <NativeBaseProvider>
    <SafeAreaView backgroundColor= "#262626">
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
    <ScrollView backgroundColor= "#262626">

      <Image source={film1}  style={{ width: 410, height: 259 }} />
      <Center>
      <Text style={styles.title}>Eternals</Text>
      <Text style={styles.textst} >Gatunek: science fiction </Text>
     <Text style={styles.textst}> Czas trwania: 156 min.</Text>
     <Text style={styles.textst}> Premiera: 5 lis 2021</Text>
     <Text style={styles.textst}>Reżyseria: Chloe Zhao</Text>

      <Text style={styles.title}>Wybierz seans:</Text>
      <VStack space="2.5" mt="3">
      <Stack direction="row" mb="8" mt="1.5" space={3}>
   
      <Button
       title="8:00"
       color= '#dc2626'
       backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet')
        }}>
        </Button>
        
      <Button
        title="10:25"
        color= '#dc2626'
           backgroundColor="#171717"
       onPress={() => {
          navigation.navigate('Bilet')
        }}
      />
      <Button
        title="15:00"
        color= '#dc2626'
           backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet')
        }}
      />
    
      </Stack>
      </VStack>
      <Text style={styles.textopis}>Kolejni bohaterowie w epickim Kinowym 
      Uniwersum Marvela. Tym razem poznamy nieśmiertelną rasę, która 
      ukształtowała życie na Ziemi. W "Eternals" zobaczymy Angelinę Jolie, 
      Richarda Maddena i Salmę Hayek.Film Marvel Studios “Eternals” wprowadza 
      do Kinowego Uniwersum Marvela nową, fascynującą drużynę superbohaterów. 
      Grupa nieśmiertelnych wojowników, działających w cieniu od tysięcy lat, 
      musi się ujawnić, by stawić czoło odwiecznym wrogom ludzkości, Dewiantom.</Text>
      </Center>
      </ScrollView>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Film_Eternals.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Film_Eternals.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Film_Eternals
