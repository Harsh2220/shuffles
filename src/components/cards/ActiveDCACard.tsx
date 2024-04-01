import ChevronDown from "@/src/assets/Icons/ChevronDown";
import ForwardArrow from "@/src/assets/Icons/ForwardArrow";
import { Heading } from "@/src/components/UI/Heading";
import { CHAINS } from "@/src/constants/Chains";
import { black, white } from "@/src/constants/color";
import { Image } from "expo-image";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Paragraph } from "../UI/Paragraph";
import Button from "../UI/Button";
import ChevronUp from "@/src/assets/Icons/ChevronUp";

export default function ActiveDCACard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <View
        style={{
          borderRadius: 32,
          marginTop: 8,
          borderWidth: 1,
          borderColor: white[500],
          backgroundColor: white[700],
          padding: 4,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: white[800],
              borderWidth: 1,
              borderColor: white[500],
              borderRadius: 36,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Image
                  source={{
                    uri: CHAINS[0].image,
                  }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  contentFit="cover"
                />
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  Jupiter
                </Heading>
              </View>
              <ForwardArrow width={16} height={16} color={"black"} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Image
                  source={{
                    uri: CHAINS[0].image,
                  }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  contentFit="cover"
                />
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  Jupiter
                </Heading>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Heading
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                30 JUP
              </Heading>
              {!isOpen ? (
                <ChevronDown width={24} height={24} color="black" />
              ) : (
                <ChevronUp width={24} height={24} color="black" />
              )}
            </View>
          </View>
        </TouchableOpacity>
        {isOpen && (
          <View
            style={{
              marginTop: 12,
              gap: 12,
            }}
          >
            <View
              style={{
                gap: 12,
                paddingHorizontal: 14,
              }}
            >
              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: "#EDEFF2",
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  width: "100%",
                  paddingBottom: 18,
                }}
              >
                <Heading
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  DCA Summary
                </Heading>
                <View
                  style={{
                    marginTop: 14,
                    gap: 8,
                  }}
                >
                  {[...Array(3)].map((el, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Paragraph
                        style={{
                          color: black[200],
                          fontSize: 12,
                          fontWeight: "500",
                        }}
                      >
                        DCA JUP balance
                      </Paragraph>
                      <Heading
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          color: black[800],
                        }}
                      >
                        30 JUP
                      </Heading>
                    </View>
                  ))}
                </View>
              </View>
              <View
                style={{
                  gap: 8,
                }}
              >
                {[...Array(3)].map((el, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Paragraph
                      style={{
                        color: black[200],
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      DCA JUP balance
                    </Paragraph>
                    <Heading
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: black[800],
                      }}
                    >
                      30 JUP
                    </Heading>
                  </View>
                ))}
              </View>
            </View>
            <Button
              size="small"
              onPress={() => {}}
              style={{
                width: "100%",
              }}
            >
              Close and Withdraw
            </Button>
          </View>
        )}
      </View>
    </>
  );
}
