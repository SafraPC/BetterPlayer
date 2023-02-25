import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginStack } from './login';
import { RegisterStack } from './register';
import { iconAnimation, styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { useSharedValue } from 'react-native-reanimated';

const stackAnimation = {
   LoginStack: 0,
   LoginStack2: 1,
   RegisterStack: 2,
};

const BottomRoutes = () => {
   const Navigation = createBottomTabNavigator();
   const selectedTab = useSharedValue(0);
   const animateIcon = (index: number) => iconAnimation(index, selectedTab);

   return (
      <Navigation.Navigator
         screenOptions={styles}
         initialRouteName="LoginStack"
         screenListeners={{
            tabPress: ({ target }) => {
               const stackName = target?.split(
                  '-'
               )[0] as keyof typeof stackAnimation;
               selectedTab.value = stackAnimation[stackName];
            },
         }}>
         <Navigation.Screen
            name="LoginStack"
            component={LoginStack}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(0)}>
                     <Icon
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        color="white"
                        size={20}
                     />
                  </Animated.View>
               ),
            }}
         />

         <Navigation.Screen
            name="LoginStack2"
            component={LoginStack}
            options={{
               tabBarIcon: () => (
                  <Animated.View style={animateIcon(1)}>
                     <Icon name="ios-search" color="white" size={20} />
                  </Animated.View>
               ),
            }}
         />
         <Navigation.Screen
            name="RegisterStack"
            component={RegisterStack}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(2)}>
                     <Icon
                        name={focused ? 'ios-library' : 'ios-library-outline'}
                        color="white"
                        size={20}
                     />
                  </Animated.View>
               ),
            }}
         />
      </Navigation.Navigator>
   );
};
export { BottomRoutes };
