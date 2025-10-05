// import QuickActionsGrid from "@/components/home/quick-actions-grid";
import PostsGrid from "@/components/posts/posts-grid";
import { QUICK_ACTIONS, POSTS } from "@/constants/data";

export default function HomePage() {
	return (
		<div className='max-w-6xl mx-auto p-5 animate-in fade-in slide-in-from-bottom-4 duration-700'>
			<h1 className='text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
				Home
			</h1>
			{/* <QuickActionsGrid actions={QUICK_ACTIONS} /> */}
			<h2 className='text-2xl font-bold mb-6 text-gray-900'>Latest Posts</h2>
			<PostsGrid posts={POSTS} />
		</div>
	);
}
