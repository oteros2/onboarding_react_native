import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { itemData, onboardingData } from "../pages/pages";
import { Button, PaperProvider } from "react-native-paper";

const { width } = Dimensions.get('window');

const renderItem = ({ item }: { item: itemData }) => (
  <View style={styles.page}>
    <Image source={{ uri: item.image.url }} style={styles.image} />
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

const Onboarding = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === onboardingData.length - 1) {
      return;
    }
    flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    setCurrentIndex(currentIndex + 1);
  };

  const back = () => {
    if (currentIndex === 0) {
      return;
    }
    flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          labelStyle={styles.buttonText}
          mode="elevated"
          onPress={back}>
          Back
        </Button>
        <Button style={styles.button}
          mode="elevated"
          labelStyle={styles.buttonText}
          onPress={next}>
          Next
        </Button>
      </View>
    </PaperProvider>
  );
};

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0D7',
  },
  page: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#727D73',
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 500,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#727D73',
    color: '#FFFFFF',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});