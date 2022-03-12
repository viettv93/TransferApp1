import React from 'react'
import { View , Text, TextInput} from 'react-native'
import fonts from '../../utils/index'
import Icon from 'react-native-vector-icons/MaterialIcons'


const AddCompany = () => {
    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color}}>
         <View style={{backgroundColor: fonts.red, flexDirection: 'row',alignItems: 'center', justifyContent:'space-between', paddingHorizontal:15, height:60 }}>
            <Icon name= 'arrow-back-ios' color={fonts.white} size={20}/>
            <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontMedium, color:fonts.white }}>Thêm công ty ưa thích</Text>
            <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontMedium, color:fonts.white, fontWeight: '700' }}
              onPress={()=>{}}
              >Lưu</Text>
         </View>
         <View style={{width:'100%', height: 50, backgroundColor:fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 15}}>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.black1 }}>Công ty</Text>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.gray }}>Công ty TNHH Halo Vietnam</Text>
             <Icon name='navigate-next' color={fonts.gray}  size={18} 
             onPress={()=>{}}/>
         </View>
         <View style={{width:'100%', height: 50, backgroundColor:fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, paddingHorizontal: 15}}>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.black1 }}>Mã số doanh nghiệp</Text>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.gray }}>3301124546</Text>
             
         </View>
         <View style={{width:'100%', height: 50, backgroundColor:fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, paddingHorizontal: 15}}>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.black1 }}>Số điện thoại</Text>
             <TextInput style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.gray }} 
             placeholder="098 1234567"
             placeholderTextColor={fonts.gray}/>
             
         </View>
         <View style={{width:'100%', height: 50, backgroundColor:fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, paddingHorizontal: 15}}>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.black1 }}>Email</Text>
             <TextInput style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.gray }} 
             placeholder="contact@congty.com"
             placeholderTextColor={fonts.gray}/>
             
         </View>
         <View style={{width:'100%', height: 50, backgroundColor:fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 2, paddingHorizontal: 15}}>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.black1 }}>Địa chỉ</Text>
             <TextInput style={{fontFamily: fonts.fontSF,fontSize:fonts.fontSmall, color:fonts.gray, width:"50%" , flexShrink:1, flexWrap: 'wrap'}} 
             placeholder="Số 32 Phạm Thận Duật, P. Mai Dịch, Q. Cầu Giấy, Hà Nội"
             placeholderTextColor={fonts.gray}/>
             
         </View>
        </View>
    )
}
export default AddCompany