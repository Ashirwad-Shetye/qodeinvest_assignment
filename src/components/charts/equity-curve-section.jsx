import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import DateInput from "../Input/date-input";
import EquityChart from "./equity-chart";
import DifferenceChart from "./difference-chart";

const EquityCurveSection = ({ chartData, dateRange, onDateRangeChange }) => {
	return (
		<Card className='overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 border-0 shadow-none'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<div>
						<CardTitle className='text-xl mb-1'>Equity curve</CardTitle>
						<CardDescription className='flex items-center gap-2'>
							<span className='inline-flex items-center gap-1.5'>
								<span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
								Live since 2019-01-01
							</span>
						</CardDescription>
					</div>
					<div className='flex gap-4'>
						<DateInput
							label='From'
							value={dateRange.from}
							onChange={(value) =>
								onDateRangeChange({ ...dateRange, from: value })
							}
						/>
						<DateInput
							label='To'
							value={dateRange.to}
							onChange={(value) =>
								onDateRangeChange({ ...dateRange, to: value })
							}
						/>
					</div>
				</div>
			</CardHeader>

			<CardContent className='pt-6'>
				<div className='h-96 mb-4'>
					<EquityChart data={chartData} />
				</div>

				<div className='h-32'>
					<DifferenceChart data={chartData} />
				</div>
			</CardContent>
		</Card>
	);
};

export default EquityCurveSection;
