import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { itemData, onboardingData } from "../pages/pages";

const { width } = Dimensions.get('window');

const renderItem = ({ item }: { item: itemData }) => (
    <View style={styles.page}>
      <Image source={{ uri: item.image.url }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
  
const Onboarding = () => {
          return (
            <View style={styles.container}>
              <FlatList
                data={onboardingData}
                renderItem = {renderItem}
                keyExtractor={(item) => item.key}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={true}
              />
            </View>
          );
        };

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#F0F0D7',
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
});