import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blog = () => {
	const { loading, blogs } = useBlogs();
	console.log(blogs);
	if (loading) {
		return (
			<>
				<Appbar />
				<div className="flex justify-center">
					<div
						role="status"
						className="animate-pulse max-w-xl min-w-96 p-4 border-b border-slate-200 pb-4 cursor-pointer">
						<div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Appbar />
			<div className="flex justify-center">
				<div className="max-w-xl min-w-96">
					{blogs.map((blog) => (
						<BlogCard
							id={blog.id}
							author={blog.author.name || "MG"}
							title={blog.title}
							content={blog.content}
							publishedDate={"20 Feb 2024"}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Blog;
