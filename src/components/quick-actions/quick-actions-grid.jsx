import QuickActionCard from "./quick-actions-card";

const QuickActionsGrid = ({ actions }) => (
	<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6'>
		{actions.map((action, idx) => (
			<QuickActionCard
				key={idx}
				{...action}
				index={idx}
			/>
		))}
	</div>
);

export default QuickActionsGrid