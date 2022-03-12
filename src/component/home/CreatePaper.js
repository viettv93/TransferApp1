import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import fonts from "../../utils/index"
import HeaderFlatList from "./HeaderFlatlist"
import ModalDropdown from "react-native-modal-dropdown"
import { RFValue } from "react-native-responsive-fontsize"
import Icon from 'react-native-vector-icons/MaterialIcons'



const option = ["Kiện", "Container", "KG"]
const array = [{
    title: "Cặp xe thứ ", text1: "Biển số Việt Nam", text2: "Biển số Trung Quốc",
    exam1: "VD: 29C - 123.45", exam2: "VD: Phế liệu", exam3: "VD: 10", text3: "Loại hàng", text4: "Số lượng"
}]

const CreatePaper = () => {
    const addFlatList = () => { }


    const renderItem = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: fonts.default_color, alignItems: 'center' }}>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray }}>{`Cặp xe thứ 0${index + 1}`}</Text>
                <View style={{ flex: 1, backgroundColor: fonts.white }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: '45%' }}>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.blue, fontWeight: '600' }}>{item.text1}</Text>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray, fontWeight: '400' }}>{item.exam1}</Text>
                            <View style={{ height: 1, width: "100%", backgroundColor: fonts.gray }} />
                        </View>
                        <View style={{ width: '46%', marginLeft: 5 }}>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.green, fontWeight: '600' }}>{item.text2}</Text>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray, fontWeight: '400' }}>{item.exam1}</Text>
                            <View style={{ height: 1, width: "100%", backgroundColor: fonts.gray }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: '45%' }}>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black1, fontWeight: '400' }}>{item.text3}</Text>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray, fontWeight: '400' }}>{item.exam2}</Text>
                            <View style={{ height: 1, width: "100%", backgroundColor: fonts.gray }} />
                        </View>
                        <View style={{ width: '30%', marginLeft: 5 }}>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black1, fontWeight: '400' }}>{item.text4}</Text>
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.gray, fontWeight: '400' }}>{item.exam3}</Text>
                            <View style={{ height: 1, width: "100%", backgroundColor: fonts.gray }} />
                        </View>
                        <View style={{ marginLeft: 5, width: '15%' }}>
                            <View style={{ flex: 1 }}></View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <ModalDropdown
                                    renderRow={(option) => {
                                        return (
                                            <Text style={{ color: fonts.black1, fontSize: fonts.fontSmall, fontFamily: fonts.fontSF }}>{option}</Text>
                                        )
                                    }}
                                    style={{ width: RFValue(40) }}
                                    textStyle={{ color: fonts.black1, fontSize: fonts.fontSmall, fontFamily: fonts.fontSF }}
                                    options={option}
                                    defaultValue="Kiện"
                                />
                                <Icon name="keyboard-arrow-down" color={fonts.black1} size={20} />
                            </TouchableOpacity>
                            <View style={{ height: 1, width: "100%", backgroundColor: fonts.gray }} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color, alignItems: 'center' }}>
            <FlatList
                ListHeaderComponent={HeaderFlatList}

                data={array}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity style={{ borderRadius: 38, borderStyle: "dashed", borderWidth: 1, borderColor: fonts.gray, width: "40%", alignItems: "center", justifyContent: 'center', height: 40 }}
                    onPress={() => { }}
                >
                    <Text>+  Thêm cặp xe</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" , justifyContent: 'space-between', marginTop: 10, backgroundColor: fonts.white, width: '100%', paddingHorizontal: 15, height: "7%", alignItems: 'center'}}>
                <TouchableOpacity style={{ borderRadius: 38, borderWidth: 1, borderColor: fonts.red, width: "40%", alignItems: "center", justifyContent: 'center', height: 40}}
                    onPress={() => { }}
                >
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.red, fontWeight: '700' }}>Lưu bản nháp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 38, backgroundColor: fonts.red, width: "40%", alignItems: "center", justifyContent: 'center', height: 40 }}
                    onPress={() => { }}
                >
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.white, fontWeight: '700' }}>Tạo đơn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePaper