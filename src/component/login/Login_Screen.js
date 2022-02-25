import React from "react"
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native"
import fonts from "../../utils/index"


const Login = () => {
    return (
        <ImageBackground source={require("../../utils/image/login_img/background_screen2.png")}
            resizeMode='contain'
            style={{ flex: 1, height: "46.5%", alignItems: 'center', backgroundColor:"#E5E5E5" }}>
            <Image source={require("../../utils/image/login_img/logo_screen2.png")}
                style={{ marginTop: 60 }} />
            <View style={{ backgroundColor: 'white', alignItems: 'center', padding: 16, borderRadius: 15, width: '92%', marginTop: 16 }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontBig, color: '#272727', fontWeight: "700" }}>Đăng nhập</Text>
                <TextInput style={{ borderWidth: 0.906706, width: "100%", borderRadius: 51, marginVertical: 12, fontFamily: fonts.fontSF, fontSize: fonts.fontSmall }}
                    placeholder="   Số điện thoại/Email"
                    placeholderTextColor={"#BDBDBD"} />
                <TextInput style={{ borderWidth: 0.906706, width: "100%", borderRadius: 51, fontFamily: fonts.fontSF, fontSize: fonts.fontSmall }}
                    placeholder="   Mật khẩu"
                    placeholderTextColor={"#BDBDBD"} />
                <View style={{ flexDirection: 'row', marginTop: 10, width: '97%' }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require("../../utils/image/login_img/img.png")} resizeMode="contain"/>
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: "#BDBDBD" }}> Lưu mật khẩu</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, textDecorationLine: 'underline', color: "#BDBDBD" }}
                        onPress={() => { }}>Quên mật khẩu?</Text>
                </View>
                <TouchableOpacity style={{ width: '41.5%', borderRadius: 54, backgroundColor: '#C42829', paddingVertical: 14, paddingHorizontal: 28, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ color: 'white', fontFamily: fonts.fontSF, fontSize: fonts.fontMedium }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 7, borderRadius: 33, width: "92%" }}>
                <Image source={require('../../utils/image/login_img/google.png')}
                    resizeMode="contain" />
                <Text
                    style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: '#2C2929' }}>
                    Đăng nhập bằng tài khoản Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'black', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 7, borderRadius: 33, width: "92%", marginTop: 8 }}>
                <Image source={require('../../utils/image/login_img/apple.png')}
                    resizeMode="contain" />
                <Text
                    style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: '#FFFFFF' }}>
                    Đăng nhập bằng tài khoản Apple</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' , marginTop: 25}}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: "#BDBDBD" }}>Chưa có tài khoản?</Text>
                <Text
                    onPress={() => {console.log("aaa") }}
                    style={{ textDecorationLine: "underline", color: '#C42829', fontFamily: fonts.fontSF, fontSize: fonts.fontSmall }}>Đăng ký</Text>
            </View>
        </ImageBackground>
    )
}
export default Login