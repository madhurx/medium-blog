import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blog = () => {
	const { loading, blogs } = useBlogs();
	if (loading) {
		return <div>Loading...</div>;
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
