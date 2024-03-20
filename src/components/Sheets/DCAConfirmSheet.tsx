import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Sheet from '../UI/Sheet';
import { Heading } from '../UI/Heading';
import { Image } from "expo-image";
import { Paragraph } from '../UI/Paragraph';
import { black, white } from '@/src/constants/color';
import Button from '../UI/Button';


const DCAConfirmSheet = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = ['25%', '50%'];
    const { dismiss } = useBottomSheetModal();

    return (

        <View style={styles.contentContainer}>
            <View style={styles.transactionPreview}>
                <Heading style={styles.transactionAmount}>Transaction Preview</Heading>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingTop: 16,
                    }}
                >
                    <View>
                        <Heading style={styles.assetName}>-500 JUP</Heading>
                        <Paragraph
                            style={{
                                fontSize: 12,
                                fontWeight: "600",
                                color: white[200],
                            }}
                        >
                            $700
                        </Paragraph>
                    </View>
                    <Image
                        source={require("../../assets/images/solana.png")}
                        style={{ width: 40, height: 40, borderRadius: 25 }}
                    />
                </View>
                <View
                    style={{
                        borderRadius: 16,
                        backgroundColor: '#EDEFF2',
                        paddingVertical: 12,
                        paddingHorizontal: 18,
                        width: "100%",
                        marginTop: 16,
                        paddingBottom: 18,
                    }}
                >
                    <Heading style={{
                        fontSize: 14,
                        fontWeight: "600",
                        textAlign: "center",
                    }}>DCA Summary</Heading>
                    <View
                        style={{
                            marginTop: 14,
                            gap: 8
                        }}
                    >
                        {[...Array(8)].map((_, index) => (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Paragraph style={{
                                    color: black[200],
                                    fontSize: 12,
                                    fontWeight: "500"
                                }}>Sell Total</Paragraph>
                                <Heading style={{
                                    fontSize: 12,
                                    fontWeight: "700",
                                    color: black[800],
                                }}>500 JUP</Heading>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 16,
                }}>
                    <Button
                        style={{
                            backgroundColor: '#EDEFF2',
                            borderColor: white[800],
                            width: '48%',

                        }}
                        textStyle={{
                            color: black[800],
                        }}
                        size='small'
                        onPress={() => {
                            dismiss();
                        }}>Cancel</Button>

                    <Button
                        style={{
                            width: '48%',

                        }}

                        size='small'
                        onPress={() => {
                            dismiss();
                        }}>Confirm</Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    transactionPreview: {
        paddingHorizontal: 24,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    transactionAmount: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        marginTop: 16
    },
    assetName: {
        fontSize: 20,
        fontWeight: "700",
    },
    assetBalance: {
        fontWeight: "600",
        fontSize: 14,
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
        width: '100%',
        marginVertical: 16,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 8,
    },
    summaryLabel: {
        // Styling for the label
    },
    summaryValue: {
        // Styling for the value
    },
    cancelButton: {
        // Styling for the cancel button
    },
    startButton: {
        // Styling for the start button
    },
});

export default DCAConfirmSheet;
