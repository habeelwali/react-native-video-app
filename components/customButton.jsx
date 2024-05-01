import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
    title,
    handlePress,
    isLoading,
    containerStyles,
    textStyles

}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-md min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50": ""}`} disabled={isLoading}>
      <Text className={`text-primary font-   text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton