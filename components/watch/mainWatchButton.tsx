import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { makeStyles } from './watchButtonStyles.styles';

interface MainWatchButtonProps {
  onPress?: () => void;
}

const MainWatchButton: React.FC<MainWatchButtonProps> = ({ onPress }) => {
    const styles = makeStyles();
    return (
        <TouchableOpacity style={styles.watchButton} onPress={onPress}>
                              <Text style={styles.watchText}>Watch Now</Text>
        </TouchableOpacity>
    )
}

export default MainWatchButton;