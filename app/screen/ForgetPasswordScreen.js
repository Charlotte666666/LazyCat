import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

export default class ForgetPasswordView extends Component {
    static defaultProps = {
        userName:'',
        phoneNumber:null
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#409EFF"
        },
        headerTitle:'找回密码',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render () {
        return (
            <Text>这是忘记密码页面</Text>
        )
    }
}
