import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import {StyleSheet, Text,Image,SafeAreaView} from 'react-native'
import { NativeBaseProvider,VStack,Stack,Center,ScrollView,IconButton} from 'native-base'
import film1 from './images/filmy/diuna.jpeg'
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

const Film1 = ({ route, navigation }) => {
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
      <Text style={styles.title}>Diuna</Text>
      <Text style={styles.textst} >Gatunek: science fiction </Text>
     <Text style={styles.textst}> Czas trwania: 183 min.</Text>
     <Text style={styles.textst}> Premiera: 22 paź 2021</Text>
     <Text style={styles.textst}>Reżyseria: Denis Villeneuve</Text>

      <Text style={styles.title}>Wybierz seans:</Text>
      <VStack space="2.5" mt="3">
      <Stack direction="row" mb="8" mt="1.5" space={3}>
   
      <Button
       title="13:00"
       color= '#dc2626'
       backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Diuna'})
        }}>
        </Button>
        
      <Button
        title="14:25"
        color= '#dc2626'
           backgroundColor="#171717"
       onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Diuna'})
        }}
      />
      <Button
        title="18:10"
        color= '#dc2626'
           backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Diuna'})
        }}
      />
    
      </Stack>
      </VStack>
      <Text style={styles.textopis}>Diuna opowiada historię niezwykłej, pełnej 
      przygód i emocji podróży Paula Atreidesa. Temu genialnemu i utalentowanemu młodemu 
        człowiekowi pisane jest wspaniałe przeznaczenie, którego on sam nie
         jest w stanie pojąć. Najpierw jednak Paul musi się udać na najbardziej 
         niebezpieczną planetę we wszechświecie, żeby ratować rodzinę i rodaków.
          Na planecie wybucha zażarty konflikt o dostęp do niewystępującej nigdzie
          ndziej, najcenniejszej ze znanych substancji. Wyzwala ona w ludziach ich 
          największy potencjał. Ale wojnę przetrwają tylko ci, którzy pokonają swój 
          strach.</Text>
      </Center>
      </ScrollView>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Film1.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Film1.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Film1
