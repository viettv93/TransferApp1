
import React from "react"
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import fonts from "../../utils/index"
const Onboarding = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../utils/image/login_img/background_screen1.png')}
                resizeMode="cover"
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 3, alignItems: 'center' , justifyContent: 'center'}}>
                    <View style={{ backgroundColor: 'white', width: 120, height: 120, borderRadius: 29, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../utils/image/login_img/image1.png')} />
                    </View>
                </View>

                <View style={{ flex: 1 , alignItems: 'center'}}>
                    <TouchableOpacity style={{ backgroundColor: '#C42829', width: 261, height: 47, borderRadius: 54, alignItems: 'center', paddingVertical: 14, paddingHorizontal: 28, marginTop: 30 }}
                        onPress={() => { }}>
                        <Text style={{ color: "white", fontFamily: fonts.fontSF, fontSize: fonts.fontSmall }}>
                            Đăng nhập bằng số điện thoại
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 30 }}
                        onPress={() => { }}>
                        <Text style={{ color: '#545454', fontFamily: fonts.fontSF, fontSize: fonts.fontSmall }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}
export default Onboarding