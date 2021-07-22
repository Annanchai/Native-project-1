import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { themeColors, sc, globalFonts } from '../../styles/global-styles';
import { ButtonType1 } from '../../components/buttons';
import { WorkoutCompleteBadge } from '../../assets/svgs/svg-graphics';

export const WorkoutCompleteModal = () => {
    return(
        <Modal transparent={true} visible>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.headingContainer}>
                        <FontAwesome name="check-circle" {...checkIconStyling} />
                        <Text style={styles.heading}>Workout Complete</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                        <Text style={styles.subHeading}>GREAT JOB</Text>
                        <WorkoutCompleteBadge />
                        <Text style={styles.subHeading}>You Have Completed{'\n'}Your Today's Workout</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View>
                        <ButtonType1 styling={styles.button} text={'CONTINUE EDITING'} arrow={false} textStyling={styles.buttonText} />
                        <ButtonType1 styling={styles.button} text={'WORKOUT DONE'} arrow={false} textStyling={styles.buttonText} />
                    </View>
                </View>

            </View>
            
        </Modal>
            
        
    )
}

const checkIconStyling = {
    color:themeColors.secondary2,
    size:22*sc
}

const styles = StyleSheet.create({
    overlay:{
        width:'100%',
        height: '100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },

    modalContainer:{
        width:'90%',
        backgroundColor:themeColors.secondary2,
        paddingBottom:20*sc
    },

    headingContainer:{
        flexDirection:'row',
        backgroundColor: themeColors.primary1,
        justifyContent:'center',
        alignItems:'center',
        height:30*sc,
    },

    heading:{
        fontFamily:globalFonts.primaryBold,
        color:themeColors.secondary2,
        marginLeft:10*sc
    },

    subHeading:{
        fontFamily:globalFonts.primaryBold,
        color:themeColors.tertiary1,
        marginVertical:10*sc,
        letterSpacing:1*sc,
        fontSize:16*sc,
        lineHeight:23*sc
    },

    badgeContainer:{
        alignItems:'center',
        marginVertical:10*sc
    },

    line:{
        width:'100%',
        height:5*sc,
        backgroundColor:themeColors.primary2,
        marginBottom:15*sc
    },

    button:{
        marginHorizontal:75*sc,
        marginVertical:10*sc
    },

    buttonText:{
        fontSize:15*sc
    },
})