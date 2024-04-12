import FullBlogDetail from "../components/FullBlog";
import { BlogType, useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const FullBlog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({ id: id || "1" });
	if (loading) {
		return <p>Loading Full Blog...</p>;
	}

	return (
		<div>
			<FullBlogDetail blog={blog as BlogType} />
		</div>
	);
};

export default FullBlog;
