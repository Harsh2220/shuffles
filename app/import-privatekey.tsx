import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/src/components/UI/Button';
import { Heading } from '@/src/components/UI/Heading';
import { Paragraph } from '@/src/components/UI/Paragraph';

export default function ImportPrivateKeyScreen() {
  const handlePaste = () => {
  };

  const handleImport = () => {
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.headerText}>Import Wallet</Heading>
      <Paragraph style={styles.subHeaderText}>
        Enter your Private key below to import your wallet.
      </Paragraph>

      <LinearGradient
        colors={['#8357FF', '#7F7FD5']}
        style={styles.gradientBox}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <TouchableOpacity style={styles.pasteButton} onPress={handlePaste}>
            <Ionicons name="copy-outline" size={18} color="black" />
            <Heading style={styles.pasteButtonText}>Paste from Clipboard</Heading>
          </TouchableOpacity>
        </View>

      </LinearGradient>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.manualEntryButton}>
          <Ionicons name="keypad" size={15} color="white" />
          <Heading style={styles.manualEntryButtonText}>Enter Manually</Heading>
        </TouchableOpacity>
      </View>
      <View>
        <Paragraph style={styles.disclaimerText}>
          Your keys are stored securely within your phone.{'\n'}
          we don't store or share your keys anywhere else.
        </Paragraph>

        <Button onPress={
          () => {
          }
        }>Import</Button>
      </View>
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
    marginBottom: 20,
  },
  gradientBox: {
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    height: 200,
  },
  inputField: {
    width: '100%',
    minHeight: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 10,
    color: 'white',
    marginBottom: 10,
  },
  pasteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 200,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  pasteButtonText: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
  },
  manualEntryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 20,
    width: 170,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  manualEntryButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: '600',
  },
  disclaimerText: {
    marginTop: 30,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  importButton: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#8357FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  importButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
