import { Button } from "../ui/button";


const PostCard = ({ date, title, excerpt, index }) => (
	<div
		className='border-b border-gray-200 pb-6 animate-in fade-in slide-in-from-left-4 hover:translate-x-1 transition-all duration-300'
		style={{ animationDelay: `${index * 80}ms` }}
	>
		<div className='text-xs text-gray-500 mb-2 font-medium'>{date}</div>
		<h3 className='text-lg font-semibold text-gray-900 mb-3 hover:text-teal-600 transition-colors duration-300 cursor-pointer'>
			{title}
		</h3>
		<p className='text-sm text-gray-600 mb-3 leading-relaxed'>{excerpt}</p>
		<Button
			variant='link'
			className='text-sm text-teal-600 hover:text-teal-700 p-0 h-auto font-medium group'
		>
			<p>Read full post</p>
		</Button>
	</div>
);

export default PostCard