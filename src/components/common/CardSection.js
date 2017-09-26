import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  return (
    // can pass in an array as the style. The 2nd arg in the array is passed in as a prop
    // the 2nd arg will replace any corresponding style prop from the 1st arg
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', // horizontal layout; 'column' is vertical
    borderColor: '#ddd',
    position: 'relative'
  }
}

export {CardSection}