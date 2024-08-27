import * as S from './styles';
import React from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import InputComponent from '@components/Input';
import HiperlinkTextComponent from '@components/HiperlinkTextComponent';
import { RegisterRequest } from '@services/RegisterService';
import { Alert } from 'react-native';

interface ArtistNameSelectionScreenProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const ArtistNameSelectionScreen: React.FC<ArtistNameSelectionScreenProps> = ({ navigation, formData, setFormData }) => {
  const handleNextPress = () => {
    if (!formData.nomeArt) {
      Alert.alert('Aviso', 'Por favor, insira um nome artístico antes de continuar.');
      return;
    }

    navigation.navigate('LogoCreation');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <ProgressBar 
        currentPage={4} 
        totalPages={8} 
        onBackPress={handleBackPress} 
      />
      <S.TitleTxt>Escolha um nome artístico</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor nos conte um pouco mais sobre você. Compartilhe conosco seu nome artístico.
      </S.SubtitleTxt>

      <InputComponent 
        label={'Nome artístico'} 
        placeholder={'Ex.: Matuê'} 
        value={formData.nomeArt} 
        onChangeText={(text) => setFormData({ ...formData, nomeArt: text })} 
      />

      <HiperlinkTextComponent text={'Verifique a disponibilidade no INPI'} url={'www.clonacartao.com.br'} />
      
      <S.SubtitleTxt>
        INPI nada mais é do que ... (iquam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!)
      </S.SubtitleTxt>
      
      <HiperlinkTextComponent text={'Se necessário contate nossa equipe jurídica'} url={'www.clonacartao.com.br'} />
      
      <Button Title={'Próximo'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default ArtistNameSelectionScreen;
