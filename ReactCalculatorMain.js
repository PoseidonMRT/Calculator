import React, { Component } from 'react';
import Style from './Style'
import InputButton from './InputButton'
import {
    Text,
    View,
} from 'react-native';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class ReactCalculator extends Component {
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                    </View>
            </View>
        )
    }

    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0
        }
    }

    /**
     * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
     */
    _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input} onPress={this._onInputButtonPressed.bind(this, input)} key={r + "-" + i} />
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPressed(input){
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input);
            case 'string':
                return this._handleStringInput(input);
        }
    }

    _handleNumberInput(input){
        let inputValue = (this.state.inputValue * 10) + input;

        this.setState({
            inputValue: inputValue
        })
    }

    _handleStringInput(input){
        switch (input){
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: input,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
        }
    }
}