import React, { useState } from 'react'
import { View , Text, TextInput} from 'react-native'
import fonts from '../../utils/index'
import Icon from 'react-native-vector-icons/MaterialIcons'


const SearchCompany = () => {


    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
            <View style={{width: "100%", height: 50, backgroundColor: fonts.red, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:15}}>
             <Icon name= 'arrow-back-ios' color={fonts.white} size={20}/>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontMedium, color:fonts.white }}>Tìm kiếm doanh nghiệp</Text>
             <Text style={{fontFamily: fonts.fontSF,fontSize:fonts.fontMedium, color:fonts.white, fontWeight: '700' }}
              onPress={()=>{}}
              >Xong</Text>
            </View>
            <View style={{flexDirection: 'row',backgroundColor: fonts.white, borderRadius: 7,margin: 10, paddingHorizontal: 15, alignItems: "center", justifyContent: 'space-between', marginHorizontal: 15}}>
                <Icon name='search' color={fonts.gray} size={18}/>
                <TextInput 
                placeholder='Tìm kiếm theo tên công ty hoặc mã số thuế'
                placeholderTextColor={fonts.gray}/>
                <View style={{flex:1}}/>
            </View>
        </View>
    )
}
export default SearchCompany