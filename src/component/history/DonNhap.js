import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import fonts from "../../utils/index"
import Icon from 'react-native-vector-icons/MaterialIcons'

const DonNhap = () => {
    return (
        <View style={{ backgroundColor: fonts.default_color, flex: 1, padding: 15 }}>
            <View style={{ backgroundColor: fonts.white, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>Đơn hàng theo số tờ khai #ABC123456</Text>
                <View style={{ backgroundColor: fonts.black2, height: 1, width: '100%' }} />
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                    <View >
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.gray }}>Dịch vụ</Text>
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.pink }}>Bốc xếp hàng cơ giới</Text>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View >
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.gray }}>Ngày thực hiện</Text>
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.pink }}>Thứ 2, 19/10/2020</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                    <View >
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.gray }}>Tổng chi phí</Text>
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray2 }}>Chưa làm giá</Text>
                    </View>
                    <View style={{flex:1}}/>
                    <View style={{flexDirection: "row"}}>
                      <TouchableOpacity style={{backgroundColor: fonts.red, borderRadius:8, padding:7, alignItems: 'center', justifyContent: 'center'}}>
                          <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.white }}>Xem chi tiết</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ borderRadius:8, padding:7, alignItems: 'center', justifyContent: 'center', backgroundColor: fonts.white, borderWidth:1, borderColor:fonts.gray, marginLeft: 5}}>
                          <Icon name='edit' color={fonts.gray} size={20}/>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default DonNhap