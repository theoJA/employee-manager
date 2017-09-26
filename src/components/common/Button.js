import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  return (
    // one of the 4 button feedback from react native doc
    <TouchableOpacity 
      onPress={props.onPress} 
      style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity> 
  )
} 

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, //expand to fill as much content as it can
    alignSelf: 'stretch', //position the item itself to flexbox rules, as opposed to aligning stuff inside it
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export {Button}