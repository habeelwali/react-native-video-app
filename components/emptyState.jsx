import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./customButton";
import { router } from "expo-router";
export default function EmptyState({ title, subTitle }) {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" />
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="text-2xl font-bold text-white">{subTitle}</Text>
      <CustomButton
      title="Create video"
      handlePress={()=> router.push('/create')}
      containerStyles="w-full my-5"
      />
    </View>
  );
}
