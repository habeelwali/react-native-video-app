import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";
const SearchInput = ({initialQuery}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');
 
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-md focus:border-secondary flex-row items-center space-x-4">
      <TextInput
        className="flex-1 text-white mt-0.5  font-pregular text-base"
        value={query}
        placeholder="search for more video"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e)=> setQuery(e)}
       
      />
      
        <TouchableOpacity onPress={() => {
          if(!query){
            return Alert.alert('Missing Query', "Please input something to search results accross database")
          }

          if(pathname.startsWith('/search')) router.setParams({query})
          else router.push(`/search/${query}`)

        }}>
          <Image
            source={icons.search}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
    
    </View>
  );
};

export default SearchInput;
