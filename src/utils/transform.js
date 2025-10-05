export const transformNavToChartData = (navData) => {
	return navData.map((item, idx) => ({
		date: item.date,
		focused: ((item.nav / navData[0].nav) * 100).toFixed(2),
		nifty: (100 + idx * 0.8).toFixed(2),
		diff: ((item.nav / navData[0].nav) * 100 - (100 + idx * 0.8)).toFixed(2),
	}));
};