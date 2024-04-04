import useBridgeStore from "@/src/store/bridge";
import React from "react";
import BridgeConfirm from "../Bridge/BridgeConfirm";
import BridgeSuccess from "../Bridge/BridgeSuccess";
import BridgeError from "../Bridge/BridgeError";

export default function BridgeConfirmSheet() {
  const { txHash, error } = useBridgeStore();

  if (txHash) return <BridgeSuccess />;

  if (error) return <BridgeError />;

  return <BridgeConfirm />;
}
