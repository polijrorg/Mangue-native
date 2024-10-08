import React, { useRef, useEffect } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import * as S from './styles';

interface AgeSelectorProps {
  selectedAge: number;
  setSelectedAge: (age: number) => void;
}

const AgeSelector: React.FC<AgeSelectorProps> = ({ selectedAge, setSelectedAge }) => {
  const flatListRef = useRef<FlatList>(null);

  const ages = Array.from({ length: 100 }, (_, i) => i + 1); // Idades de 1 a 100

  const handleItemPress = (age: number) => {
    setSelectedAge(age);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: ages.indexOf(age), animated: true });
    }
  };

  const handleScrollEnd = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / S.ITEM_HEIGHT);
    setSelectedAge(ages[index]);
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: ages.indexOf(selectedAge), animated: true });
    }
  }, [selectedAge]);

  return (
    <View style={{ height: S.ITEM_HEIGHT * 5, justifyContent: 'center' }}>
      <FlatList
        ref={flatListRef}
        data={ages}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <S.ItemContainer selected={item === selectedAge}>
              <S.ItemText selected={item === selectedAge}>{item}</S.ItemText>
            </S.ItemContainer>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        snapToInterval={S.ITEM_HEIGHT}
        decelerationRate="fast"
        contentContainerStyle={{ paddingVertical: (S.ITEM_HEIGHT * 5) / 2 - S.ITEM_HEIGHT / 2 }}
        onMomentumScrollEnd={handleScrollEnd}
        getItemLayout={(data, index) => ({
          length: S.ITEM_HEIGHT,
          offset: S.ITEM_HEIGHT * index,
          index,
        })}
        initialScrollIndex={ages.indexOf(selectedAge)}
      />
    </View>
  );
};

export default AgeSelector;
