import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import SignUp from '@screens/SignUp';
import RoleSelectionScreen from "@screens/RoleSelection";
import AgeSelectionScreen from "@screens/AgeSelection";
import ForgotPasswordScreen from "@screens/ForgotPassword";
import ForgotTokenScreen from "@screens/ForgotToken";
import AdressSelectionScreen from "@screens/AdressSelection";
import ArtistNameSelectionScreen from "@screens/ArtistNameSelection";
import LogoCreationScreen from "@screens/LogoCreationScreen";
import MediaVeriScreen from "@screens/MediaVeriScreen";
import MusicGenreSelection from "@screens/MusicGenreSelection";
import VisualIdentitySelection from "@screens/VisualIdentitySelection";
import { RegisterRequest } from '@services/RegisterService';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  // Estado centralizado para o formulário
  const [formData, setFormData] = useState<RegisterRequest>({
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

  return (
    <AppStack.Navigator>
      <AppStack.Screen 
        name="Home" 
        options={{ header: () => <></> }}
      >
        {props => <Home {...props}/>}
      </AppStack.Screen>
      <AppStack.Screen 
        name="SignUp" 
        options={{ header: () => <></> }}
      >
        {props => <SignUp {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="RoleSelection" 
        options={{ header: () => <></> }}
      >
        {props => <RoleSelectionScreen {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="AgeSelection" 
        options={{ header: () => <></> }}
      >
        {props => <AgeSelectionScreen {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="AdressSelection" 
        options={{ header: () => <></> }}
      >
        {props => <AdressSelectionScreen {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="ArtistNameSelection" 
        options={{ header: () => <></> }}
      >
        {props => <ArtistNameSelectionScreen {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="LogoCreation" 
        options={{ header: () => <></> }}
      >
        {props => <LogoCreationScreen {...props}/>}
      </AppStack.Screen>
      <AppStack.Screen 
        name="MediaVeriScreen" 
        options={{ header: () => <></> }}
      >
        {props => <MediaVeriScreen {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="MusicGenreSelection" 
        options={{ header: () => <></> }}
      >
        {props => <MusicGenreSelection {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="VisualIdentitySelection" 
        options={{ header: () => <></> }}
      >
        {props => <VisualIdentitySelection {...props} formData={formData} setFormData={setFormData} />}
      </AppStack.Screen>
      <AppStack.Screen 
        name="ForgotPassword" 
        options={{ header: () => <></> }}
      >
        {props => <ForgotPasswordScreen {...props}/>}
      </AppStack.Screen>
      <AppStack.Screen 
        name="ForgotToken" 
        options={{ header: () => <></> }}
      >
        {props => <ForgotTokenScreen {...props}/>}
      </AppStack.Screen>
    </AppStack.Navigator>
  );
};

export default AppRoutes;
