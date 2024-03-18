import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/src/components/UI/Button';
import { Paragraph } from '@/src/components/UI/Paragraph';
import { white } from '@/src/constants/color';
import { Heading } from '@/src/components/UI/Heading';

function Word({ index, word }: { index: number; word: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
      }}
    >
      <Paragraph
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: white[200],
          width: 24,
        }}
      >
        {index}
      </Paragraph>
      <TextInput
        style={styles.input}
        value={word}
        placeholder={`${index + 1}`}
      />
    </View>
  );
}


export default function ImportRecoveryPhraseScreen() {
  const [recoveryPhrase, setRecoveryPhrase] = useState(Array(12).fill(''));

  const handlePaste = () => {
  };

  const handleManualEntry = () => {
  };

  const handleImport = () => {
  };

  return (
    <ScrollView style={styles.container}>
      <Heading style={styles.headerText}>Import Wallet</Heading>
      <Paragraph style={styles.subHeaderText}>
        Enter your Secret Recovery Phrase below to import your wallet.
      </Paragraph>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 48,
        }}
      >
        <View
          style={{
            gap: 4,
          }}
        >
          {[...Array(6)].map((el, index) => (
            <Word key={index} index={index + 1} word="open" />
          ))}
        </View>
        <View
          style={{
            gap: 4,
          }}
        >
          {[...Array(6)].map((el, index) => (
            <Word key={index} index={index + 7} word="open" />
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.pasteButton} onPress={handlePaste}>
          <Ionicons name="copy-outline" size={18} color="black" />
          <Heading style={styles.pasteButtonText}>Paste from Clipboard</Heading>
        </TouchableOpacity>
      </View>

      <Paragraph style={styles.disclaimerText}>
        Your keys are stored securely within your phone.{'\n'}
        we don't store or share your keys anywhere else.
      </Paragraph>

      <Button onPress={
        () => {
        }
      }>Import</Button>
    </ScrollView>
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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  inputLabel: {
    width: 20,
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingHorizontal: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
  },
  disclaimerText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  importButton: {
    backgroundColor: '#8357FF',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  importButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
