import React from "react"; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Shop from "./pages/Shop"
import Perfil from "./pages/Perfil"

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Shop">
            <Drawer.Screen name="Shop" component={Shop} />
            <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}