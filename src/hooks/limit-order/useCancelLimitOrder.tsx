import { useLimitOrderStore } from "@/src/store";
import { limitOrder } from "@/src/utils/connection";

export default async function useCancelLimitOrder() {
    const { owner, orderPubKey } = useLimitOrderStore();

    async function cancelLimitOrder() {
        return await limitOrder.cancelOrder({
            owner: owner,
            orderPubKey: orderPubKey,
        });
    }
    
    return { cancelLimitOrder };
}