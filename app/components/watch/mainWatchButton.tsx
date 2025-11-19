import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { makeStyles } from './watchButtonStyles.styles';

const MainWatchButton: React.FC = () => {
    const styles = makeStyles();
    return (
        <TouchableOpacity style={styles.watchButton}>
                              <Text style={styles.watchText}>Watch Now</Text>
        </TouchableOpacity>
    )
}

export default MainWatchButton;