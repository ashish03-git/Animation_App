import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
// import Animated, { BounceIn, FadeIn, SlideInLeft } from 'react-native-reanimated'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import EvilIcons from "react-native-vector-icons/EvilIcons"
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

const Taxi_Car = () => {
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
            navigation.navigate("welcome")
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
                    <Text style={{ fontSize: responsiveFontSize(4), color: "white", fontWeight: "700", marginBottom: responsiveWidth(1) }}> Book Taxi</Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(1), borderTopRightRadius: responsiveWidth(16), borderBottomRightRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-start" }}>
                </View>
            </Animated.View>

            <Animated.View entering={SlideInRight.duration(800)} style={[{ flex: 1, flexDirection: "row", alignItems: "center", marginLeft: responsiveWidth(10) }, txtStyle]}>
                <Animated.View style={{ width: responsiveWidth(14), height: responsiveWidth(14), borderRadius: responsiveWidth(7), backgroundColor: "#9bfa02", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: responsiveFontSize(2.4), fontWeight: "bold" }}>4</Text>
                </Animated.View>
                <Text style={{ fontSize: responsiveFontSize(2.8), fontWeight: "600", color: "black", marginLeft: responsiveWidth(3) }}>Book Taxi or Car</Text>
            </Animated.View>

            <Animated.View style={{ flex: 7 }}>
                {/* <Text style={{ marginLeft: responsiveWidth(8),marginTop:responsiveWidth(0), color: "black", fontSize: responsiveFontSize(2.8),fontWeight:"600" }}>Carsharing</Text> */}
                <AnimatedScrollView entering={SlideInRight.duration(900)} horizontal showsHorizontalScrollIndicator={false} style={[{ flex: 1, margin: responsiveWidth(2) }]}>
                    <Animated.View style={[{ width: responsiveWidth(40), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5) }, sec1Style]}>
                        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpS1pUUTRBzFpAMxnPeCuQpHMxYEU1dmSMg&usqp=CAU" }}
                                style={{ width: responsiveWidth(36), height: responsiveHeight(13), margin: responsiveWidth(1), borderRadius: responsiveWidth(3) }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "600", marginLeft: responsiveWidth(5) }}>BMW X1</Text>
                            <View style={{ width: responsiveWidth(25), height: responsiveHeight(4), borderRadius: responsiveWidth(8), backgroundColor: "#151820", margin: responsiveWidth(2), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#9bfa02", fontWeight: "600", fontSize: responsiveFontSize(2) }}>$9.99/hr</Text>
                            </View>
                        </View>

                    </Animated.View>
                    <Animated.View style={[{ width: responsiveWidth(40), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5) }, sec1Style]}>
                        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHJJ0dh09UZCLOlaEKSXDxCWqhawSZGZMZA&usqp=CAU" }}
                                style={{ width: responsiveWidth(36), height: responsiveHeight(13), margin: responsiveWidth(1), borderRadius: responsiveWidth(3) }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "600", marginLeft: responsiveWidth(5) }}>Audi A3 Sedan</Text>
                            <View style={{ width: responsiveWidth(25), height: responsiveHeight(4), borderRadius: responsiveWidth(8), backgroundColor: "#151820", margin: responsiveWidth(2), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#9bfa02", fontWeight: "600", fontSize: responsiveFontSize(2) }}>$9.99/hr</Text>
                            </View>
                        </View>

                    </Animated.View>
                    <Animated.View style={[{ width: responsiveWidth(40), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5) }, sec1Style]}>
                        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpS1pUUTRBzFpAMxnPeCuQpHMxYEU1dmSMg&usqp=CAU" }}
                                style={{ width: responsiveWidth(36), height: responsiveHeight(13), margin: responsiveWidth(1), borderRadius: responsiveWidth(3) }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "600", marginLeft: responsiveWidth(5) }}>BMW X1</Text>
                            <View style={{ width: responsiveWidth(25), height: responsiveHeight(4), borderRadius: responsiveWidth(8), backgroundColor: "#151820", margin: responsiveWidth(2), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#9bfa02", fontWeight: "600", fontSize: responsiveFontSize(2) }}>$9.99/hr</Text>
                            </View>
                        </View>

                    </Animated.View>
                </AnimatedScrollView>


                <AnimatedScrollView entering={SlideInRight.duration(1050)} horizontal showsHorizontalScrollIndicator={false} style={[{ flex: 1, margin: responsiveWidth(2) }]}>
                    <Animated.View style={[{ width: responsiveWidth(40), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5) }, sec1Style]}>
                        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpS1pUUTRBzFpAMxnPeCuQpHMxYEU1dmSMg&usqp=CAU" }}
                                style={{ width: responsiveWidth(36), height: responsiveHeight(13), margin: responsiveWidth(1), borderRadius: responsiveWidth(3) }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "600", marginLeft: responsiveWidth(5) }}>BMW X1</Text>
                            <View style={{ width: responsiveWidth(25), height: responsiveHeight(4), borderRadius: responsiveWidth(8), backgroundColor: "#151820", margin: responsiveWidth(2), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#9bfa02", fontWeight: "600", fontSize: responsiveFontSize(2) }}>$9.99/hr</Text>
                            </View>
                        </View>

                    </Animated.View>
                    <Animated.View style={[{ width: responsiveWidth(40), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5) }, sec1Style]}>
                        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHJJ0dh09UZCLOlaEKSXDxCWqhawSZGZMZA&usqp=CAU" }}
                                style={{ width: responsiveWidth(36), height: responsiveHeight(13), margin: responsiveWidth(1), borderRadius: responsiveWidth(3) }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "600", marginLeft: responsiveWidth(5) }}>Audi A3 Sedan</Text>
                            <View style={{ width: responsiveWidth(25), height: responsiveHeight(4), borderRadius: responsiveWidth(8), backgroundColor: "#151820", margin: responsiveWidth(2), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#9bfa02", fontWeight: "600", fontSize: responsiveFontSize(2) }}>$9.99/hr</Text>
                            </View>
                        </View>

                    </Animated.View>
                    <Animated.View style={[{ width: responsiveWidth(40), height: responsiveHeight(25), backgroundColor: "#dcf1f7", margin: responsiveWidth(2), borderRadius: responsiveWidth(5) }, sec1Style]}>
                        <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpS1pUUTRBzFpAMxnPeCuQpHMxYEU1dmSMg&usqp=CAU" }}
                                style={{ width: responsiveWidth(36), height: responsiveHeight(13), margin: responsiveWidth(1), borderRadius: responsiveWidth(3) }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "600", marginLeft: responsiveWidth(5) }}>BMW X1</Text>
                            <View style={{ width: responsiveWidth(25), height: responsiveHeight(4), borderRadius: responsiveWidth(8), backgroundColor: "#151820", margin: responsiveWidth(2), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#9bfa02", fontWeight: "600", fontSize: responsiveFontSize(2) }}>$9.99/hr</Text>
                            </View>
                        </View>

                    </Animated.View>
                </AnimatedScrollView>

            </Animated.View>

            <Animated.View style={{ flex: 1.8, justifyContent: "center", alignItems: "center" }}>
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

export default Taxi_Car;