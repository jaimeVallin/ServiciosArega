import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles= StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight:theme.fontWeights.bold,
        color: 'black',
        fontSize:17
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeader,
        color: 'black'
    },
    colorPrimary:{
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.colorSecondary
    },
    textAlingCenter: {
        textAlign:'center'
    }

})

export default function StyledText ({children, aling, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        aling === 'center' && styles.textAlingCenter,
       color === 'primary' && styles.colorPrimary,
       color === 'secondary' && styles.colorSecondary,
       fontSize === 'subHeading' && styles.subHeading,
       fontWeight === 'bold' && styles.bold,
       style
       
    ]
    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}