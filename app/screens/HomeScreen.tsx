import React from 'react';
import { View } from 'react-native';
import FloatingTabHeader from '../components/appHeader/floatingTabHeader';
import SpotlightShow from '../components/home/SpotlightShow';
import { makeStyles } from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
    const styles = makeStyles();
    return (
        <View style={styles.homeContainer}>
            <SpotlightShow />
            <View style={styles.floatingHeaderContainer}>
                <FloatingTabHeader activeTab="Home" setActiveTab={() => {}} />
            </View>
        </View>
    )
};

export default HomeScreen;