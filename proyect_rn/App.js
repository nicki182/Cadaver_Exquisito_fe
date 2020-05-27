import React from 'react';
import Instructions from "./components/instructions";
import Menu from "./components/menu";
import StoryFull from "./components/storyFull";
import StoryCreate from "./components/storyCreate";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Alert, AppRegistry} from 'react-native';
import { ApolloClient } from 'apollo-client';
import 'core-js'
import { ApolloProvider } from '@apollo/react-hooks';
import {HttpLink,InMemoryCache} from 'apollo-boost'
import Header from "./components/header";
import {StyleSheet,View} from "react-native";

const client = new ApolloClient({
    link: new HttpLink({
        uri:`http://192.168.0.23:3030/graphql`}),
    cache: new InMemoryCache()})
const Stack = createStackNavigator();
function App() {
  return (
      <ApolloProvider client={client}>
          <View style={StyleSheet.create({flex:1})}>
          <Header></Header>
          </View>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerShown: false
              }} initialRouteName="Menu">
                  <Stack.Screen name="Menu" component={Menu} />
                  <Stack.Screen name="Instructions" component={Instructions} />
                  <Stack.Screen name="StoryFull" component={StoryFull} initialParams={{Call:0}} />
                  <Stack.Screen name="StoryCreate" component={StoryCreate} initialParams={{Edit:0,Story:'',Add:''}} />
              </Stack.Navigator>
          </NavigationContainer>
      </ApolloProvider>
  );
}
AppRegistry.registerComponent('MyApplication', () => App);
export default App