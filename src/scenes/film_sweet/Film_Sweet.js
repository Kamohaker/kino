import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import {StyleSheet, Text,Image,SafeAreaView} from 'react-native'
import { NativeBaseProvider,VStack,Stack,Center,ScrollView,IconButton} from 'native-base'
import film1 from './images/filmy/sweet.jpg'
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

const Film_Sweet = ({ route, navigation }) => {
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
      <Text style={styles.title}>Sweet Girl</Text>
      <Text style={styles.textst} >Gatunek: Akcja </Text>
     <Text style={styles.textst}> Czas trwania: 110 min.</Text>
     <Text style={styles.textst}> Premiera: 20 sie 2021</Text>
     <Text style={styles.textst}>Reżyseria: Brian Mendoza</Text>

      <Text style={styles.title}>Wybierz seans:</Text>
      <VStack space="2.5" mt="3">
      <Stack direction="row" mb="8" mt="1.5" space={3}>
   
      <Button
       title="8:00"
       color= '#dc2626'
       backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Sweet Girl'})
        }}>
        </Button>
        
      <Button
        title="10:25"
        color= '#dc2626'
           backgroundColor="#171717"
       onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Sweet Girl'})
        }}
      />
      <Button
        title="15:00"
        color= '#dc2626'
           backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:'Sweet Girl'})
        }}
      />
    
      </Stack>
      </VStack>
      <Text style={styles.textopis}>Oddany mąż i ojciec, Ray Cooper, 
      przysięga wymierzyć sprawiedliwość firmie farmaceutycznej, 
      odpowiedzialnej za wycofanie z rynku potencjalnie ratującego życie leku 
      tuż przed tym jak jego żona (Adria Arjona) umiera na raka. Kiedy poszukiwanie 
      prawdy prowadzi do śmiertelnego starcia, które naraża Raya i jego córkę Rachel
       (Isabela Merced) na niebezpieczeństwo, misja mężczyzny zamienia się w 
       poszukiwanie zemsty, aby chronić jedyną bliską osobę, która mu pozostała.</Text>
      </Center>
      </ScrollView>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Film_Sweet.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Film_Sweet.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Film_Sweet
