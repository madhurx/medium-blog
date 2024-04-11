import BlogCard from "../components/BlogCard";

const Blog = () => {
	return (
		<div className="flex justify-center">
			<div className="max-w-xl min-w-96">
				<BlogCard
					author="author"
					title="title"
					content="content"
					publishedDate={"20 Feb 2024"}
				/>
			</div>
		</div>
	);
};

export default Blog;
