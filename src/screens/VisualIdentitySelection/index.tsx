import * as S from './styles';
import React from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import InputComponent from '@components/Input';
import { RegisterRequest } from '@services/RegisterService';
import { Alert } from 'react-native';
import RegisterService from '@services/RegisterService';

interface VisualIdentitySelectionProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const VisualIdentitySelection: React.FC<VisualIdentitySelectionProps> = ({ navigation, formData, setFormData }) => {

  const handleNextPress = async () => {
    if (!formData.corPrim || !formData.corSec || !formData.corTer) {
      Alert.alert('Aviso', 'Por favor, preencha todas as cores antes de finalizar.');
      return;
    }

    try {
      // Logando o corpo da requisição antes de enviá-lo
      console.log("Dados enviados para o cadastro:", formData);

      // Realiza a requisição de registro com os dados do formData
      const response = await RegisterService.register(formData);

      // Logando a resposta da API
      console.log("Resposta da API:", response);

      // Exibe uma mensagem de sucesso
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');

      // Navega para a tela final ou tela inicial
      navigation.navigate('FinalScreen');
    } catch (error: any) {
      // Logando o erro recebido
      console.error("Erro ao realizar o cadastro:", error.response?.data || error.message);

      // Em caso de erro, exibe uma mensagem de erro
      Alert.alert('Erro', 'Houve um problema ao realizar o cadastro. Tente novamente.');
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <ProgressBar 
        currentPage={8} 
        totalPages={8} 
        onBackPress={handleBackPress} 
      />
      <S.TitleTxt>Escolha sua identidade visual!</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor escolha as cores principais que vão compor sua identidade visual.
      </S.SubtitleTxt>

      <InputComponent 
        label={'Cor primária'} 
        placeholder={'Ex.: #FF0000'} 
        value={formData.corPrim} 
        onChangeText={(text) => setFormData({ ...formData, corPrim: text })} 
      />
      <InputComponent 
        label={'Cor secundária'} 
        placeholder={'Ex.: #5ea3cb'} 
        value={formData.corSec} 
        onChangeText={(text) => setFormData({ ...formData, corSec: text })} 
      />
      <InputComponent 
        label={'Cor terciária'} 
        placeholder={'Ex.: #53d97e'} 
        value={formData.corTer} 
        onChangeText={(text) => setFormData({ ...formData, corTer: text })} 
      />

      <Button Title={'Finalizar'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default VisualIdentitySelection;
