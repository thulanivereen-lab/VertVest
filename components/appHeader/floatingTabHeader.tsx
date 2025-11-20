import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const tabs = ['Home', 'Discovery', 'Portfolio'];

interface FloatingTabHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const FloatingTabHeader: React.FC<FloatingTabHeaderProps> = ({
    activeTab,
    setActiveTab,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={styles.tab}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
          {activeTab === tab && <View style={styles.underline} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#aaa',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: 24,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
});

export default FloatingTabHeader;
