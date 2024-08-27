import * as S from './styles';
import React from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import InputComponent from '@components/Input';
import { RegisterRequest } from '@services/RegisterService';
import { Alert } from 'react-native';

interface MediaVeriScreenProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const MediaVeriScreen: React.FC<MediaVeriScreenProps> = ({ navigation, formData, setFormData }) => {

  const handleNextPress = () => {
    // Verifica se pelo menos uma mídia social foi preenchida antes de continuar
    if (!formData.instagram && !formData.facebook && !formData.tiktok && !formData.youtube && !formData.spotify) {
      Alert.alert('Aviso', 'Por favor, preencha pelo menos uma mídia social antes de continuar.');
      return;
    }

    navigation.navigate('MusicGenreSelection');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <ProgressBar 
        currentPage={6} 
        totalPages={8} 
        onBackPress={handleBackPress} 
      />
      <S.TitleTxt>Verifique suas mídias</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor nos conte um pouco mais sobre você, inicie o processo de verificação de suas mídias sociais.
      </S.SubtitleTxt>

      <InputComponent 
        label={'Instagram'} 
        placeholder={'Ex.: matue.art'} 
        value={formData.instagram} 
        onChangeText={(text) => setFormData({ ...formData, instagram: text })} 
      />
      <InputComponent 
        label={'Facebook'} 
        placeholder={'Ex.: matue.art'} 
        value={formData.facebook} 
        onChangeText={(text) => setFormData({ ...formData, facebook: text })} 
      />
      <InputComponent 
        label={'TikTok'} 
        placeholder={'Ex.: matue.art'} 
        value={formData.tiktok} 
        onChangeText={(text) => setFormData({ ...formData, tiktok: text })} 
      />
      <InputComponent 
        label={'Youtube'} 
        placeholder={'Ex.: matue.art'} 
        value={formData.youtube} 
        onChangeText={(text) => setFormData({ ...formData, youtube: text })} 
      />
      <InputComponent 
        label={'Spotify'} 
        placeholder={'Ex.: matue.art'} 
        value={formData.spotify} 
        onChangeText={(text) => setFormData({ ...formData, spotify: text })} 
      />

      <Button Title={'Próximo'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default MediaVeriScreen;
