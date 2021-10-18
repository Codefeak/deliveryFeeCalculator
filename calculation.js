export function calculate({ cartValue, time, distance, amount }) {
	let cartValueWithSurcharge;
	const price = 2;

	if (cartValue >= 100) {
		return 0;
	}

	if (distance <= 1000) {
		return addSurcharges(price) >= 15 ? 15 : addSurcharges(price);
	}
	if (distance > 1000) {
		const priceWithDistance = checkDistance(distance - 1000, price);
		const priceAfterSurcharges = addSurcharges(priceWithDistance);
		if (priceAfterSurcharges > 15) {
			return 15;
		}
		return priceAfterSurcharges;
	}

}

function checkDistance(d, p) {
    if (d <= 500) {
        return p + 1;
    }
    return checkDistance(d - 500, p + 1);
}

function exceedItemSurcharge(amount) {
    if (amount >= 5) {
        const surcharge = (amount - 4) * 0.5;
        return amount + surcharge;
    }
    return 0;
}

function valueSurcharge(cartValue) {
    if (cartValue < 10) {
        const surchage = 10 - cartValue;
        cartValueWithSurcharge = cartValue + surchage;
        return cartValueWithSurcharge;
    }
    return cartValue;
}

function addSurcharges(p) {
    const priceWithSurcharge =
        p + exceedItemSurcharge(amount) + valueSurcharge(cartValue);
    return priceWithSurcharge;
}