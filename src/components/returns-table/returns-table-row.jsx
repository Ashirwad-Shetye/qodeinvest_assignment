import { getColorClass } from "@/utils/get_colors";
import TableCell from "./table-cell";
import { formatPercentage } from "@/utils/value_formatter";

const ReturnsTableRow = ({ data, index }) => {
	const metrics = [
		{ key: "ytd", value: data.ytd },
		{ key: "oneDay", value: data.oneDay },
		{ key: "oneWeek", value: data.oneWeek },
		{ key: "oneMonth", value: data.oneMonth },
		{ key: "threeMonth", value: data.threeMonth },
		{ key: "sixMonth", value: data.sixMonth },
		{ key: "oneYear", value: data.oneYear },
		{ key: "threeYear", value: data.threeYear },
		{ key: "si", value: data.si },
		{ key: "dd", value: data.dd },
		{ key: "maxdd", value: data.maxdd },
	];

	return (
		<tr
			className='hover:bg-teal-50/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2'
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<TableCell className='font-semibold text-gray-900'>{data.name}</TableCell>
			{metrics.map((metric, idx) => (
				<TableCell
					key={idx}
					align='right'
					className={`${getColorClass(
						metric.value
					)} font-medium transition-all duration-300 hover:scale-110`}
				>
					{formatPercentage(metric.value)}
				</TableCell>
			))}
		</tr>
	);
};

export default ReturnsTableRow