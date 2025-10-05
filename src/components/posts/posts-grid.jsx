import PostCard from "./post-card";

const PostsGrid = ({ posts }) => (
	<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
		{posts.map((post, idx) => (
			<PostCard
				key={idx}
				{...post}
				index={idx}
			/>
		))}
	</div>
);

export default PostsGrid