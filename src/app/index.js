import { View, Image,Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
    <View style={styles.container}>
      <Image
        style={{width: '70%', height: 80, marginBottom:30}}
        resizeMode="contain"
        source={require('../../assets/facebook.png')}
        />
      <InputTexto dica="celular ou email"/>
     
      <InputTexto dica="senha" seguranca={true}/>

      <Botao btn="entrar" cor='#2C82F3' src='home' />
      <Text style={styles.text}>ou</Text>
      <Botao btn="criar Nova Conta" cor='#000' src='criarNovaConta' />

      <View style={ styles.cont}>
        <View style={styles.line} />
        
        <View style={styles.line} />
      </View>
    </View>
  );
}

