import { IconSymbol } from '@/app/components/ui/icon-symbol';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { makeStyles } from './mainInvestButton.styles';


const styles = makeStyles();
const MainInvestButton: React.FC = () => {
    return (
        <TouchableOpacity style={styles.investButton}>
            <IconSymbol size={16} color="#808080" name="arrow.up.right" />
            <Text style={styles.investText}>Invest $4.50</Text>
        </TouchableOpacity>
    )
}

export default MainInvestButton;