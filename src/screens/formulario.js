import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Constants } from 'expo';
const {width: WIDTH} = Dimensions.get('window');

export default class LoginClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
  }

  /* Esta funcion nos permitira poder observar la contraseña*/
  showPass() {
    if (this.state.press == false) {
      this.setState({ press: true, showPass: false });
    } else {
      this.setState({ press: false, showPass: true });
    }
  }


  render() {
    return (
      <ImageBackground source={require('../../assets/images/fondo.png')} style={styles.container}>

        {/* Container Entrada de Datos*/}
        <View style={styles.containerInput}>
          <Text style={{ color: '#545454', fontSize: 35, fontWeight: 'bold' }}>
            Registro
          </Text>

          {/* Usuario */}
          <Text style={{ color: '#545454', fontSize: 10, marginTop: '7%' }}>
            CORREO
          </Text>

          <View style={{ flexDirection: 'row', marginTop: '2%' }}>
            <FontAwesome name="user" size={25} color='#545454' />
            {/* Ingresar usuario*/}
            <TextInput
              style={{
                width: '80%',
                borderBottomColor: '#545454',
                borderBottomWidth: 1,
                marginLeft: '3%',
                fontSize: 18,
                color: '#545454',
              }}
            />
          </View>


          {/* Contraseña*/}
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#545454', fontSize: 10, marginTop: '7%' }}>
              CONTRASEÑA
            </Text>
          </View>


          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <FontAwesome name="lock" size={25} color='#545454' />
            {/* Ingresar Contraseña*/}
            <TextInput
              style={{
                width: '80%',
                borderBottomColor: '#545454',
                borderBottomWidth: 1,
                marginLeft: '3%',
                fontSize: 18,
                color: '#545454',
              }}
              secureTextEntry={this.state.showPass}
            />
             {/* Mostrar contraseña*/}
             <TouchableOpacity
              onPress={this.showPass.bind(this)}>
              <FontAwesome
                name={this.state.press == false ? 'eye' : 'eye-slash'}
                size={25}
                color='#545454'
              />
            </TouchableOpacity>
          </View>

           {/* Confirmacion de contraseña*/}
           <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#545454', fontSize: 10, marginTop: '7%' }}>
              CONFIRMACION DE CONTRASEÑA
            </Text>
          </View>


          <View style={{ flexDirection: 'row', marginTop: '6%' }}>
            <FontAwesome name="pencil" size={25} color='#545454' />
            {/* Ingresar Contraseña*/}
            <TextInput
              style={{
                width: '80%',
                borderBottomColor: '#545454',
                borderBottomWidth: 1,
                marginLeft: '3%',
                fontSize: 18,
                color: '#545454',
              }}
              secureTextEntry={true}
            />
          </View>
        </View>

        {/* Boton de ingreso*/}
        <View style={{ marginTop: '6%', marginLeft: 260}}>
          <TouchableOpacity  onPress = { () => this.props.navigation.navigate('Login')}>
            <View style= {{width: 85, height: 48, backgroundColor: '#545454', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
              <Text style = {{fontSize: 15, color: 'white'}}>Registar</Text>
            </View>
          </TouchableOpacity>
        </View>

         {/* Container Logo*/}
         <View style={styles.containerLogo}>
          <Image
            source={require('../../assets/images/logoderecha.png')}
            style={{ width: 160, height: 160 }}
          />
        </View>

        <TouchableOpacity style = {{ alignItems: 'center', justifyContent: 'center'}} 
          onPress = { () => 
            this.props.navigation.navigate('Login')
          }
        >  
          <Text style={{ color: '#545454', fontSize: 18, fontWeight: 'bold' }}>
          - Iniciar sesión -
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  containerLogo: {
    marginTop: '10.5%',
    marginLeft: '5.5%',
  },
  containerInput: {
    marginTop: '10.5%',
    marginLeft: '8.8%',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize:16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0, 0.35)',
    color: 'rgba(255,255,255, 0.7)',
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10, 
  },
});
