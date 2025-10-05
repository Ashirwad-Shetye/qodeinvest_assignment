export default async function handler(req, res) {
	try {
		const SHEET_ID = "1ePbKDvi7pLkLWoiSFYaIPIr6X4MU_jIr";
		const GID = "320586506";
		const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

		const response = await fetch(csvUrl);

		if (!response.ok) {
			throw new Error("Failed to fetch sheet data");
		}

		const csvText = await response.text();

		const rows = csvText.split("\n").slice(6);
		const navData = rows
			.filter((row) => row.trim())
			.map((row) => {
				const [date, nav] = row.split(",");
				return {
					date: date?.trim(),
					nav: parseFloat(nav?.trim()),
				};
			})
			.filter((item) => item.date && !isNaN(item.nav));

		res
			.status(200)
			.json({ data: navData, lastUpdated: new Date().toISOString() });
	} catch (error) {
		console.error("Error fetching sheet data:", error);
		res.status(500).json({ error: "Failed to fetch data" });
	}
}
