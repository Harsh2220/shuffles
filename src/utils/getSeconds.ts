import { DCABuyTimings } from "../types/DCA";

export default function getSeconds(seconds: number, from: DCABuyTimings) {
    switch (from) {
        case DCABuyTimings.MINUTE:
            return seconds * 60
        case DCABuyTimings.HOUR:
            return seconds * 60 * 60
        case DCABuyTimings.DAY:
            return seconds * 60 * 60 * 24
        case DCABuyTimings.WEEK:
            return seconds * 60 * 60 * 24 * 7
        case DCABuyTimings.MONTH:
            return seconds * 60 * 60 * 24 * 30
        default:
            return seconds
    }
}
