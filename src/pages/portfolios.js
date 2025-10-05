import { useState, useMemo } from "react";
import useSWR from "swr";
import { RETURNS_DATA } from "@/constants/data";
import { Icons } from "@/components/ui/icons";
import ReturnsTable from "@/components/returns-table/returns-table";
import EquityCurveSection from "@/components/charts/equity-curve-section";
import { Button } from "@/components/ui/button";
import { transformNavToChartData } from "@/utils/transform";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PortfoliosPage() {
    const initialDateRange = {
			from: "2019-01-01",
			to: "2024-04-24",
		};
	const [dateRange, setDateRange] = useState(initialDateRange);

    const { data, error, isLoading, mutate } = useSWR("/api/nav-data", fetcher, {
		refreshInterval: 60000,
		revalidateOnFocus: true,
	});

    const chartData = useMemo(() => {
		if (!data?.data) return [];
        return transformNavToChartData(data.data);
    }, [data]);

    const filteredChartData = useMemo(() => {
        if (!chartData || chartData.length === 0) return [];
        if (!dateRange?.from || !dateRange?.to) return chartData;

        const from = new Date(dateRange.from);
        const to = new Date(dateRange.to);

        return chartData.filter((d) => {
            const [day, month, year] = d.date.split("-");
            const iso = `${year}-${month}-${day}`;
            const current = new Date(iso);
            return current >= from && current <= to;
        });
    }, [chartData, dateRange]);

	if (isLoading) {
		return (
			<div className='w-full flex-1 mx-auto p-8'>
				<div className='flex items-center justify-center h-96'>
					<div className='flex flex-col items-center gap-4'>
						<Icons.RefreshCw className='w-8 h-8 animate-spin text-teal-600' />
						<p className='text-gray-600'>Loading portfolio data...</p>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='max-w-7xl mx-auto p-8'>
				<div
					variant='destructive'
					className='mb-6'
				>
					<Icons.AlertCircle className='h-4 w-4' />
					<p>
						Failed to load portfolio data: {error.message}
					</p>
				</div>
				<Button
					onClick={() => mutate()}
					variant='outline'
				>
					<Icons.RefreshCw className='w-4 h-4 mr-2' />
					Retry
				</Button>
			</div>
		);
    }
    
	return (
		<div className='max-w-7xl mx-auto p-8 animate-in fade-in slide-in-from-right-4 bg-white duration-700'>
			<div className='flex items-center justify-between mb-8'>
				<div>
					<h1 className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
						Focused Portfolio
					</h1>
					{data?.lastUpdated && (
						<p className='text-sm text-gray-500 mt-1'>
							Last updated: {new Date(data.lastUpdated).toLocaleString()}
						</p>
					)}
				</div>
				<div className='flex items-center gap-4'>
					<Button
						onClick={() => mutate()}
						variant={"secondary"}
						size='sm'
						className='hover:bg-teal-50 hover:text-teal-700 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer'
					>
						<Icons.RefreshCw className='w-4 h-4 mr-2' />
						Refresh
					</Button>
					<div className='flex items-center gap-2 text-sm'>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
						<span className='text-gray-600'>Live Data</span>
					</div>
				</div>
			</div>

			<div className='mb-5'>
				<div className='flex items-center justify-between mb-4 relative'>
					<h2 className='text-xl font-semibold text-gray-900'>
						Trailing Returns
					</h2>
					<Button
						variant='default'
						size='sm'
						className='hover:bg-teal-50 hover:border-teal-300 bg-transparent cursor-pointer text-teal-700 transition-all duration-300'
					>
						<Icons.Download className='w-4 h-4' />
					</Button>
				</div>
				<ReturnsTable data={RETURNS_DATA} />
			</div>

			{filteredChartData.length > 0 && (
				<EquityCurveSection
					chartData={filteredChartData}
					dateRange={dateRange}
					onDateRangeChange={setDateRange}
					initialDateRange={initialDateRange}
					setDateRange={setDateRange}
				/>
			)}
		</div>
	);
}
