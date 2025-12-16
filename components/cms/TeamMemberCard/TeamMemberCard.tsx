import React, { useState } from 'react';
import { View, Text, Pressable, Modal, ScrollView } from 'react-native';
import { makeStyles } from './TeamMemberCard.styles';
import { TeamMemberCardProps, DropdownOption } from './TeamMemberCard.types';

interface DropdownProps {
    label: string;
    value: string;
    options: DropdownOption[];
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = makeStyles();

    const selectedOption = options.find((opt) => opt.value === value);
    const displayText = selectedOption?.label || 'Select...';

    return (
        <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownLabel}>{label}</Text>
            <Pressable style={styles.dropdown} onPress={() => setIsOpen(true)}>
                <Text style={styles.dropdownText}>{displayText}</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
            </Pressable>

            <Modal
                visible={isOpen}
                transparent
                animationType="slide"
                onRequestClose={() => setIsOpen(false)}
            >
                <Pressable
                    style={styles.modalOverlay}
                    onPress={() => setIsOpen(false)}
                >
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

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    name,
    role,
    access,
    roleOptions,
    accessOptions,
    onRoleChange,
    onAccessChange,
    onRemove,
}) => {
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Pressable style={styles.removeButton} onPress={onRemove}>
                    <Text style={styles.removeButtonText}>×</Text>
                </Pressable>
            </View>
            <View style={styles.body}>
                <Dropdown
                    label="Role"
                    value={role}
                    options={roleOptions}
                    onChange={onRoleChange}
                />
                <Dropdown
                    label="Access"
                    value={access}
                    options={accessOptions}
                    onChange={onAccessChange}
                />
            </View>
        </View>
    );
};

export default TeamMemberCard;
