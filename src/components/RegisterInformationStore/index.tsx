import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterService from '@services/RegisterService';
import { Alert } from 'react-native';
import AppRoutes from '@routes/AppStack/app.routes';

const Stack = createStackNavigator();

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    espcldd: '',
    idade: 0,
    estado: '',
    cidade: '',
    nomeArt: '',
    logo: '',
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
    spotify: '',
    genPref: '',
    corPrim: '',
    corSec: '',
    corTer: '',
  });

  const handleFinalSubmit = async () => {
    try {
      const response = await RegisterService.register(formData);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao realizar o cadastro.');
    }
  };

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
