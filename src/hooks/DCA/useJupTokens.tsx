import { JupTokens } from "@/src/types/wallet";
import { useState } from "react";

export default function useJupTokens() {
    const [jupTokens, setJupTokens] = useState<JupTokens[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function getJupTokens() {
       try {
        setIsLoading(true)
        const response = await fetch('https://token.jup.ag/strict');
        const data = await response.json();
        console.log(data)
        setJupTokens(data);
       } catch (error) {
        console.log(error)
       } finally {
        setIsLoading(false);
       }
    }

    return { getJupTokens, isLoading, jupTokens };
}