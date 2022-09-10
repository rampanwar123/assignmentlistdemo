import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {THEME_GREEN, WHITE} from '../../constants/Colors';
import Images from '../../constants/Images';
import Realm from 'realm';
import {useNavigation} from '@react-navigation/native';

let realm;

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setErrorPassword] = useState('');

  useEffect(() => {
    realm = new Realm({path: 'UserDatabase.realm'});
  }, []);

  const register_user = () => {
    if (!email || emailError || !password || passwordError) {
      setEmailError(!email ? 'Plaese enter valid email' : emailError);
      setErrorPassword(
        !password ? 'Please enter valid password' : passwordError,
      );
    } else {
      var user_details = realm.objects('user_details');
      console.log('user_details', user_details);
      if (
        user_details[0].user_name === email &&
        user_details[0].user_password === password
      ) {
        navigation.navigate('RestaurantList');
      } else {
        setEmailError('Plaese enter valid email');
        setErrorPassword('Please enter valid password');
      }
    }
  };

  const _onChangeEmail = text => {
    let value = '';
    setEmail(text);
    if (text === '') {
      value = 'Please enter email id';
    }
    setEmailError(value);
  };

  const _onChangePassword = text => {
    let value = '';
    setPassword(text);
    if (text === '') {
      value = 'Please enter password';
    }
    setErrorPassword(value);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.introView}>
        <Image source={require('../../assets/images/user.png')} />
        <Text style={Styles.welcomeText}>Welcome Back</Text>
        <Text style={{fontSize: 16}}> Sign to Continue</Text>
      </View>

      <View style={{padding: 15}}>
        <TextInput
          placeholder="EMAIL"
          style={Styles.input}
          value={email}
          onChangeText={_onChangeEmail}
        />
        <Text style={Styles.errorText}>{emailError}</Text>
        <TextInput
          placeholder="PASSWORD"
          style={Styles.input}
          value={password}
          onChangeText={_onChangePassword}
        />
        <Text style={Styles.errorText}>{passwordError}</Text>
      </View>
      <TouchableOpacity>
        <Text style={Styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button} onPress={register_user}>
        <Text style={Styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text> Don't heve account?</Text>
        <TouchableOpacity>
          <Text style={{color: THEME_GREEN, marginLeft: 10}}>
            creat new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: THEME_GREEN,
    height: 50,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: '#f0f0f0',
    elevation: 3,
    backgroundColor: WHITE,
  },
  forgotPassword: {alignSelf: 'flex-end', marginRight: 15, color: THEME_GREEN},
  introView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default Login;
