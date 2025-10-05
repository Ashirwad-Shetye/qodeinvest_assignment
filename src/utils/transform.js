export const transformNavToChartData = (navData) => {
	if (!navData || navData.length === 0) return [];

	return navData.map((item, idx) => {
		return {
			date: item.date,
			rawNav: item.nav,
		};
	});
};
