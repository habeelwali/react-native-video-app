import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import SearchInput from "../../components/searchInput";
import Trending from "../../components/trending";
import EmptyState from "../../components/emptyState";
import { getAllPosts, getLatestPosts, searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrit";
import VideoCard from "../../components/videoCard";
import { useLocalSearchParams } from "expo-router";
const Search = () => {
  const { query } = useLocalSearchParams();

  const { data: posts } = useAppwrite(()=>searchPosts(query));
  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 ">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Result
            </Text>
            <Text className="text-2xl font-bold text-white">{query}</Text>
            <View className="mt-6 mb-8">
            <SearchInput initialQuery={query} />
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

export default Search;
