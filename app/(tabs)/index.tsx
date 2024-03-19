import Button from "@/src/components/UI/Button";
import { useRouter } from "expo-router";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <Button
      onPress={() => {
        router.push("/import-success");
      }}
    >
      GO
    </Button>
  );
}
