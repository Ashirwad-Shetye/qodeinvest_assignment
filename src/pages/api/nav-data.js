export default async function handler(req, res) {
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
	const GID = process.env.NEXT_PUBLIC_SHEET_GID;
	try {
		const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

		const response = await fetch(csvUrl);

		if (!response.ok) {
			throw new Error("Failed to fetch sheet data");
		}

		const csvText = await response.text();

		const lines = csvText.split("\n");
		const dataRows = lines.slice(6);

		const navData = [];

		for (const row of dataRows) {
			if (!row.trim()) continue;

			const columns = row.split(",");
			const date = columns[0]?.trim();
			const navValue = columns[1]?.trim();

			if (date && navValue && !isNaN(parseFloat(navValue))) {
				navData.push({
					date: date,
					nav: parseFloat(navValue),
				});
			}
		}

		navData.sort((a, b) => {
			const [dayA, monthA, yearA] = a.date.split("-");
			const [dayB, monthB, yearB] = b.date.split("-");
			const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
			const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
			return dateA - dateB;
		});

		res.status(200).json({
			data: navData,
			lastUpdated: new Date().toISOString(),
			count: navData.length,
		});
	} catch (error) {
		console.error("Error fetching sheet data:", error);
		res.status(500).json({
			error: "Failed to fetch data",
			message: error.message,
		});
	}
}
