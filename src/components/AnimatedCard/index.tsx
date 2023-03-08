import React, { useRef } from 'react';
import Animated, {
   useSharedValue,
   useAnimatedStyle,
   withTiming,
} from 'react-native-reanimated';

interface AnimatedCardListProps {
   children: React.ReactNode;
}

const AnimatedCardList: React.FC<AnimatedCardListProps> = ({ children }) => {
   const opacity = useSharedValue(0);
   const ref = useRef(null);

   const fadeIn = () => {
      opacity.value = withTiming(1, { duration: 850 });
   };

   const onLayout = () => {
      if (ref.current) {
         fadeIn();
      }
   };

   const animatedStyle = useAnimatedStyle(() => {
      return {
         opacity: opacity.value,
      };
   });

   return (
      <Animated.View ref={ref} style={[animatedStyle]} onLayout={onLayout}>
         {children}
      </Animated.View>
   );
};

export { AnimatedCardList };
