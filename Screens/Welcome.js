import React, { useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, SlideInDown, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const Welcome = () => {
    const navigation = useNavigation();
    const img = useSharedValue(0);
    const txt = useSharedValue(0);
    const btn = useSharedValue(0);

    const animatedImgStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(-img.value,{duration:1000}) }],
    }));

    const animatedTxtStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(txt.value,{duration:1000}) }],
    }));

    const animatedBtnStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withTiming(btn.value,{duration:1000}) }],
    }));

    useFocusEffect( 
        React.useCallback(() => {
            img.value = 0;
            txt.value = 0;
            btn.value = 0;
        })
    )
   
    const handleChange = () => {
        img.value = img.value + responsiveHeight(60)
        txt.value = txt.value + responsiveHeight(60)
        btn.value =btn.value + responsiveHeight(60)

        setTimeout(() => {
            withTiming(navigation.navigate("home"),{duration:800});
        }, 400);
    };

  
    return (
        <View style={[{ flex: 1, backgroundColor: "#151820" }]}>
            <StatusBar hidden />
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View entering={SlideInDown.duration(1000)} style={[{ flex: 3 }, animatedImgStyle]}>
                        <LottieView style={{ flex: 1 }} source={require("../Assets/animation_lmytneex.json")} autoPlay loop />
                    </Animated.View>
                    <View style={{ flex: 2, alignSelf: "center" }}>
                        <Animated.View entering={SlideInRight.duration(1000)}  style={[{ flex: 2, justifyContent: "flex-start" }, animatedTxtStyle]}>
                            <Animated.Text style={{ color: "white", fontSize: responsiveFontSize(6) }}>Let's go</Animated.Text>
                            <Animated.Text  style={{ color: "white", fontSize: responsiveFontSize(6) }}>on the new</Animated.Text>
                            <Animated.Text  style={{ color: "white", fontSize: responsiveFontSize(6) }}>business trip!</Animated.Text>
                        </Animated.View>

                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <AnimatedTouchableOpacity
                                entering={SlideInLeft.duration(1000)}
                                onPress={handleChange}
                                style={[{ width: responsiveWidth(18), height: responsiveWidth(18), backgroundColor: "#2b2b2b", borderRadius: responsiveWidth(9), justifyContent: "center", alignItems: "center" }, animatedBtnStyle]}>
                                <EvilIcons name="arrow-right" size={responsiveWidth(18)} color={"#3CF850"} />
                            </AnimatedTouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Welcome;
