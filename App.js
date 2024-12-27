import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import StepOne from './src/screens/StepOne';
import StepTwo from './src/screens/StepTwo';
import StepThree from './src/screens/StepThree';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StepOne"
          screenOptions={{
            headerStyle: { backgroundColor: '#007BFF' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="StepOne" component={StepOne} options={{ title: 'Personal Information' }} />
          <Stack.Screen name="StepTwo" component={StepTwo} options={{ title: 'Company Information' }} />
          <Stack.Screen name="StepThree" component={StepThree} options={{ title: 'Plan Selection' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
