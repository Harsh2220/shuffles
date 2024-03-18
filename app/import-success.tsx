import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/src/components/UI/Button';
import { Heading } from '@/src/components/UI/Heading';
import { Paragraph } from '@/src/components/UI/Paragraph';

export default function ImportSuccessScreen() {
    const walletAddress = '0x05ab...96ce';
    const balance = '0.00 ETH';

    return (
        <View style={styles.container}>
            <Heading style={styles.headerText}>Import Successfull</Heading>
            <Paragraph style={styles.subHeaderText}>
                Your Wallet was imported
            </Paragraph>

            <LinearGradient
                colors={['#8357FF', '#7F7FD5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                <Heading style={styles.walletAddress}>{walletAddress}</Heading>
              <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
              >
              <Paragraph style={styles.label}>My Wallet</Paragraph>
                <Paragraph style={styles.balance}>{balance}</Paragraph>
              </View>
            </LinearGradient>

            <Paragraph style={styles.disclaimerText}>
                Your keys are stored securely within your phone.{'\n'}
                we don't store or share your keys anywhere else.
            </Paragraph>

            <Button onPress={
                () => {
                }
            }>View Wallet</Button>
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
    card: {
        borderRadius: 20,
        padding: 20,
        height: 200,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    walletAddress: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    balance: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disclaimerText: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#8357FF',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
