import React,{useEffect,useState} from 'react'
import tytuły from "../Data/tytuły.json"
import PropTypes from 'prop-types'
import {StyleSheet, Text,SafeAreaView} from 'react-native'
import {Pressable,Box,FlatList,View, IconButton, Icon,NativeBaseProvider,Stack,VStack,Input} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
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
    marginTop: 100,
    marginBottom: 20,
    color:"white"
  },
  textst: {
    fontSize: 14,
    marginBottom: 5,
    color: '#dc2626'
  },
})

const Wyszukaj = ({ route, navigation }) => {
  const from = route?.params?.from

  const [list, setList] = useState([]);
    const [filter, setFilter] = useState('');


    useEffect(() => {
      setList(tytuły.list);
  }, [])

  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
}

const checkTitles = (value) => {
    return clearString(value.titles).indexOf(clearString(filter)) >= 0
}


const filterList = (value) => {
    setFilter(value);
}


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
    <SafeAreaView style={styles.root}>
   
        <Stack mx="4">
        <Text style={styles.title}>Czekasz na tytuł?</Text>
        <View style ={styles.root}>
            <Input style={styles.textst} InputLeftElement={
            <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            ml="2"
            color="muted.400"
            />
        }
        onChangeText={filterList}
        placeholder="Szukaj filmu"/>
        <FlatList
        marginTop={10} 
        data={list.filter(checkTitles)}
        renderItem={({ item })=>(
          <Pressable  onPress={() => {
            if(item.id===0){
            navigation.navigate('Film1')}
            else if(item.id===1){
              navigation.navigate("Film_Venom")
            }
            else if(item.id===2){
              navigation.navigate('Film_Eternals')}
              else if(item.id===3){
                navigation.navigate("Film_Suicide")
              } else {
                navigation.navigate("Film_Sweet")
              }
          }} >
          <Box
            rounded="21"
          bg="#171717"
          pl="4"
          pr="5"
          py="2"
        >
           <VStack>
                <Text style={styles.textst}>
                  {item.titles}
                </Text>
              </VStack>
          </Box>
          </Pressable>
        )}
        keyExtractor={(item)=>item.id.toString()}
        ></FlatList>
        </View>
        </Stack>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Wyszukaj.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Wyszukaj.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Wyszukaj
