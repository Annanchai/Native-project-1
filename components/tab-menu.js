import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { sc, globalFonts, globalFontSize, themeColors } from '../styles/global-styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react/cjs/react.development';
import { MyWorkouts } from '../screens/modal/my-workouts';
import { BodyCalendarCurrent } from '../screens/modal/body-calender-current';



export const TabMenu = () =>{
    const [visible, setvisible] = useState(false);
    return(
        <View>
            <View style={styles.tabContainer}>
                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={() => setvisible(true)} >
                        <View style={styles.menuContainer}>
                            <FontAwesome5 name="calendar-alt" {...menuIconStyling} />
                            <Text style={styles.menuHeading}>Body Calendar</Text>
                        </View>
                    </TouchableOpacity>
                    
                    
                </View>
                <View style={styles.menuContainer}>
                    <FontAwesome5 name="shopping-bag" {...menuIconStyling} />
                    <Text style={styles.menuHeading}>Store</Text>
                </View>
                <View style={styles.menuContainer}>
                    <FontAwesome5 name="dumbbell" {...menuIconStyling} size={23*sc} />
                    <Text style={styles.menuHeading}>My Workouts</Text>
                </View>
            </View>
            
        <BodyCalendarCurrent visible={visible} closeCalendar={false} />
        </View>
    )
}

const menuIconStyling = {
    color: themeColors.tertiary1,
    size: 25*sc
}

const styles = StyleSheet.create({
    tabContainer:{
        paddingVertical:10*sc,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },

    menuContainer:{
        alignItems:'center',
        justifyContent:'center',
    },

    menuHeading:{
        paddingTop:5,
        fontSize:globalFontSize.content,
        fontFamily:globalFonts.primaryMedium,
    },

})