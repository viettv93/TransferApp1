import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import fonts from '../../utils/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../utils/image/index"


const
    array = [
        { title: "Đầu kéo thùng dài 12m", img: image.callCar_xeTai },
        { title: "Đầu kéo thùng dài 14.2m", img: image.callCar_xeCong },
        { title: "Đầu kéo thùng dài 15m", img: image.callCar_xeCong },
        { title: "somi romooc", img: image.callCar_xeCong }]


const CallCar = () => {
    const [address1, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const setAddressPut = () => {
        setAddress()
    }
    const setAddressPick = () => {
        setAddress2()
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: fonts.white, alignItems: 'center' }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.red }}>{item.title}</Text>
                <View style={{ backgroundColor: fonts.white, borderRadius: 20 }}>
                    <Image source={item.img} resizeMode="contain" />
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
            <View style={{ backgroundColor: fonts.red, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, height: 60 }}>
                <Icon name='arrow-back-ios' color={fonts.white} size={20} />
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white }}>Gọi xe</Text>
                <View style={{ flex: 0.1 }} />
            </View>

            <View style={{ backgroundColor: fonts.white, borderBottomLeftRadius: 15, borderTopLeftRadius: 15, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.blue, fontWeight: "700" }}>Thông tin khách hàng</Text>
                    <Icon name='edit' color={fonts.gray} size={18} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Họ và tên:</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Nguyễn Tuấn Thành</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Số điện thoại:</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>0961234567</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Công ty nhận hóa đơn</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Chưa có</Text>
                </View>
            </View>
            <View style={{ backgroundColor: fonts.white, padding: 15, marginTop: 5 }}>
                <View style={{ height: 50 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, marginTop: 5 }}>Điểm lấy hàng</Text>

                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ width: '95%' }}>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>{address1}</Text>
                            <View style={{ borderTopWidth: 1, borderColor: fonts.gray, height: 1, width: "95%", marginRight: 5 }} />
                        </View>
                        <Icon1 name='map-marker' color={fonts.gray} size={18}
                            onPress={setAddressPut} />
                    </View>
                </View>
                <View style={{ height: 50 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, marginTop: 5 }}>Điểm dỡ hàng</Text>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '95%' }}>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, width: "100%" }}>{address2}</Text>
                            <View style={{ borderTopWidth: 1, borderColor: fonts.gray, height: 1, width: "95%", marginRight: 5 }} />
                        </View>
                        <Icon1 name='map-marker' color={fonts.gray} size={18}
                            onPress={setAddressPick} />
                    </View>
                </View>
                <View style={{ height: 50 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, marginTop: 5 }}>Loại hàng hóa</Text>
                    <View >
                        <TextInput
                            onChangeText={(val) => { setValue2(val) }}
                            value={value2}
                            style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, padding: 0 }}></TextInput>
                        <View style={{ borderTopWidth: 1, borderColor: fonts.gray, height: 1, width: "100%" }} />
                    </View>
                </View>
                <View style={{ height: 50 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, marginTop: 5 }}>Khối lượng hàng hóa</Text>
                    <View >
                        <TextInput
                            value={value1}
                            onChangeText={(val) => { setValue1(val) }}
                            style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, padding: 0 }}></TextInput>
                        <View style={{ borderTopWidth: 1, borderColor: fonts.gray, height: 1, width: "100%" }} />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, backgroundColor: fonts.white }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 , width: "100%"}}>Loại xe</Text>
                <FlatList data={array}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem} />
            </View>
            <View style={{ backgroundColor: fonts.white, marginTop: 2,  padding:15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Ngày lấy hàng</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray, fontWeight: '700' }}>Thứ 2, 19/10/2020</Text>
                    <Icon name='navigate-next' color={fonts.gray} size={18} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2 }}>Ngày dỡ hàng dự kiến</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray, fontWeight: '700' }}>Thứ 5, 22/10/2020</Text>
                    <Icon name='navigate-next' color={fonts.gray} size={18} />
                </View>
            </View>
            <View style={{ backgroundColor: fonts.white, marginTop: 2, paddingHorizontal: 15 , flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{borderRadius:38, alignItems: 'center', justifyContent: 'center', width: "45%", backgroundColor: fonts.white, borderWidth:1, padding: 12}}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.red, fontWeight: '700' }}>Lưu bản nháp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:38, alignItems: 'center', justifyContent: 'center', width: "45%", backgroundColor: fonts.red, padding:12}}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.white, fontWeight: '700' }}>Tạo đơn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CallCar