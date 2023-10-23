import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import {StyleSheet, Text,Image,SafeAreaView} from 'react-native'
import { NativeBaseProvider,VStack,Stack,Center,ScrollView,IconButton} from 'native-base'
import film1 from './images/filmy/venom.jpeg'
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

const Film_Venom = ({ route, navigation }) => {
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
      <Text style={styles.title}>Venom 2: Carnage</Text>
      <Text style={styles.textst} >Gatunek: science fiction </Text>
     <Text style={styles.textst}> Czas trwania: 97 min.</Text>
     <Text style={styles.textst}> Premiera: 15 paź 2021</Text>
     <Text style={styles.textst}>Reżyseria: Andy Serkis</Text>

      <Text style={styles.title}>Wybierz seans:</Text>
      <VStack space="2.5" mt="3">
      <Stack direction="row" mb="8" mt="1.5" space={3}>
   
      <Button
       title="10:00"
       color= '#dc2626'
       backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Venom 2: Carnage'})
        }}>
        </Button>
        
      <Button
        title="12:25"
        color= '#dc2626'
           backgroundColor="#171717"
       onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Venom 2: Carnage'})
        }}
      />
      <Button
        title="20:00"
        color= '#dc2626'
           backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Venom 2: Carnage'})
        }}
      />
    
      </Stack>
      </VStack>
      <Text style={styles.textopis}>Venom to jedna z najważniejszych, 
      najbardziej złożonych postaci Marvela. Opowiada o dziennikarzu 
      Eddie'm Brocku (Tom Hardy), którego ciało w wyniku eksperymentu 
      scaliło się z obcą formą życia - Venomem. W drugiej części poznamy 
      Carnage’a (Woody Harrelson). Jest to jeden z najbardziej znanych czarnych 
      charakterów Marvela. Reżyserem produkcji jest Andy Serkis.</Text>
      </Center>
      </ScrollView>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Film_Venom.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Film_Venom.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Film_Venom
