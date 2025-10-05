import {
	Card
} from "@/components/ui/card";
import TableHeaderCell from "@/components/returns-table/table-header"
import ReturnsTableRow from "./returns-table-row";

const ReturnsTable = ({ data }) => {
	const headers = [
		"NAME",
		"YTD",
		"1D",
		"1W",
		"1M",
		"3M",
		"6M",
		"1Y",
		"3Y",
		"SI",
		"DD",
		"MAXDD",
	];

	return (
		<Card className='overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700 border-0 shadow-none'>
			<div className='overflow-x-auto'>
				<table className='w-full text-sm'>
					<thead className='bg-gray-50 border-b border-gray-200'>
						<tr>
							<TableHeaderCell>{headers[0]}</TableHeaderCell>
							{headers.slice(1).map((header, idx) => (
								<TableHeaderCell
									key={idx}
									align='right'
								>
									{header}
								</TableHeaderCell>
							))}
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-100'>
						{data.map((row, idx) => (
							<ReturnsTableRow
								key={idx}
								data={row}
								index={idx}
							/>
						))}
					</tbody>
				</table>
			</div>
			<div className='mx-5'>
				<p className='text-xs text-gray-600'>
					Note: Returns above 1 year are annualised.
				</p>
			</div>
		</Card>
	);
};

export default ReturnsTable;
