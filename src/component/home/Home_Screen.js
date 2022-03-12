import React from "react"
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import fonts from "../../utils/index"
import img from "../../utils/image/index"

const array1 = [
    { image: img.home_callCar, title1: "Dịch vụ ", title2: "gọi xe" },
    { image: img.home_transport, title1: "Bốc xếp ", title2: "hàng thủ công" },
    { image: img.home_boc_hang, title1: "Bốc xếp ", title2: "hàng cơ giới" }]
const array2 = [
    { image: img.home_container, title1: "Gắp ", title2: "container" },
    { image: img.home_storehouse, title1: "Kho gửi", title2: "hàng hóa" },
    { image: img.home_delivery, title1: "Bốc xếp ", title2: "có mái che" }]
const array3 = [{
    image: img.home_carIof, title: "Khuyến mãi Tết 2022 - Rinh ngay quà khủng!- Click here !"
},
{
    image: img.home_background, title: "Khuyến mãi Tết 2022 - Rinh ngay quà khủng!"
}]

const Home = () => {
    const renderItem1 = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ backgroundColor: fonts.white, borderRadius: 5, alignItems: 'center', justifyContent: 'center', width: 85, height: 85, marginRight: 10 }}>
                    <Image source={item.image} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.black2 }}>{item.title1}</Text>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.black2 }}>{item.title2}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderItem2 = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ backgroundColor: fonts.white, borderRadius: 5, alignItems: 'center', justifyContent: 'center', width: 85, height: 85, marginRight: 10 }}>
                    <Image source={item.image} resizeMode="contain" />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.black2 }}>{item.title1}</Text>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: fonts.black2 }}>{item.title2}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderItem3 = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ backgroundColor: fonts.white, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.image} resizeMode="contain" style={{ height: 120 }} />
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontSmall, color: fonts.black2, fontWeight: '600' }}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ImageBackground source={img.home_background}
            resizeMode="contain"
            style={{ flex: 1, height: "63.5%", paddingHorizontal: 12, alignItems: 'center' }}>

            <View style={{ flexDirection: "row", marginTop: 22 }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, fontWeight: '400', color: '#FFFFFF' }}>Xin chào,
                    </Text>
                    <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, fontWeight: '700', color: '#FFFFFF' }}>Nguyễn Tuấn Thành!</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { alert('aaa') }}
                        style={{ marginRight: 12 }}>
                        <Image source={img.home_search} resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Image source={img.home_notification} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 18, width: '100%' }}>
                <TouchableOpacity style={{ borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: '#047A9F', fontWeight: '700' }}>Số dư</Text>
                        <View style={{ flex: 1 }}></View>
                        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: '#2CC197', fontWeight: '700' }}>15.500.0000.000 đ</Text>
                        <Image source={img.home_moreInformation} resizeMode="contain" />
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={img.home_qrCode} resizeMode="contain" />
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: "#342A2A" }}>Quét mã QR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={img.home_money} resizeMode="contain" style={{ marginTop: 8 }} />
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: "#342A2A", marginTop: 10 }}>Nạp / Rút tiền</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={img.home_giveMoney} resizeMode="contain" />
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: "#342A2A" }}>Chuyển tiền</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={img.home_present} resizeMode="contain" />
                            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontVerySmall, color: "#342A2A" }}>Ưu đãi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, fontWeight: '700', color: 'white' }}>Dịch vụ tại Bến xe Hữu Nghị</Text>
            <FlatList
                data={array1}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem1}
                horizontal={true}
            />
            <FlatList
                data={array2}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                renderItem={renderItem2} />
            <Image source={img.home_bar} resizeMode="contain" />
            <Image source={img.home_banner} resizeMode="contain" style={{ height: 120 }} />
            <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.red, fontWeight: '700' }}>Ưu đãi</Text>
            <FlatList
                data={array3}
                renderItem={renderItem3}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true} />
        </ImageBackground>
    )
}
export default Home