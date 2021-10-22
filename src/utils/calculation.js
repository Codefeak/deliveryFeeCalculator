import moment from 'moment'; 

export function calculate({ cartValue, time, distance, amount }) {
    const isRushHour = checkRushHour(time);
	let cartValueWithSurcharge;
	const price = 2;

	if (cartValue >= 100) {
		return 0;
	}

	if (distance <= 1000) {
		return addSurcharges(price, amount, cartValue, isRushHour) >= 15 ? 15 : addSurcharges(price, amount, cartValue, isRushHour);
	}
	if (distance > 1000) {
		const priceWithDistance = checkDistance(distance - 1000, price);
		const priceAfterSurcharges = addSurcharges(priceWithDistance, amount, cartValue, isRushHour);
		if (priceAfterSurcharges > 15) {
			return 15;
		}
		return priceAfterSurcharges;
	}

}

export function checkDistance(d, p) {
    if (d <= 500) {
        return p + 1;
    }
    return checkDistance(d - 500, p + 1);
}

export function exceedItemSurcharge(amount) {
    if (amount >= 5) {
        const surcharge = (amount - 4) * 0.5;
        return surcharge;
    }
    return 0;
}

export function withValueSurcharge(cartValue) {
    if (cartValue < 10) {
        const surchage = 10 - cartValue;
        return surchage;
    }
    return 0;
}

export function addSurcharges(p, amount, cartValue, isRushHour) {
    const priceWithSurcharge = p + exceedItemSurcharge(amount) + withValueSurcharge(cartValue);
    return isRushHour ? rushHourSurcharge(priceWithSurcharge) : priceWithSurcharge;
}

export function checkRushHour(time) {
    const timeUTC = moment.utc(Number(moment(time)));
    const hourUTC = timeUTC.hours();
    const dayUTC = timeUTC.day();
    if (dayUTC === 5 && hourUTC >= 15 && hourUTC <19) {
        return true;
    }
    return false;
}

export function rushHourSurcharge(arg) {
    return arg * 1.1;
}