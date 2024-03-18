import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Heading } from '@/src/components/UI/Heading';
import { Paragraph } from '@/src/components/UI/Paragraph';

export default function ImportWalletScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.headerText}>Add an Existing Wallet</Heading>
      <Paragraph style={styles.subHeaderText}>
        Continue using your wallet by importing it.
      </Paragraph>

      <LinearGradient
        colors={['#8357FF', '#7F7FD5']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBox}
      >
      </LinearGradient>

      <TouchableOpacity style={styles.optionButton}>
        <Heading style={styles.optionButtonText}>Secret Recovery Phrase</Heading>
        <Paragraph style={styles.optionButtonSubtext}>
          Import any wallet using a 12-word Secret Recovery Phrase.
        </Paragraph>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Heading style={styles.optionButtonText}>Private Key</Heading>
        <Paragraph style={styles.optionButtonSubtext}>
          Import any wallet using your Private key.
        </Paragraph>
      </TouchableOpacity>

      <Paragraph style={styles.disclaimerText}>
        Your Private info is stored securely within your phone.
        we don't store or share your info anywhere else.
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
  },
  gradientBox: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20, 
    marginBottom: 30,
  },
  optionButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  optionButtonSubtext: {
    fontSize: 14,
    color: 'gray',
  },
  disclaimerText: {
    marginTop: 30,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});
