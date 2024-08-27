function calculateWaterBill() {
    const litresUsed = parseFloat(document.getElementById('litresUsed').value);
    const householdType = document.getElementById('householdType').value;
    let totalAmount = 0;

    const tier1Rate = 15.73;
    const tier2Rate = 22.38;
    const tier3Rate = 31.77;
    const tier4Rate = 69.76;

    let klUsed = litresUsed / 1000;

    if (householdType === 'indigent') {
        if (klUsed <= 10.5) {
            totalAmount = 0; // Free for the first two tiers
        } else if (klUsed <= 35) {
            totalAmount = ((klUsed - 10.5) * tier3Rate); // Charge for tier 3 usage
        } else {
            totalAmount = ((24.5 * tier3Rate) + ((klUsed - 35) * tier4Rate)); // Charge for tier 3 and tier 4 usage
        }
    } else { // Regular households
        if (klUsed <= 6) {
            totalAmount = klUsed * tier1Rate;
        } else if (klUsed <= 10.5) {
            totalAmount = (6 * tier1Rate) + ((klUsed - 6) * tier2Rate);
        } else if (klUsed <= 35) {
            totalAmount = (6 * tier1Rate) + (4.5 * tier2Rate) + ((klUsed - 10.5) * tier3Rate);
        } else {
            totalAmount = (6 * tier1Rate) + (4.5 * tier2Rate) + (24.5 * tier3Rate) + ((klUsed - 35) * tier4Rate);
        }
    }

    document.getElementById('result').innerText = 'The total amount to pay is R' + totalAmount.toFixed(2);
}
