import React from 'react'
import { Text, View } from 'react-native'


const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    // The View tag is sort of like a div tag
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  // position vertically -> justifyContent 
  // position horizontally -> alignItems
  viewStyle: {
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5, //the only prop that applies a shadow apparently
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}


export {Header}