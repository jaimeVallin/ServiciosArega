import React from 'react';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import { NavigationContainer } from '@react-navigation/native';


const apolloClient = createApolloClient();
const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
    <StatusBar style='light' />
    <NavigationContainer>
    <NativeRouter>
      <Main />
    </NativeRouter>
    </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;