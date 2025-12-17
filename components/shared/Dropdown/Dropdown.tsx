import React, { useState } from 'react';
import { View, Text, Pressable, Modal, ScrollView } from 'react-native';
import { makeStyles } from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
    label,
    placeholder = 'Select...',
    value,
    options,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = makeStyles();

    const selectedOption = options.find((opt) => opt.value === value);
    const displayText = selectedOption?.label;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Pressable style={styles.dropdown} onPress={() => setIsOpen(true)}>
                <Text style={displayText ? styles.dropdownText : styles.dropdownPlaceholder}>
                    {displayText || placeholder}
                </Text>
                <Text style={styles.dropdownArrow}>▼</Text>
            </Pressable>

            <Modal
                visible={isOpen}
                transparent
                animationType="slide"
                onRequestClose={() => setIsOpen(false)}
            >
                <Pressable style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{label}</Text>
                            <Pressable onPress={() => setIsOpen(false)}>
                                <Text style={styles.modalCloseText}>Done</Text>
                            </Pressable>
                        </View>
                        <ScrollView>
                            {options.map((option) => (
                                <Pressable
                                    key={option.value}
                                    style={[
                                        styles.optionItem,
                                        option.value === value && styles.optionItemSelected,
                                    ]}
                                    onPress={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            option.value === value && styles.optionTextSelected,
                                        ]}
                                    >
                                        {option.label}
                                    </Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

export default Dropdown;
