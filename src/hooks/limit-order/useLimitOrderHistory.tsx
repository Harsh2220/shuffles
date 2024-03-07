import { useLimitOrderStore } from "@/src/store";
import { limitOrder } from "@/src/utils/connection";
import { ownerFilter } from "@jup-ag/limit-order-sdk";

export default async function useLimitOrderHistory() {

    const { owner } = useLimitOrderStore();

    async function openOrders() {
        return await limitOrder.getOrders([ownerFilter(owner)]);
    }

    async function orderHistory() {
        return await limitOrder.getOrderHistory({
            wallet: owner.toString(),
            take: 20,
        });
    }

    async function orderHistoryCount() {
        return await limitOrder.getOrderHistoryCount({
            wallet: owner.toString(),
        });
    }

    async function tradeHistory() {
        return await limitOrder.getTradeHistory({
            wallet: owner.toString(),
            take: 20,
        });
    }

    async function tradeHistoryCount() {
        return await limitOrder.getTradeHistoryCount({
            wallet: owner.toString(),
        });
    }

    return { openOrders, orderHistory, orderHistoryCount, tradeHistory, tradeHistoryCount };
}