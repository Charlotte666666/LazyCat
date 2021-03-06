/**
 * LazyCat
 * Created by hicoldcat
 * Created on 2017/11/6  22:22
 * https://github.com/hicoldcat/LazyCat.git
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {SafeAreaView,StackNavigator,DrawerNavigator} from 'react-navigation';
import {StackRouteConfigs, StackNavigatorConfig, DrawerRouteConfigs, DrawerNavigatorConfig, LoginRouteConfigs, LoginNavigatorConfig} from './config/routeConfig';
import {
    Provider,
    observer
} from 'mobx-react';

import RootStore from './store/RootStore';

const LoginStack = StackNavigator(LoginRouteConfigs, LoginNavigatorConfig);
const RootStack = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfig)

@observer
export default class App extends Component {
    render() {
        if (RootStore.isLogin) {
            return (
                <Provider {...RootStore}>
                    <RootStack/>
                </Provider>
            )
        } else {
            return (
                <Provider {...RootStore}>
                    <LoginStack/>
                </Provider>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});
