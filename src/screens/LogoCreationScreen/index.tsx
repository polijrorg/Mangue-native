import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions, MediaType } from 'react-native-image-picker';
import * as S from './styles';
import ProgressBar from '@components/ProgressBar';
import HiperlinkTextComponent from '@components/HiperlinkTextComponent';
import Button from '@components/Button';

const LogoCreationScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSelectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo' as MediaType, // Usa o tipo correto
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setImageUri(uri || null);
      }
    });
  };

  const handleNextPress = () => {
    navigation.navigate('ArtistNameSelection');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <ProgressBar currentPage={5} totalPages={8} onBackPress={handleBackPress} />
      <S.TitleTxt>Crie sua logo</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor nos conte um pouco mais sobre você, compartilhe/crie
        conosco sua logo. Ela vai servir de base para sua carreira musical!
      </S.SubtitleTxt>
      <S.SubtitleTxt>
      Sua Logo nada mais é do que ... (iquam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . 
      In leo nunc, dapibus vel elementum eget, auctor in felis.co!)iquam tempor a ipsum ut rutrum. Vivamus vehicula 
      neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!iquam tempor a ipsum ut rutrum. Vivamus 
      vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!iquam tempor a ipsum ut rutrum.
      Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co! Vivamus vehicula neque
      nunc, Vivamus vehicula neque nunc, Vivamus vehicula neque nunc,
      </S.SubtitleTxt>

      <TouchableOpacity onPress={handleSelectImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
        ) : (
          <S.LogoImg source={require('@assets/images/InsertImage.png')} />
        )}
      </TouchableOpacity>

      <HiperlinkTextComponent
        text={'Se necessário contate nossa equipe artística'}
        url={'https://www.clonacartao.com.br'}
      />
      <Button Title={'Próximo'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default LogoCreationScreen;
