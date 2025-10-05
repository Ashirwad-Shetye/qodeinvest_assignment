

const Dashboard = () => {
	const [activePage, setActivePage] = useState("home");
	const [dateRange, setDateRange] = useState({
		from: "2019-01-01",
		to: "2024-04-24",
	});

	const chartData = useMemo(() => transformNavToChartData(NAV_DATA), []);

	const renderPage = () => {
		switch (activePage) {
			case "home":
				return <HomePage />;
			case "portfolios":
				return (
					<PortfoliosPage
						chartData={chartData}
						dateRange={dateRange}
						onDateRangeChange={setDateRange}
					/>
				);
			default:
				return <HomePage />;
		}
	};

	return (
        <div className='flex-1 overflow-auto'>{renderPage()}</div>
	);
};

export default Dashboard;
