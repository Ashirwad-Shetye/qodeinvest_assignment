import {
	XAxis,
	YAxis,
	ResponsiveContainer,
	Area,
	AreaChart,
} from "recharts";

const DifferenceChart = ({ data }) => {
	return (
		<ResponsiveContainer
			width='100%'
			height='100%'
		>
			<AreaChart
				data={data}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
			>
				<defs>
					<linearGradient
						id='diffGradient'
						x1='0'
						y1='0'
						x2='0'
						y2='1'
					>
						<stop
							offset='5%'
							stopColor='#F87171'
							stopOpacity={0.4}
						/>
						<stop
							offset='95%'
							stopColor='#F87171'
							stopOpacity={0.05}
						/>
					</linearGradient>
				</defs>
				<XAxis
					dataKey='date'
					hide
				/>
				<YAxis
					domain={[-40, 40]}
					hide
				/>
				<Area
					type='monotone'
					dataKey='diff'
					stroke='#EF4444'
					fill='url(#diffGradient)'
					strokeWidth={2}
					animationDuration={1500}
					animationEasing='ease-out'
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default DifferenceChart;
