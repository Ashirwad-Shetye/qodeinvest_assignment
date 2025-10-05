import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const EquityChart = ({ data }) => {
    return (
			<ResponsiveContainer
				width='100%'
				height='100%'
			>
				<LineChart
					data={data}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<defs>
						<linearGradient
							id='focusedGradient'
							x1='0'
							y1='0'
							x2='0'
							y2='1'
						>
							<stop
								offset='5%'
								stopColor='#10B981'
								stopOpacity={0.1}
							/>
							<stop
								offset='95%'
								stopColor='#10B981'
								stopOpacity={0}
							/>
						</linearGradient>
						<linearGradient
							id='niftyGradient'
							x1='0'
							y1='0'
							x2='0'
							y2='1'
						>
							<stop
								offset='5%'
								stopColor='#3B82F6'
								stopOpacity={0.1}
							/>
							<stop
								offset='95%'
								stopColor='#3B82F6'
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis
						dataKey='date'
						tick={{ fontSize: 11, fill: "#6B7280" }}
						stroke='#E5E7EB'
						strokeWidth={1.5}
					/>
					<YAxis
						tick={{ fontSize: 11, fill: "#6B7280" }}
						stroke='#E5E7EB'
						strokeWidth={1.5}
						domain={[50, 850]}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: "white",
							border: "1px solid #E5E7EB",
							borderRadius: "8px",
							fontSize: "12px",
							boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
						}}
						animationDuration={300}
					/>
					<Line
						type='monotone'
						dataKey='rawNav'
						stroke='#10B981'
						strokeWidth={2}
						dot={false}
						name='NAV value'
						animationDuration={1500}
						animationEasing='ease-out'
					/>
				</LineChart>
			</ResponsiveContainer>
		);
}

export default EquityChart;
