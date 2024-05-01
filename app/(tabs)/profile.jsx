import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

import SearchInput from "../../components/searchInput";
import Trending from "../../components/trending";
import EmptyState from "../../components/emptyState";
import {
  getCurrentUser,
  getUserPosts,
  logout,
  searchPosts,
} from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrit";
import VideoCard from "../../components/videoCard";
import { router, useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { icons } from "../../constants";
import InfoBox from "../../components/infoBox";
const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
 
  const logoutuser = async () => {
    await logout();
    setUser(null);
    setIsLoggedIn(false)
    router.replace('/sign-in')
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logoutuser}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avator }}
                className="w-[90%] h-[90%] rounded-lg "
                resizeMode="cover"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex-row">
            <InfoBox
              title={posts.length || 0}
              subtitle="Posts"
              containerStyles="mr-5"
              titleStyles="text-xl"
            />
             <InfoBox
              title="1.2k"
              subtitle="Followers"
              titleStyles="text-xl"
            />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            subTitle="No videos founds for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
