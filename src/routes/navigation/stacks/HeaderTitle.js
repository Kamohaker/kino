import React from 'react'
import { StyleSheet, Image,Text } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    color: '#dc2626',
    fontSize: 24,
  },
})

const HeaderTitle = () => <Text style={styles.logo}>Cinema Zone</Text>

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
