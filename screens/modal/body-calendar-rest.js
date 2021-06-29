import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { themeColors, sc, globalFonts } from '../../styles/global-styles';
import { BodyCalendar } from '../../components/body-calendar';

export const BodyCalendarRest = () => {
    return (
        <BodyCalendar>
            <View style={styles.container}>
                <View>
                    <Text style={styles.content}>There are no scheduled workouts for the day.</Text>
                </View>
            </View>
        </BodyCalendar>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10*sc,
        paddingTop:20*sc,
        height:100*sc,
        alignItems:'center'
    },

    content:{
        fontFamily:globalFonts.primaryMedium,
        fontSize:13*sc,
        color:themeColors.tertiary1
    },
})