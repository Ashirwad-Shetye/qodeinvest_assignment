const TableCell = ({ children, align = "left", className = "" }) => (
	<td
		className={`px-6 py-4 text-${align} ${className} transition-colors duration-200`}
	>
		{children}
	</td>
);


export default TableCell