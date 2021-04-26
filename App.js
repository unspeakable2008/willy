import React from 'react';
import { StyleSheet, Text, View, Image, ImageComponent} from 'react-native';
import SearchScreen from "./screens/SearchScreen" 
import BookTransactionScreen from "./screens/BookTransactionScreen"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default function App() {

  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen}
},
{defaultNavigationOptions:({navigation})=>({
tabBarIcon:()=>{  
  const routeName = navigation.state.routeName
  if (routeName == "Transaction"){
    return (
      <Image source = {require("./assets/BookTransaction.jpg")} style = {{width:40, height:40}}></Image>
    )
  }
else if (routeName == "Search"){
  return (
    <Image source = {require("./assets/SearchingBook.jpg")} style = {{width:40, height:40}}></Image>
  )
} 
}
})}
)
const AppContainer = createAppContainer(TabNavigator)
