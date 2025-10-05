

const DateInput = ({ label, value, onChange }) => (
	<div className='flex items-center gap-2 animate-in fade-in duration-500'>
		<span className='text-sm text-gray-600 font-medium'>{label}</span>
		<input
			type='date'
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className='border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 hover:border-gray-400'
		/>
	</div>
);

export default DateInput