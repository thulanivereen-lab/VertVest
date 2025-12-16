import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { makeStyles } from './AddTeamMember.styles';
import { AddTeamMemberProps } from './AddTeamMember.types';

const AddTeamMember: React.FC<AddTeamMemberProps> = ({
    title,
    subtitle,
    placeholder,
    onAdd,
}) => {
    const [inputValue, setInputValue] = useState('');
    const isDisabled = !inputValue.trim();
    const styles = makeStyles(isDisabled);

    const handleAdd = useCallback(() => {
        const trimmedValue = inputValue.trim();
        if (!trimmedValue) return;

        onAdd(trimmedValue);
        setInputValue('');
    }, [inputValue, onAdd]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>

            <View style={styles.inputRow}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        placeholderTextColor="#9B9A97"
                        value={inputValue}
                        onChangeText={setInputValue}
                        onSubmitEditing={handleAdd}
                        returnKeyType="done"
                    />
                </View>
                <Pressable
                    style={({ pressed }) => [
                        styles.addButton,
                        pressed && !isDisabled && styles.addButtonPressed,
                    ]}
                    onPress={handleAdd}
                    disabled={isDisabled}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default AddTeamMember;
