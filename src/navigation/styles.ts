import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
   SharedValue,
   useAnimatedReaction,
   useAnimatedStyle,
   useSharedValue,
   withSpring,
} from 'react-native-reanimated';

export const styles: BottomTabNavigationOptions = {
   headerShown: false,
   tabBarActiveTintColor: 'white',
   tabBarInactiveTintColor: 'gray',
   tabBarShowLabel: false,
   tabBarStyle: {
      opacity: 0.75,
      backgroundColor: 'black',
      borderTopWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 85,
      elevation: 1,
   },
   tabBarItemStyle: {
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
   },
};

export const iconAnimation = (
   index: number,
   selectedTab: SharedValue<number>
) => {
   const scale = useSharedValue(1);

   useAnimatedReaction(
      () => {
         return selectedTab.value === index;
      },
      isCurrentTabSelected => {
         scale.value = withSpring(isCurrentTabSelected ? 1.2 : 1);
      }
   );

   const animatedStyle = useAnimatedStyle(() => {
      return {
         transform: [{ scale: scale.value }],
      };
   });

   return animatedStyle;
};
