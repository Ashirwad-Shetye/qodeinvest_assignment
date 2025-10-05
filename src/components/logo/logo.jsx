const Logo = () => (
	<div className='flex items-center gap-2 animate-in fade-in duration-500'>
		<div className='w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-md'>
			<span className='text-white text-xs font-bold'>C</span>
		</div>
		<div>
			<div className='text-sm font-bold text-gray-900'>capitalmind</div>
			<div className='text-xs text-teal-600'>premium</div>
		</div>
	</div>
);

export default Logo;