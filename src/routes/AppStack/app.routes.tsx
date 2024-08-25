import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '@screens/Home';
import SingnUp from '@screens/SignUp'
import RoleSelectionScreen from "@screens/RoleSelection";
import AgeSelectionScreen from "@screens/AgeSelection";
import ForgotPasswordScreen from "@screens/ForgotPassword";
import ForgotTokenScreen from "@screens/ForgotToken";
import AdressSelectionScreen from "@screens/AdressSelection";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name = 'Home'
        component={Home}
        options={{header: () => <></>}} />
        <AppStack.Screen name = 'SignUp'
        component={SingnUp}
        options={{header: () => <></>}} />
        <AppStack.Screen name = 'RoleSelection'
        component={RoleSelectionScreen}
        options={{header: () => <></>}} />
        <AppStack.Screen name = 'AgeSelection'
        component={AgeSelectionScreen}
        options={{header: () => <></>}} />
        <AppStack.Screen name = 'AdressSelection'
        component={AdressSelectionScreen}
        options={{header: () => <></>}} />
        <AppStack.Screen name = 'ForgotPassword'
        component={ForgotPasswordScreen}
        options={{header: () => <></>}} />
        <AppStack.Screen name = 'ForgotToken'
        component={ForgotTokenScreen}
        options={{header: () => <></>}} />
    </AppStack.Navigator>
)

export default AppRoutes;