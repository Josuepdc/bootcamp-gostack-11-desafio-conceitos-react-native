import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import api from "./services/api";
import RepositoryListItem from "./components/RepositoryListItem";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories").then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({ item: repository }) => (
            <RepositoryListItem 
              id={repository.id}
              title={repository.title}
              techs={repository.techs}
              likes={repository.likes}
              onLikePressed={() => handleLikeRepository(repository.id)}
            />
          )}
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
