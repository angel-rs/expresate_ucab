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

  verificarDatos() {
    const usuario = 'prop';

    if (usuario == 'admin') {
      this.props.navigation.navigate('AdminSid');
    } else {
      this.props.navigation.navigate('PropSid');
    }
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/fondo.png')} style={styles.container}>

        {/* Container Entrada de Datos*/}
        <View style={styles.containerInput}>
          <Text style={{ color: '#545454', fontSize: 35, fontWeight: 'bold' }}>
            Iniciar sesión
          </Text>

          {/* Usuario */}
          <Text style={{ color: '#545454', fontSize: 10, marginTop: '7%' }}>
            USUARIO
          </Text>

          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <FontAwesome name="user" size={25} color='#545454' />
            {/* Ingresar usuario*/}
            <TextInput
              style={{
                width: '83%',
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

            {/* Mostrar contraseña*/}
            <TouchableOpacity
              style={{ marginTop: '6.8%', marginLeft: '60%' }}
              onPress={this.showPass.bind(this)}>
              <FontAwesome
                name={this.state.press == false ? 'eye' : 'eye-slash'}
                size={25}
                color='#545454'
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <FontAwesome name="lock" size={25} color='#545454' />
            {/* Ingresar Contraseña*/}
            <TextInput
              style={{
                width: '83%',
                borderBottomColor: '#545454',
                borderBottomWidth: 1,
                marginLeft: '3%',
                fontSize: 18,
                color: '#545454',
              }}
              secureTextEntry={this.state.showPass}
            />
          </View>
        </View>

        {/* Boton de ingreso*/}
        <View style={{ marginTop: '6%', marginLeft: 260}}>
          <TouchableOpacity>
            <View style= {{width: 85, height: 48, backgroundColor: '#545454', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
              <Text style = {{fontSize: 15, color: 'white'}}>Ingresar</Text>
            </View>
          </TouchableOpacity>
        </View>

         {/* Container Logo*/}
         <View style={styles.containerLogo}>
          <Image
            source={require('../../assets/images/expresateUcabLogo.png')}
            style={{ width: 160, height: 160 }}
          />
        </View>

        <TouchableOpacity style = {{ alignItems: 'center', justifyContent: 'center'}}>  
          <Text style={{ color: '#545454', fontSize: 18, fontWeight: 'bold' }}>
          - Registro -
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
    marginTop: '17.5%',
    marginLeft: '52.5%',
  },
  containerInput: {
    marginTop: '18.5%',
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
