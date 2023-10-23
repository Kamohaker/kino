import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import {StyleSheet, Text,Image,SafeAreaView} from 'react-native'
import { NativeBaseProvider,VStack,Stack,Center,ScrollView,IconButton} from 'native-base'
import film1 from './images/filmy/legion.jpeg'
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
    marginLeft:15,
    marginRight:15,
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

const Film_Suicide = ({ route, navigation }) => {
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
      <Text style={styles.title}> Legion samobójców.{'\n'} The Suicide Squad </Text>
      <Text style={styles.textst} >Gatunek: science fiction </Text>
     <Text style={styles.textst}> Czas trwania: 132 min.</Text>
     <Text style={styles.textst}> Premiera: 6 sie 2021</Text>
     <Text style={styles.textst}>Reżyseria: James Gunn</Text>

      <Text style={styles.title}>Wybierz seans:</Text>
      <VStack space="2.5" mt="3">
      <Stack direction="row" mb="8" mt="1.5" space={3}>
   
      <Button
       title="8:00"
       color= '#dc2626'
       backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:' The Suicide Squad'})
        }}>
        </Button>
        
      <Button
        title="10:25"
        color= '#dc2626'
           backgroundColor="#171717"
       onPress={() => {
          navigation.navigate('Bilet',{nazwa:' The Suicide Squad'})
        }}
      />
      <Button
        title="15:00"
        color= '#dc2626'
           backgroundColor="#171717"
        onPress={() => {
          navigation.navigate('Bilet',{nazwa:' The Suicide Squad'})
        }}
      />
    
      </Stack>
      </VStack>
      <Text style={styles.textopis}>Witajcie w piekle, zwanym też Belle Reve. 
      Jest to więzienie z największym odsetkiem zgonów w Stanach 
      Zjednoczonych Ameryki. Trzymani są tu najgorsi superzłoczyńcy, 
      którzy posuną się do wszystkiego, żeby odzyskać wolność. Nawet do 
      wstąpienia do supertajnej i superszemranej Jednostki Uderzeniowej X.</Text>
      </Center>
      </ScrollView>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Film_Suicide.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Film_Suicide.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Film_Suicide
