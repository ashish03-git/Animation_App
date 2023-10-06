import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
// import Animated, { BounceIn, FadeIn, SlideInLeft } from 'react-native-reanimated'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwsome from "react-native-vector-icons/FontAwesome"
import Font5 from "react-native-vector-icons/FontAwesome5"

import Animated,
{
    BounceIn,
    SlideInDown,
    SlideInLeft,
    SlideInRight,
    SlideInUp,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    FadeIn
}
    from 'react-native-reanimated'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

const GeneralInformation = () => {
    // navigation
    const navigation = useNavigation()

    const btn = useSharedValue(0);
    const top = useSharedValue(0);
    const txt = useSharedValue(0);
    const sec1 = useSharedValue(0);
    const sec2 = useSharedValue(0);
    const sec3 = useSharedValue(0);

    const btnStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(btn.value, { duration: 1000 }) }]
        }
    })
    const topStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(-top.value, { duration: 1000 }) }]
        }
    })
    const txtStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(-txt.value, { duration: 950 }) }]
        }
    })
    const sec1Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(-sec1.value, { duration: 1000 }) }]
        }
    })
    const sec2Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(-sec2.value, { duration: 1150 }) }]
        }
    })

    const handleNext = () => {
        btn.value = btn.value + responsiveWidth(50)
        top.value = top.value + responsiveWidth(50)
        txt.value = txt.value + responsiveWidth(100)
        sec1.value = sec1.value + responsiveWidth(100)
        sec2.value = sec2.value + responsiveWidth(100)
        sec3.value = sec3.value + responsiveWidth(100)

        setTimeout(() => {
            navigation.navigate("hotel")
        }, 600);
    }

    useFocusEffect(
        React.useCallback(() => {
            btn.value = 0
            top.value = 0
            txt.value = 0
            sec1.value = 0
            sec2.value = 0
            sec3.value = 0
        })
    )


    return (
        <Animated.View entering={FadeIn.duration(900)} style={{ flex: 1, backgroundColor: "white" }}>

            <Animated.View
                entering={SlideInUp.duration(850)}
                style={[{ flex: 2.2, flexDirection: "row" }, topStyle]}
            >
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(16), borderTopRightRadius: responsiveWidth(1), borderBottomLeftRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-end" }}>
                </View>
                <View style={{ flex: 0.9, backgroundColor: "#151820", marginTop: responsiveWidth(1), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: responsiveFontSize(4), color: "white", fontWeight: "700", marginBottom: responsiveWidth(1) }}>Book Flight</Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(1), borderTopRightRadius: responsiveWidth(16), borderBottomRightRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-start" }}>
                </View>
            </Animated.View>


            <Animated.View style={{ flex: 7, padding: responsiveWidth(2) }}>

                <Animated.View entering={SlideInRight.duration(800)} style={[{ flex: 0.16, flexDirection: "row", alignItems: "center", marginLeft: responsiveWidth(10) }, txtStyle]}>
                    <Animated.View style={{ width: responsiveWidth(14), height: responsiveWidth(14), borderRadius: responsiveWidth(7), backgroundColor: "#9bfa02", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "black", fontSize: responsiveFontSize(2.4), fontWeight: "bold" }}>2</Text>
                    </Animated.View>
                    <Text style={{ fontSize: responsiveFontSize(2.8), fontWeight: "600", color: "black", marginLeft: responsiveWidth(3) }}> Book Flight</Text>
                </Animated.View>

                <AnimatedScrollView showsVerticalScrollIndicator={false} style={[{ flex: 7 }]}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Animated.View entering={SlideInRight.duration(950)} style={[{ width: responsiveWidth(90), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(10) }, sec1Style]}>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: "700", color: "black" }}>NYC</Text>
                                    <Text>New York City</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Font5 name="plane-departure" size={responsiveWidth(5)} color={"black"} />
                                    <Text style={{ color: "black", fontSize: responsiveFontSize(2), fontWeight: "700" }}> - - - - - - - - - - -  </Text>
                                    <Text style={{ color: "black", fontWeight: "500" }}>2 hr 15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: "700", color: "black" }}>SFO</Text>
                                    <Text>San Fransisco</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Date & Time</Text>
                                    <Text style={{ fontWeight: "500", color: "black", fontSize: responsiveFontSize(1.8) }}>Sep 12, 9:15 Am</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Flight Number</Text>
                                    <Text style={{ fontWeight: "500", color: "black", fontSize: responsiveFontSize(1.8) }}>NL385</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <Image
                                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BzmrC5duU-GrIY8ipGNuoVzex5J-kqbOd5Y9wlkeHw&s" }}
                                        style={{ width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: responsiveWidth(5) }}
                                    />
                                    <Text style={{ color: "black", fontWeight: "500", fontSize: responsiveFontSize(1.8) }}>Indigo Airlines</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(10), marginLeft: responsiveWidth(10), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2.5), color: "#9bfa02" }}>$300</Text>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View entering={SlideInRight.duration(1050)} style={[{ width: responsiveWidth(90), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(10) }, sec2Style]}>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: "700", color: "black" }}>NYC</Text>
                                    <Text>New York City</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Font5 name="plane-departure" size={responsiveWidth(5)} color={"black"} />
                                    <Text style={{ color: "black", fontSize: responsiveFontSize(2), fontWeight: "700" }}> - - - - - - - - - - -  </Text>
                                    <Text style={{ color: "black", fontWeight: "500" }}>2 hr 15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: "700", color: "black" }}>SFO</Text>
                                    <Text>San Fransisco</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Date & Time</Text>
                                    <Text style={{ fontWeight: "500", color: "black", fontSize: responsiveFontSize(1.8) }}>Sep 12, 10:15 Am</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Flight Number</Text>
                                    <Text style={{ fontWeight: "500", color: "black", fontSize: responsiveFontSize(1.8) }}>AA455</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <Image
                                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tROqUzwxzaMLg1fcB0e2OwvZE-o5-Qf5Fw&usqp=CAU" }}
                                        style={{ width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: responsiveWidth(5) }}
                                    />
                                    <Text style={{ color: "black", fontWeight: "500", fontSize: responsiveFontSize(1.8) }}>Air Asia Airline</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(10), marginLeft: responsiveWidth(10), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2.5), color: "#9bfa02" }}>$350</Text>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View entering={SlideInRight.duration(1150)} style={{ width: responsiveWidth(90), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(10) }}>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: "700", color: "black" }}>NYC</Text>
                                    <Text>New York City</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Font5 name="plane-departure" size={responsiveWidth(5)} color={"black"} />
                                    <Text style={{ color: "black", fontSize: responsiveFontSize(2), fontWeight: "700" }}> - - - - - - - - - - -  </Text>
                                    <Text style={{ color: "black", fontWeight: "500" }}>2 hr 15 min</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: "700", color: "black" }}>SFO</Text>
                                    <Text>San Fransisco</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Date & Time</Text>
                                    <Text style={{ fontWeight: "500", color: "black", fontSize: responsiveFontSize(1.8) }}>Sep 12, 11:35 Am</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Flight Number</Text>
                                    <Text style={{ fontWeight: "500", color: "black", fontSize: responsiveFontSize(1.8) }}>VS385</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <Image
                                        source={{ uri: "https://pbs.twimg.com/media/B3B6A-7CUAAjarl.jpg" }}
                                        style={{ width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: responsiveWidth(5) }}
                                    />
                                    <Text style={{ color: "black", fontWeight: "500", fontSize: responsiveFontSize(1.8) }}>Vistara Airlines</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(10), marginLeft: responsiveWidth(10), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2.5), color: "#9bfa02" }}>$380</Text>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                </AnimatedScrollView>

            </Animated.View>


            <Animated.View style={{ flex: 1.8, justifyContent: "center", alignItems: "center", zIndex: 100 }}>
                <AnimatedTouchableOpacity
                    onPress={handleNext}
                    entering={SlideInDown.duration(1000)}
                    style={
                        [{
                            width: responsiveWidth(90),
                            height: responsiveHeight(14),
                            backgroundColor: "#E8D7FF",
                            borderRadius: responsiveWidth(15),
                            justifyContent: "center",
                            alignItems: "center"
                        }, btnStyle]
                    }>
                    <Text style={{ color: "black", fontSize: responsiveFontSize(3), fontWeight: "700" }}>Next</Text>
                </AnimatedTouchableOpacity>
            </Animated.View>
            
        </Animated.View>
    )
}

export default GeneralInformation;