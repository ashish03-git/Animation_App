import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, PanResponder } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import { TapGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
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
  withTiming
}
  from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

const items = [
  {
    id: 1,
    image: require("../Assets/city1.jpg"),
  },
  {
    id: 2,
    image: require("../Assets/city2.jpg"),
  },
  {
    id: 3,
    image: require("../Assets/city3.jpg"),
  },
  {
    id: 4,
    image: require("../Assets/city4.jpg"),
  },
  {
    id: 5,
    image: require("../Assets/city5.jpg")
  },

]

const Home = () => {

  // navigation
  const navigation = useNavigation()

  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)

  // animation
  const Btn = useSharedValue(0)
  const txt = useSharedValue(0)
  const img = useSharedValue(0)
  const scroll = useSharedValue(0)

  const moveStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(-Btn.value, { duration: 1400 }) }]
  }))

  const moveImg = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(-img.value, { duration: 1300 }) }]
  }))

  const moveTxt = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(-txt.value, { duration: 1050 }) }]
  }))

  const moveScroll = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(-scroll.value, { duration: 1000 }) }]
  }))

  const handlePress = () => {
    Btn.value = responsiveHeight(100)
    img.value = responsiveHeight(100)
    txt.value = responsiveWidth(100)
    scroll.value = responsiveWidth(100)
    setTimeout(() => {
      navigation.navigate("info")
    }, 800);
  }

  useFocusEffect(
    React.useCallback(() => {
      Btn.value = 0
      img.value = 0
      txt.value = 0
      scroll.value = 0
    })
  )

  return (
    <Animated.View style={{ flex: 1, backgroundColor: "white" }}>
      <Animated.View entering={SlideInUp.duration(1000)} style={[{ flex: 3, flexDirection: "row", padding: responsiveWidth(5) }, moveTxt]}>
        <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: responsiveFontSize(4), color: "black", fontWeight: "400" }}>Your Last </Text>
          <Text style={{ fontSize: responsiveFontSize(5), color: "black", fontWeight: "600" }}>business trips</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../Assets/like.png")} />
        </View>
      </Animated.View>


      <Animated.ScrollView entering={SlideInRight.duration(1000)} showsHorizontalScrollIndicator={false} horizontal style={[{ flex: 1, flexDirection: "row" },moveScroll]}>
        <TouchableOpacity
          onPress={() => setOne(!one)}
          style={{ paddingHorizontal: responsiveWidth(10), paddingVertical: responsiveWidth(1), borderRadius: responsiveWidth(10), backgroundColor: one ? "#9bfa02" : "#dcf1f7", justifyContent: "center", margin: responsiveWidth(1) }}>
          <Text style={{ fontSize: responsiveFontSize(2), color: "black", fontWeight: "400" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTwo(!two)}
          style={{ paddingHorizontal: responsiveWidth(10), paddingVertical: responsiveWidth(1), borderRadius: responsiveWidth(10), backgroundColor: two ? "#9bfa02" : "#dcf1f7", justifyContent: "center", margin: responsiveWidth(1) }}>
          <Text style={{ fontSize: responsiveFontSize(2.2), color: "black", fontWeight: "400" }}>Recuring</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setThree(!three)}
          style={{ paddingHorizontal: responsiveWidth(10), paddingVertical: responsiveWidth(1), borderRadius: responsiveWidth(10), backgroundColor: three ? "#9bfa02" : "#dcf1f7", justifyContent: "center", margin: responsiveWidth(1) }}>
          <Text style={{ fontSize: responsiveFontSize(2.2), color: "black", fontWeight: "400" }}>Short</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFour(!four)}
          style={{ paddingHorizontal: responsiveWidth(10), paddingVertical: responsiveWidth(1), borderRadius: responsiveWidth(10), backgroundColor: four ? "#9bfa02" : "#dcf1f7", justifyContent: "center", margin: responsiveWidth(1) }}>
          <Text style={{ fontSize: responsiveFontSize(2.2), color: "black", fontWeight: "400" }}>Live</Text>
        </TouchableOpacity>
      </Animated.ScrollView>


      <Animated.View style={[{ flex: 8, justifyContent: "center", alignItems: "center" }, moveImg]}>
        <AnimatedFlatlist
          horizontal
          data={items}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            // console.log(index)
            return (
              <Animated.View entering={SlideInRight.duration(1100)} style={[{ flex: 1, justifyContent: "center", alignItems: "center", marginLeft: responsiveWidth(3) },moveScroll]}>
                <Animated.View
                  style={{ width: responsiveWidth(90), height: responsiveHeight(45), backgroundColor: item.color, borderRadius: responsiveWidth(10) }}
                >
                  <Image
                    style={{ width: responsiveWidth(90), height: responsiveHeight(45), backgroundColor: item.color, borderRadius: responsiveWidth(10) }}
                    source={item.image}
                  />
                </Animated.View>
              </Animated.View>
            )
          }}
        />

      </Animated.View>

      <AnimatedTouchableOpacity
        onPress={handlePress}
        entering={SlideInDown.duration(1000)} style={[{ flex: 2.5, flexDirection: "row" }, moveStyle]}
      >
        <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(16), borderTopRightRadius: responsiveWidth(1), borderBottomLeftRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-end" }}>
          <Text style={{ fontSize: responsiveFontSize(3.5), color: "white", fontWeight: "500" }}>Let's</Text>
        </View>
        <View style={{ flex: 0.7, backgroundColor: "#151820", marginTop: responsiveWidth(1), justifyContent:"center",alignItems:"center" }}>
          <Text style={{ fontSize: responsiveFontSize(3.5), color: "white", fontWeight: "500",marginBottom:responsiveWidth(1) }}>book a new</Text>
        </View>
        <View style={{ flex: 0.5, backgroundColor: "#151820", borderTopLeftRadius: responsiveWidth(1), borderTopRightRadius: responsiveWidth(16), borderBottomRightRadius: responsiveWidth(16), justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={{ fontSize: responsiveFontSize(3.5), color: "white", fontWeight: "500" }}>trip</Text>
        </View>
      </AnimatedTouchableOpacity>
    </Animated.View>
  )
}

export default Home