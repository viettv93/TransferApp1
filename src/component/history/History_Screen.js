import React from "react"
import { View, Text } from "react-native"
import fonts from '../../utils/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DonNhap from "./DonNhap";



const Tab = createMaterialTopTabNavigator();
const TopTab1 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>

    </View>
  )
}
const TopTab2 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>

    </View>
  )
}


function History() {
  return (
    <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
      <View style={{ width: "100%", height: 50, backgroundColor: fonts.red, flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 15 }}>
        <View style={{ flex: 0.1 }} />
        <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white, fontWeight: '700' }}>Lịch sử</Text>
        <Icon name="search" color={fonts.white} size={20} />
      </View>
      <View style={{ backgroundColor: fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15 }}>
        <View style={{ backgroundColor: fonts.white, flexDirection: 'row' }}>
          <Icon name="crop-square" color={fonts.gray} size={18} />
          <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.blue2, fontWeight: '700' }}>1 Đơn hàng</Text>
        </View>
        <View style={{ flex: 1 }} />
        <View style={{ backgroundColor: fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="calendar-today" color={fonts.gray} size={18} />
          <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.gray, fontWeight: '700' }}>  07/10 - 21/10</Text>
        </View>

      </View>
      <View style={{ backgroundColor: fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:2, flex:1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Home@" component={DonNhap} />
        <Tab.Screen name="St" component={TopTab2} />
      </Tab.Navigator>
      </View>
     
    </View>



  );
}


// const History = () => {



//     return (
//         <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
//             <View style={{ width: "100%", height: 50, backgroundColor: fonts.red, flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 15 }}>
//                 <View style={{ flex: 0.1 }} />
//                 <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white, fontWeight: '700' }}>Lịch sử</Text>
//                 <Icon name="search" color={fonts.white} size={20} />
//             </View>
//             <View style={{ backgroundColor: fonts.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:15 }}>
//                 <View style={{ backgroundColor: fonts.white, flexDirection: 'row' }}>
//                     <Icon name="crop-square" color={fonts.gray} size={18}/>
//                     <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.blue2, fontWeight: '700'}}>1 Đơn hàng</Text>
//                 </View>
//                 <View style={{flex:1}}/>
//                 <View style={{ backgroundColor: fonts.white, flexDirection: 'row' ,alignItems: 'center', justifyContent: 'center' }}>
//                     <Icon name="calendar-today" color={fonts.gray} size={18}/>
//                     <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.gray, fontWeight: '700'}}>  07/10 - 21/10</Text>
//                 </View>

//             </View>
//         </View>
//     )
// }
export default History