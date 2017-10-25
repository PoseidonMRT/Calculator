import React,{ Component } from 'react'
import Style from './Style'
import {
    View,
    Text,
} from 'react-native'

export default class InputButton extends Component {

    render() {
        return (
            <View style={Style.inputButton}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </View>
        )
    }

}