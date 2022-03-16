import React, { useState, Fragment, useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarProps } from 'react-native-calendars';
import fonts from '../../utils/index'
import Icon from 'react-native-vector-icons/MaterialIcons'


const INITIAL_DATE = '2022-03-15';

const ChoseDate = () => {
    const [selected, setSelected] = useState(INITIAL_DATE);

    const onDayPress = useCallback(day => {
        setSelected(day.dateString);
    }, []);

    const marked = useMemo(() => {
        return {
            [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'orange',
                selectedTextColor: 'red'
            }
        };
    }, [selected]);

    const renderCalendarWithSelectableDate = () => {
        return (
            <Fragment>
                <Calendar
                    enableSwipeMonths
                    current={INITIAL_DATE}
                    style={{ margin: 10 }}
                    onDayPress={onDayPress}
                    markedDates={marked}
                />
            </Fragment>
        );
    }
    const renderExamples = () => {
        return (
            <Fragment>
                {renderCalendarWithSelectableDate()}
            </Fragment>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: fonts.default_color }}>
            <View style={{ width: "100%", height: 50, backgroundColor: fonts.red, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <Icon name='arrow-back-ios' color={fonts.white} size={20} />
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white }}>Chọn ngày thực hiện</Text>
                <Text style={{ fontFamily: fonts.fontSF, fontSize: fonts.fontMedium, color: fonts.white, fontWeight: '700' }}
                    onPress={() => { }}
                >Xong</Text>
            </View>
            <View style={{ backgroundColor: fonts.white, borderRadius: 15 , margin:10}}>
                
                    {renderExamples()}
                
            </View>

        </View>
    )
};
export default ChoseDate