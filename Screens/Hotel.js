import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
// import Animated, { BounceIn, FadeIn, SlideInLeft } from 'react-native-reanimated'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Font5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
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

const Hotel = () => {
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
    const sec3Style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(-sec3.value, { duration: 1250 }) }]
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
            navigation.navigate("taxi_car")
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
        <Animated.View entering={FadeIn.duration(700)} style={{ flex: 1, backgroundColor: "white" }}>

            <Animated.View
                entering={SlideInUp.duration(850)}
                style={[{ flex: 2.2, flexDirection: "row" }, topStyle]}
            >
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(16), borderTopRightRadius: responsiveWidth(1), borderBottomLeftRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-end" }}>
                </View>
                <View style={{ flex: 0.9, backgroundColor: "#151820", marginTop: responsiveWidth(1), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: responsiveFontSize(4), color: "white", fontWeight: "700", marginBottom: responsiveWidth(1) }}> Book Hotel</Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(1), borderTopRightRadius: responsiveWidth(16), borderBottomRightRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-start" }}>
                </View>
            </Animated.View>


            <Animated.View style={{ flex: 7, padding: responsiveWidth(2) }}>

                <Animated.View entering={SlideInRight.duration(800)} style={[{ flex: 0.16, flexDirection: "row", alignItems: "center", marginLeft: responsiveWidth(10) }, txtStyle]}>
                    <Animated.View style={{ width: responsiveWidth(14), height: responsiveWidth(14), borderRadius: responsiveWidth(7), backgroundColor: "#9bfa02", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "black", fontSize: responsiveFontSize(2.4), fontWeight: "bold" }}>3</Text>
                    </Animated.View>
                    <Text style={{ fontSize: responsiveFontSize(2.8), fontWeight: "600", color: "black", marginLeft: responsiveWidth(3) }}>Book Hotel</Text>
                </Animated.View>

                <AnimatedScrollView showsVerticalScrollIndicator={false} style={[{ flex: 7 }]}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Animated.View entering={SlideInRight.duration(950)} style={[{ width: responsiveWidth(90), height: responsiveHeight(18), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5), flexDirection: "row" }, sec1Style]}>
                            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/22/20/50/golden-gate-hotel.jpg" }}
                                    style={{ width: responsiveWidth(34), height: responsiveHeight(16), borderRadius: responsiveWidth(5) }}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "600", color: "black" }}>Hotel Winway</Text>
                                    <Text>The rooms are air conditioned</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(8), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2), color: "#9bfa02", fontWeight: "600" }}>$78/day</Text>
                                    </View>
                                    <Font5 name="arrow-right" size={responsiveWidth(6)} color={"black"} />
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View entering={SlideInRight.duration(1050)} style={[{ width: responsiveWidth(90), height: responsiveHeight(18), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5), flexDirection: "row" }, sec2Style]}>
                            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUplR4Qq4D5Perw1HG9PTcTnzVvmL1bgWQYn-7-wd2gItHQOUAjhWJULMmRYyJnXwrhMM&usqp=CAU" }}
                                    style={{ width: responsiveWidth(34), height: responsiveHeight(16), borderRadius: responsiveWidth(5) }}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "600", color: "black" }}>King's Palace</Text>
                                    <Text>The rooms are air conditioned</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(8), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2), color: "#9bfa02", fontWeight: "600" }}>$75/day</Text>
                                    </View>
                                    <Font5 name="arrow-right" size={responsiveWidth(6)} color={"black"} />
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View entering={SlideInRight.duration(1150)} style={[{ width: responsiveWidth(90), height: responsiveHeight(18), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5), flexDirection: "row" }, sec3Style]}>
                            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeZijMh0Rb3iu1QVxCrCwm776Ou61DbDtWg&usqp=CAU" }}
                                    style={{ width: responsiveWidth(34), height: responsiveHeight(16), borderRadius: responsiveWidth(5) }}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "600", color: "black" }}>The Royal Hotel</Text>
                                    <Text>The rooms are air conditioned</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(8), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2), color: "#9bfa02", fontWeight: "600" }}>$72/day</Text>
                                    </View>
                                    <Font5 name="arrow-right" size={responsiveWidth(6)} color={"black"} />
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View entering={SlideInRight.duration(1150)} style={[{ width: responsiveWidth(90), height: responsiveHeight(18), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5), flexDirection: "row" }, sec3Style]}>
                            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kGwfwahhGXoFC4KDz_H38BzhwNApkaqwUA&usqp=CAU" }}
                                    style={{ width: responsiveWidth(34), height: responsiveHeight(16), borderRadius: responsiveWidth(5) }}
                                />
                            </View>
                            <View style={{ flex: 2 }}>
                                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "600", color: "black" }}>The Grand Hotel</Text>
                                    <Text>The rooms are air conditioned</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                                    <View style={{ width: responsiveWidth(25), height: responsiveHeight(5), backgroundColor: "#151820", borderRadius: responsiveWidth(8), justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2), color: "#9bfa02", fontWeight: "600" }}>$70/day</Text>
                                    </View>
                                    <Font5 name="arrow-right" size={responsiveWidth(6)} color={"black"} />
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                </AnimatedScrollView>

            </Animated.View>



            <Animated.View style={{ flex: 1.8, justifyContent: "center", alignItems: "center" }}>
                <AnimatedTouchableOpacity
                    onPress={handleNext}
                    entering={SlideInDown.duration(900)}
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

export default Hotel;