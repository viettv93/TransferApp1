import React from "react"
import { View, Text } from "react-native"
import fonts from "../../utils/index"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon2 from 'react-native-vector-icons/Entypo'


const HeaderFlatList = () => {
    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
            <View style={{ backgroundColor: fonts.red, flexDirection: "row", alignItems: 'center', height: 60, paddingHorizontal: 15 }}>
                <Icon name="arrow-back-ios" color={fonts.white} size={20} />
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white }}>Bốc xếp hàng cơ giới</Text>
            </View>
            <View style={{ backgroundColor: fonts.white, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, height: 150 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.blue2, fontWeight: '700' }}>Thông tin khách hàng  </Text>
                    <Icon name="edit" color={fonts.black2} size={15} onPress={() => { }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Họ và tên:</Text>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Nguyễn Tuấn Thành</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Số điện thoại:</Text>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>0961234567</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Công ty nhận hóa đơn</Text>
                    <View style={{ flex: 1 }}></View>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Chưa có</Text>
                    <Icon name="edit" color={fonts.gray} size={15} onPress={() => { }} />
                </View>
            </View>
            <View style={{ backgroundColor: fonts.white, flexDirection: 'row', height: 60, alignItems: "center", paddingHorizontal: 15, marginTop: 10 }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Số tờ khai</Text>
                <View style={{ flex: 1 }} />
                <View style={{ height: 1, width: "50%", backgroundColor: fonts.gray }} />
            </View>
            <View style={{ backgroundColor: fonts.white, flexDirection: 'row', height: 60, alignItems: "center", paddingHorizontal: 15, marginTop: 1 }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Phiếu hải quan</Text>
                <View style={{ flex: 1 }} />
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Chọn để chụp </Text>
                <Icon name="camera-alt" color={fonts.gray} size={22} />
            </View>
            <View style={{ backgroundColor: fonts.white, flexDirection: 'row', height: 60, alignItems: "center", paddingHorizontal: 15, marginTop: 1 }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Ngày thực hiện</Text>
                <View style={{ flex: 1 }} />
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Thứ 2, 19/10/2020 </Text>
                <Icon1 name="calendar-outline" color={fonts.gray} size={22} />
            </View>
            <View style={{ backgroundColor: fonts.white, height: 60, justifyContent: "center", paddingHorizontal: 15, marginTop: 1 }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Địa điểm</Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1 name="checkbox-blank-circle-outline" color={fonts.gray} size={18} />
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}> Cửa khẩu Hữu Nghị </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1 name="checkbox-blank-circle-outline" color={fonts.gray} size={18} />
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}> Ga Đồng Đăng</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: fonts.white, height: 60, paddingHorizontal: 15, marginTop: 1 }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black1 }}> Có lấy hóa đơn?</Text>
                <View style={{ flex: 1 }} />
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Không </Text>
                    <Icon2 name="switch" size={18} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}> Có</Text>
                </View>
            </View>
        </View>

    )
}
export default HeaderFlatList