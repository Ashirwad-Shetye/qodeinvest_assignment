export const formatPercentage = (value) => {
	const sign = value >= 0 ? "+" : "";
	return `${sign}${value.toFixed(1)}%`;
};