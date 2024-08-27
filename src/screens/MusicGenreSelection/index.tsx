import * as S from './styles';
import React from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import InputComponent from '@components/Input';
import HiperlinkTextComponent from '@components/HiperlinkTextComponent';
import { RegisterRequest } from '@services/RegisterService';
import { Alert } from 'react-native';

interface MusicGenreSelectionProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const MusicGenreSelection: React.FC<MusicGenreSelectionProps> = ({ navigation, formData, setFormData }) => {

  const handleNextPress = () => {
    if (!formData.genPref) {
      Alert.alert('Aviso', 'Por favor, insira seu gênero musical preferido antes de continuar.');
      return;
    }

    navigation.navigate('VisualIdentitySelection');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <ProgressBar 
        currentPage={7} 
        totalPages={8} 
        onBackPress={handleBackPress} 
      />
      <S.TitleTxt>Qual é o seu gênero de música de preferência?</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor continue a falar conosco, nos dê mais detalhes sobre sua preferência de gênero musical.
      </S.SubtitleTxt>

      <InputComponent 
        label={'Gênero de preferência'} 
        placeholder={'Ex.: Trap'} 
        value={formData.genPref} 
        onChangeText={(text) => setFormData({ ...formData, genPref: text })} 
      />

      <HiperlinkTextComponent text={'Ver exemplos de gêneros populares'} url={'www.clonacartao.com.br'} />
      
      <Button Title={'Próximo'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default MusicGenreSelection;
