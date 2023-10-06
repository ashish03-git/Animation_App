import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import Animated, { BounceIn, FadeIn, SlideInLeft } from 'react-native-reanimated'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Font5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import DatePicker from 'react-native-date-picker'

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

const GeneralInformation = () => {
    // navigation
    const navigation = useNavigation()

    // date
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

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
            transform: [{ translateX: withTiming(-sec1.value, { duration: 1050 }) }]
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
            navigation.navigate("flight")
        }, 400);
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
                entering={SlideInUp.duration(1000)}
                style={[{ flex: 2.2, flexDirection: "row" }, topStyle]}
            >
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(16), borderTopRightRadius: responsiveWidth(1), borderBottomLeftRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-end" }}>
                    {/* <Text style={{ fontSize: responsiveFontSize(4), color: "white", fontWeight: "500" }}>Let's</Text> */}
                </View>
                <View style={{ flex: 0.9, backgroundColor: "#151820", marginTop: responsiveWidth(1), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: responsiveFontSize(4), color: "white", fontWeight: "700", marginBottom: responsiveWidth(1) }}>General Info.</Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(1), borderTopRightRadius: responsiveWidth(16), borderBottomRightRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-start" }}>
                    {/* <Text style={{ fontSize: responsiveFontSize(4), color: "white", fontWeight: "500" }}>trip</Text> */}
                </View>
            </Animated.View>


            <Animated.View style={{ flex: 7, padding: responsiveWidth(2) }}>
                <Animated.View entering={SlideInRight.duration(950)} style={[{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }, txtStyle]}>
                    <Animated.View style={{ width: responsiveWidth(14), height: responsiveWidth(14), borderRadius: responsiveWidth(7), backgroundColor: "#9bfa02", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "black", fontSize: responsiveFontSize(2.4), fontWeight: "bold" }}>1</Text>
                    </Animated.View>
                    <Text style={{ fontSize: responsiveFontSize(2.8), fontWeight: "600", color: "black", marginLeft: responsiveWidth(3) }}>General Information</Text>
                </Animated.View>
                <Animated.View style={{ flex: 6, justifyContent: "space-evenly", alignItems: "center" }}>
                    {/* choose arrival and departure */}
                    <Animated.View entering={SlideInRight.duration(1050)} style={[{ width: responsiveWidth(90), height: responsiveHeight(18), backgroundColor: "#dcf1f7", borderRadius: responsiveWidth(10), flexDirection: "row" }, sec1Style]}>
                        <View style={{ flex: 5, padding: responsiveWidth(2) }}>
                            <View style={{ flex: 1, margin: responsiveWidth(2), flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Font5 name="plane-departure" size={responsiveWidth(5)} color={"black"} />
                                </View>
                                <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(1.8) }}> From :</Text>
                                    <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "700" }}> New York City (NYC) </Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: "gray", marginLeft: responsiveWidth(5) }} />
                            <View style={{ flex: 1, margin: responsiveWidth(2), flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Font5 name="plane-arrival" size={responsiveWidth(5)} color={"black"} />
                                </View>
                                <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: responsiveFontSize(1.8) }}> To :</Text>
                                    <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "700", marginLeft: responsiveWidth(4) }}>San Fransisco (SFO) </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity>
                                <EvilIcons name="arrow-up" size={responsiveWidth(10)} color={"black"} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <EvilIcons name="arrow-down" size={responsiveWidth(10)} color={"black"} />
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                    {/* choose date */}
                    <Animated.View entering={SlideInRight.duration(1150)} style={[{ width: responsiveWidth(90), height: responsiveHeight(8), borderRadius: responsiveWidth(10), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, sec2Style]}>
                        <AnimatedTouchableOpacity
                            style={{ width: responsiveWidth(40), height: responsiveHeight(7), backgroundColor: "#dcf1f7", borderRadius: responsiveWidth(10), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Feather name="calendar" size={responsiveWidth(6.5)} color="black" />
                            <Text style={{ color: "black", fontSize: responsiveFontSize(2), fontWeight: "500", marginLeft: responsiveWidth(3) }}>12-9-23</Text>
                        </AnimatedTouchableOpacity>
                        <View style={{ width: responsiveWidth(4), height: 3, backgroundColor: "gray" }}></View>
                        <Animated.View style={{ width: responsiveWidth(40), height: responsiveHeight(7), backgroundColor: "#dcf1f7", borderRadius: responsiveWidth(10), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Feather name="calendar" size={responsiveWidth(6.5)} color="black" />
                            <Text style={{ color: "black", fontSize: responsiveFontSize(2), fontWeight: "500", marginLeft: responsiveWidth(3) }}>15-9-23</Text>
                        </Animated.View>
                    </Animated.View>

                    <Animated.View entering={SlideInRight.duration(1250)} style={[{ width: responsiveWidth(90), height: responsiveHeight(22), borderRadius: responsiveWidth(10) }, sec3Style]}>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <Text style={{ fontSize: responsiveFontSize(2.2), color: "black", fontWeight: "800", marginLeft: responsiveWidth(8) }}>Total price range</Text>
                        </View>
                        <View style={{ flex: 4,backgroundColor:"#dcf1f7",borderRadius:responsiveWidth(10) }}>

                        </View>
                        <View style={{ flex: 1,justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                            <Text style={{color:"black",fontSize:responsiveFontSize(2),fontWeight:"700"}}>$1000 - $3000</Text>
                            <Text style={{color:"black",fontSize:responsiveFontSize(2),fontWeight:"700"}}>Avg : $2000 </Text>
                        </View>
                    </Animated.View>

                </Animated.View>
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

export default GeneralInformation;