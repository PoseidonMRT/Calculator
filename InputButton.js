import React,{ Component } from 'react'
import Style from './Style'
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'

export default class InputButton extends Component {

    render() {
        return (
            <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

}