import React, { useState } from 'react';
import * as S from './styles';

const SignUpComponent = () => {
  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <S.Container>
      <S.StyledLabel>Estado</S.StyledLabel>
      <S.StyledInput
        placeholder="Preencha seu estado"
        value={state}
        onChangeText={setState}
      />
      <S.StyledLabel>Cidade</S.StyledLabel>
      <S.StyledInput
        placeholder="Preencha sua cidade"
        value={city}
        onChangeText={setCity}
      />
    </S.Container>
  );
};

export default SignUpComponent;
