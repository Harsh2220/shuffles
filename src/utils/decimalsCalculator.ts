
export default function calculateDecimals(zeros: number, amount: number) {
    console.log("zeros: ", zeros);
    let binaryArray = Array(zeros + 1).fill(0);

    if (amount >= 0) {
        binaryArray[0] = amount;
    } else {
        console.log("amount out of bounds.");
    }

    let result = binaryArray.join('');

    return result;
}