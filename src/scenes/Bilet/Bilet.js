import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,Image,
} from 'react-native'
import Button from 'components/Button'
import {Checkbox,IconButton,Icon, Pressable,NativeBaseProvider,Center, HStack,VStack,Divider,Heading,Stack} from 'native-base'
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
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
  textbox: {
    color: "white",
   fontSize: 14
  },
  boxes: {
    backgroundColor: "#0891b2",
    width:55,
    height:50,
  },

})
const Bilet = ({ route, navigation }) => {
  const from = route?.params?.from

  const [groupValue, setGroupValue] = React.useState([
   
  ])

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
  
   <Heading color="white" marginBottom="10">Wybierz miejsce</Heading> 
     <Heading color="white" marginBottom="10">Ekran</Heading> 

     <Checkbox.Group
        
        defaultValue={groupValue}
        accessibilityLabel="pick an item"
        onChange={(values) => {
          setGroupValue(values || [])
        }}
      >

     <HStack space={6} marginBottom ="5">
      <Checkbox colorScheme="danger"value="1" accessibilityLabel="1" icon={ <Icon
            as={<MaterialIcons name="person" />}/>} />
      <Checkbox colorScheme="danger"value="2" accessibilityLabel="2"/>
      <Checkbox colorScheme="danger"value="3" accessibilityLabel="3"/>
      <Checkbox colorScheme="danger"value="4" accessibilityLabel="4"/>
      <Checkbox colorScheme="danger"value="5" accessibilityLabel="5"/>
      <Checkbox colorScheme="danger"value="6" accessibilityLabel="6"/>
      <Checkbox colorScheme="danger"value="7" accessibilityLabel="7"/>
      <Checkbox colorScheme="danger"value="8" accessibilityLabel="8"/>
    </HStack>
    <HStack space={6} marginBottom="5">
      <Checkbox colorScheme="danger"value="9" accessibilityLabel="1" />
      <Checkbox colorScheme="danger"value="10" accessibilityLabel="2"/>
      <Checkbox colorScheme="danger"value="11" accessibilityLabel="3"/>
      <Checkbox colorScheme="danger"value="12" accessibilityLabel="4"/>
      <Checkbox colorScheme="danger"value="13" accessibilityLabel="5"/>
      <Checkbox colorScheme="danger"value="14" accessibilityLabel="6"/>
      <Checkbox colorScheme="danger"value="15" accessibilityLabel="7"/>
      <Checkbox colorScheme="danger"value="16" accessibilityLabel="8"/>
    </HStack>
    <HStack space={6} marginBottom="5">
      <Checkbox colorScheme="danger"value="17" accessibilityLabel="1" />
      <Checkbox colorScheme="danger"value="18" accessibilityLabel="2"/>
      <Checkbox colorScheme="danger"value="19" accessibilityLabel="3"/>
      <Checkbox colorScheme="danger"value="20" accessibilityLabel="4"/>
      <Checkbox colorScheme="danger"value="21" accessibilityLabel="5"/>
      <Checkbox colorScheme="danger"value="22" accessibilityLabel="6"/>
      <Checkbox colorScheme="danger"value="23" accessibilityLabel="7"/>
      <Checkbox colorScheme="danger"value="24" accessibilityLabel="8"/>
    </HStack>
    <HStack space={6} marginBottom="5">
      <Checkbox colorScheme="danger"value="25" accessibilityLabel="1" />
      <Checkbox colorScheme="danger"value="26" accessibilityLabel="2"/>
      <Checkbox colorScheme="danger"value="27" accessibilityLabel="3"/>
      <Checkbox colorScheme="danger"value="28" accessibilityLabel="4"/>
      <Checkbox colorScheme="danger" value="29" accessibilityLabel="5"/>
      <Checkbox colorScheme="danger"value="30" accessibilityLabel="6"/>
      <Checkbox colorScheme="danger"value="31" accessibilityLabel="7"/>
      <Checkbox colorScheme="danger"value="32" accessibilityLabel="8"/>
    </HStack>
    <HStack space={6} marginBottom="5">
      <Checkbox colorScheme="danger" value="33" accessibilityLabel="1" />
      <Checkbox colorScheme="danger"value="34" accessibilityLabel="2"/>
      <Checkbox colorScheme="danger"value="35" accessibilityLabel="3"/>
      <Checkbox colorScheme="danger"value="36" accessibilityLabel="4"/>
      <Checkbox colorScheme="danger"value="37" accessibilityLabel="5"/>
      <Checkbox colorScheme="danger"value="38" accessibilityLabel="6"/>
      <Checkbox colorScheme="danger"value="39" accessibilityLabel="7"/>
      <Checkbox colorScheme="danger"value="40" accessibilityLabel="8"/>
    </HStack>
    </Checkbox.Group>
  <Heading  style= {styles.title}>Liczba wybranych miejsc: ({groupValue.length})</Heading>
    <Button 
    title="Dalej"
    color= '#dc2626'
           backgroundColor="#171717" onPress={() => {
        navigation.navigate('Podsumowanie')
  }}></Button>
      </View>
    </NativeBaseProvider>
  )
}

Bilet.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Bilet.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Bilet
