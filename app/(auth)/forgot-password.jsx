import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/customButton";
import { Link } from "expo-router";

const ForgotPassword = () => {
  const [form, setForm] = useState({
    email: ""
  });
  const [isLoading, setisLoading] = useState(false);

  const submit = () => {
    console.log("form", form);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center  min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isLoading}
          />

          <View className="flex justify-center flex-row  pt-5  gap-2">
            <Text className="text-lg text-gray-100 font-pregular text-center">
              Don't have account?
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary font-psemibold text-lg"
            >
              Next
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
