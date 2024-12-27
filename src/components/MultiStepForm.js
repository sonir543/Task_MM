import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StepOne from '../screens/StepOne';
import StepTwo from '../screens/StepTwo';
import StepThree from '../screens/StepThree';

const Stack = createStackNavigator();

const MultiStepForm = () => (
  <Stack.Navigator>
    <Stack.Screen name="StepOne" component={StepOne} options={{ title: 'Personal Information' }} />
    <Stack.Screen name="StepTwo" component={StepTwo} options={{ title: 'Company Information' }} />
    <Stack.Screen name="StepThree" component={StepThree} options={{ title: 'Plan Selection' }} />
  </Stack.Navigator>
);

export default MultiStepForm;
