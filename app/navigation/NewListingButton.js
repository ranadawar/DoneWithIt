import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';

const NewListingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
      <MaterialCommunityIcons name='plus-circle' size={45} color={colors.white} />
    </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:70,
        width:70,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        bottom:35,
        borderWidth:5,
        borderColor:'white'
    }
})