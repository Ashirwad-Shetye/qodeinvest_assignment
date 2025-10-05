import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const QuickActionCard = ({ title, description, icon: Icon, index }) => (
	<Card
		className='group relative hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer border-gray-200 animate-in fade-in slide-in-from-bottom-4'
		style={{ animationDelay: `${index * 100}ms` }}
	>
		<CardHeader>
			<div className='flex items-start justify-between'>
				<CardTitle className='text-base group-hover:text-teal-600 transition-colors duration-300'>
					{title}
				</CardTitle>
				<Icon className='w-4 h-4 text-gray-400 group-hover:text-teal-500 group-hover:scale-110 transition-all duration-300' />
			</div>
		</CardHeader>
		<CardContent>
			<CardDescription className='text-sm leading-relaxed'>
				{description}
			</CardDescription>
		</CardContent>
	</Card>
);

export default QuickActionCard;
