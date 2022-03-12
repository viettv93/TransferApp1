import React from 'react'
import { View, Text, FlatList , TouchableOpacity, ImageBackground} from "react-native"
import fonts from '../../utils/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import image from '../../utils/image'
const array = [
    { name: "CÔNG TY TNHH MTV HWAN TAI VIETNAM", mst: "MST: 3500806643", address: "Địa chỉ: Số 32 Phạm Thận Duật,..." },
    { name: "CÔNG TY TNHH MTV HWAN TAI VIETNAM", mst: "MST: 3500806643", address: "Địa chỉ: Số 32 Phạm Thận Duật,..." },
    { name: "CÔNG TY TNHH MTV HWAN TAI VIETNAM", mst: "MST: 3500806643", address: "Địa chỉ: Số 32 Phạm Thận Duật,..." }]
const Company = () => {

    const renderItem = ({ item, index }) => {
        return (
            <ImageBackground style={{ height:100, padding: 5, marginTop:5, justifyContent: 'center'}}
                source={image.company_background} resizeMode="cover">
                <View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent: 'space-evenly'}}>
                    <Icon1 name='checkbox-blank-circle-outline' color={fonts.gray} size={18}/>
                    <View>
                        <Text style={{fontFamily: fonts.fontSF, fontSize:fonts.fontSmall, color: fonts.black1, fontWeight: '600'}}>{item.name}</Text>
                        <Text  style={{fontFamily: fonts.fontSF, fontSize:fonts.fontVerySmall, color: fonts.gray, fontWeight: '400'}}>{item.mst}</Text>
                        <Text  style={{fontFamily: fonts.fontSF, fontSize:fonts.fontVerySmall, color: fonts.gray, fontWeight: '400'}}>{item.address}</Text>
                    </View>
                    <Icon name='mode-edit' color={fonts.gray} size={18} onPress={()=>{}}/>
                </View>
            </ImageBackground>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
            <View style={{ backgroundColor: fonts.red, flexDirection: 'row', alignItems: 'center', height: 60, width: '100%', paddingHorizontal:15, justifyContent: 'space-between' }}>
                <Icon name='arrow-back-ios' color={fonts.white} size={18} />
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white }}>Công ty nhận hóa đơn </Text>
                <View style={{flex:1}}/>
            </View>
            <FlatList
                data={array}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem} />
            <TouchableOpacity style={{borderStyle: "dashed", borderColor:fonts.gray, borderWidth:1, alignItems: 'center', justifyContent: 'center', height: 40}}>
              <Text style={{fontFamily:fonts.fontSF, fontSize:fonts.fontSmall,color: fonts.gray}}>+ Thêm công ty ưa thích</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Company