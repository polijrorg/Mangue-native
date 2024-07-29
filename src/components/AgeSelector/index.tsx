import React, { useState, useRef, useEffect } from 'react';
import { FlatList, View, Dimensions, TouchableOpacity } from 'react-native';
import * as S from './styles';

const { height } = Dimensions.get('window');

const AgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState(24);
  const flatListRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const ages = Array.from({ length: 100 }, (_, i) => i + 1);

  const renderItem = ({ item }) => {
    const selected = item === selectedAge;
    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <S.ItemContainer selected={selected}>
          <S.ItemText selected={selected}>
            {item}
          </S.ItemText>
        </S.ItemContainer>
      </TouchableOpacity>
    );
  };

  const handleItemPress = (item) => {
    setSelectedAge(item);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: ages.indexOf(item), animated: true });
    }
  };

  const handleScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / S.ITEM_HEIGHT);
    if (ages[index] !== selectedAge) {
      setSelectedAge(ages[index]);
    }
    setIsScrolling(false);
  };

  useEffect(() => {
    if (!isScrolling && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: ages.indexOf(selectedAge), animated: true });
    }
  }, [selectedAge, isScrolling]);

  return (
    <View style={{ height: S.ITEM_HEIGHT * 5, justifyContent: 'center' }}>
      <FlatList
        ref={flatListRef}
        data={ages}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={S.ITEM_HEIGHT}
        decelerationRate="fast"
        contentContainerStyle={{ paddingVertical: (S.ITEM_HEIGHT * 5) / 2 - S.ITEM_HEIGHT / 2 }}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollBeginDrag={() => setIsScrolling(true)}
        getItemLayout={(data, index) => (
          { length: S.ITEM_HEIGHT, offset: S.ITEM_HEIGHT * index, index }
        )}
        initialScrollIndex={ages.indexOf(selectedAge)}
      />
    </View>
  );
};

export default AgeSelector;
