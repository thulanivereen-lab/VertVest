import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { makeStyles } from './FreeTextInput.styles';
import { FreeTextInputProps, InputType } from './FreeTextInput.types';

const FreeTextInput: React.FC<FreeTextInputProps> = ({
    title,
    placeholder,
    value,
    onChangeText,
    maxLength,
    inputType,
    error,
}) => {
    const styles = makeStyles(inputType, !!error);
    const isDescription = inputType === InputType.DESCRIPTION;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#9B9A97"
                    value={value}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    multiline={isDescription}
                    numberOfLines={isDescription ? 4 : 1}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.errorText}>{error || ''}</Text>
                <Text style={styles.characterCount}>
                    {value.length}/{maxLength}
                </Text>
            </View>
        </View>
    );
};

export default FreeTextInput;
