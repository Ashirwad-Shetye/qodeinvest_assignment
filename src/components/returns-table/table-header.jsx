
const TableHeaderCell = ({ children, align = "left" }) => (
	<th
		className={`text-${align} px-6 py-3 font-semibold text-gray-700 text-xs uppercase tracking-wider`}
	>
		{children}
	</th>
);

export default TableHeaderCell