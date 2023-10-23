import React, { useState} from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { Pressable,Link, HStack, Icon, NativeBaseProvider, Stack, FormControl, Input, WarningOutlineIcon} from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'


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

const Profile = ({ route, navigation }) => {
  const from = route?.params?.from

  const [daneEmail, setEmail] = useState('');
  const [daneHaslo, setHaslo] = useState('');

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [errors, setErrors] = useState({});

  const validate = () => {
    if (daneEmail === '' || daneHaslo === '') {
      setErrors({
        ...errors,
        name: 'Wszystkie pola są wymagane',
      });
      return false;
    } else if (daneEmail.length < 3 || daneHaslo.length<3) {
      setErrors({
        ...errors,
        name: 'Błędne dane',
      });
      return false;
    }
    return true;
  };


  const onHaslo = () =>{
   navigation.navigate('NoweHaslo') ;
  }

  const onSubmit = () => {
    validate() ? console.log("Zalogowany") : console.log('Błąd logowania');

    axios.get("http://192.168.224.68/cinemazone/index.php", {
      params: {
        email: daneEmail,
        haslo: daneHaslo
      }
    }).then(function (response) {
      if(response.data.result==="Bledne dane"){
        setErrors({
               ...errors,
               name: 'Błędne dane',
            });
        console.log(response.data.result)
        return false;
      }
      console.log("Halo")
      navigation.navigate("Wyloguj",{isLoggedIn:true,daneEmail})
    }).catch(function (error) {
      console.log("Coś poszło nie tak");
      console.log(daneEmail)
    })
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.root}>
    
        <Text style={styles.title}>Zaloguj się</Text>
        <FontIcon name="lock" size={110} color="#dc2626"/>
        <FormControl isRequired isInvalid={'name' in errors}>
          <Stack mx="4">
            <Text style={styles.textst}>Login</Text>
            <Input variant="rounded" style={styles.textst} InputLeftElement={

              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="white"
              />
            }
              placeholder="Login"
              onChangeText={(value) => setEmail( value)} />
            <HStack>
              <Text style={styles.textst}>Hasło</Text>
              <FormControl.Label></FormControl.Label>
            </HStack>
            <Input variant="rounded"  type={show ? "text" : "password"} style={styles.textst} InputLeftElement={
              <Pressable onPress={handleClick}>
                
              <Icon 
                as={<MaterialIcons name="visibility-off" />}
                size={5}
                ml="2"
                color={show?"rgb(0,255,0)":"rgb(255,0,0)"} />
                
                </Pressable>
            }
             
            placeholder="Hasło"
              onChangeText={(value) => setHaslo( value )} />
           

            <Link _text={{
              _light: {
                color: "#dc2626",
              },
            }} onPress={onHaslo} 
            mb="5">
              Nie pamiętam hasła!
            </Link>

            <Button
              title="Zaloguj się"
              color='#dc2626'
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

Profile.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Profile.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Profile
