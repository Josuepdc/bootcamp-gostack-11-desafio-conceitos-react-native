import React from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import RepositoryListItem from "./components/RepositoryListItem";

export default function App() {
  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <RepositoryListItem 
          title={"Repository 1"}
          techs={["ReactJS", "Node.js"]}
          likes={3}
          onLikePressed={() => handleLikeRepository(1)}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
});
