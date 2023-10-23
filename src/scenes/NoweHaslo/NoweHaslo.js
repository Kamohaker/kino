import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import {StyleSheet, Text,SafeAreaView} from 'react-native'
import {Pressable,View, IconButton, HStack, Icon,NativeBaseProvider,Stack,FormControl,Input,WarningOutlineIcon} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import axios from 'axios'
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
    fontSize: 24,
    marginBottom: 20,
    marginTop: 15,
    color:"white"
  },
  textst: {
    fontSize: 14,
    color:"white",
    marginBottom: 5,
    marginTop:5
  },
})

const Rejestracja = ({ route, navigation }) => {
  
  const from = route?.params?.from
  
  const [daneEmail,setEmail]=useState(''); 
  const [daneHaslo,setHaslo]=useState(''); 
  const [show, setShow] = useState(false)

  const [shows, setShows] = useState(false)
  const handleClick = () => setShows(!shows)

  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  
  const validate = () => {
    if ( daneEmail==='' || daneHaslo==='' || formData==='') {
     
      setErrors({
        ...errors,
        name: 'Wszystkie pola są wymagane',
      });
      return false;
    } else if (daneHaslo.length<3) {
      setErrors({
        ...errors,
        name: 'Dane są za krótkie',
      });
      return false;
    }else if (daneHaslo != formData)
    {
      setErrors({
        ...errors,
        name: 'Hasła nie są zgodne',
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
   
    validate() ? setShow(true) : console.log('Błąd');
   
    axios.put("http://192.168.224.68/cinemazone/index.php",{

      email: daneEmail,
      haslo: daneHaslo,
      powtorzHaslo:formData
      }).then(function(response){
        if(response.data.result==="Brak uzytkownika"){
          setErrors({
                 ...errors,
                 name: 'Brak użytkownika o podanej nazwie',
              });
          console.log(response.data.result)
          return false;
        }
      console.log(response.data.result);
      navigation.navigate("Home")
      }).catch(function(error){
      console.log("Coś poszło nie tak");
      });

  };

  return (
    <NativeBaseProvider>
      <View  backgroundColor= "#262626">
        <IconButton
        backgroundColor="#171717"
        _icon={{
        color: '#dc2626',
        as: AntDesign,
        name: "back"
        }}
        onPress={() => {
        navigation.goBack()
        }}>
        </IconButton>
      </View>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Nowe Hasło</Text>
        <FontIcon name="file-signature" size={110} color="#dc2626"/>
     
         <FormControl isRequired isInvalid={'name' in errors}>
       
          <Stack mx="4">
          <Text style={styles.textst}>Login</Text>
          <Input variant="rounded" style ={styles.textst} InputLeftElement={
            <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="white"
            />
            }
          placeholder="Login"
          onChangeText={(value) => setEmail( value )}/>
            <HStack>
              <Text style={styles.textst}>Hasło</Text>
              <FormControl.Label></FormControl.Label>
            </HStack>
            <Input variant="rounded"  type={shows ? "text" : "password"} style= {styles.textst} InputLeftElement={
              <Pressable onPress={handleClick}>
              <Icon
              as={<MaterialIcons name="visibility-off" />}
              size={5}
              ml="2"
              color={shows?"rgb(0,255,0)":"rgb(255,0,0)"}/>
              </Pressable>
              }
               placeholder="Hasło" 
              onChangeText={(value) => setHaslo( value )}
            />
            <FormControl.HelperText>
            Hasło musi zawierać co najmniej 3 znaki.
            </FormControl.HelperText>
            <HStack>
              <Text style={styles.textst}>Powtórz Hasło</Text>
              <FormControl.Label></FormControl.Label>
            </HStack>
            <Input variant="rounded"  type={shows ? "text" : "password"} marginBottom="5" style= {styles.textst} InputLeftElement={
                <Pressable onPress={handleClick}>
              <Icon
              as={<MaterialIcons name="visibility-off" />}
              size={5}
              ml="2"
              color={shows?"rgb(0,255,0)":"rgb(255,0,0)"}/>
              </Pressable>
            } placeholder="Hasło" 
            onChangeText={(value) => setData( value )}/>
         
          <Button
           title="Zmień Hasło"
           color= '#dc2626'
           backgroundColor="#171717"
           onPress={onSubmit}
          />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />
          }>{errors.name}</FormControl.ErrorMessage>
        </Stack>
      </FormControl>
     
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

Rejestracja.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Rejestracja.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Rejestracja
