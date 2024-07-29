import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '@screens/Home';
import SingnUp from '@screens/SignUp'
import RoleSelectionScreen from "@screens/RoleSelection";

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
    </AppStack.Navigator>
)

export default AppRoutes;