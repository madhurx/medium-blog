import Appbar from "../components/Appbar";
import FullBlogDetail from "../components/FullBlog";
import { BlogType, useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const FullBlog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({ id: id || "1" });
	if (loading) {
		return (
      <>
      <Appbar/>
			<div className="flex justify-center">
				<div role="status" className="space-y-2.5 animate-pulse px-10 w-full max-w-screen-xl pt-10">
					<div className="flex items-center w-full">
						<div className="h-2.5 bg-gray-200 rounded-full   w-32"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
					</div>
					<div className="flex items-center w-full max-w-[480px]">
						<div className="h-2.5 bg-gray-200 rounded-full   w-full"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
					</div>
					<div className="flex items-center w-full max-w-[400px]">
						<div className="h-2.5 bg-gray-300 rounded-full   w-full"></div>
						<div className="h-2.5 ms-2 bg-gray-200 rounded-full   w-80"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
					</div>
					<div className="flex items-center w-full max-w-[480px]">
						<div className="h-2.5 ms-2 bg-gray-200 rounded-full   w-full"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
					</div>
					<div className="flex items-center w-full max-w-[440px]">
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-32"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
						<div className="h-2.5 ms-2 bg-gray-200 rounded-full   w-full"></div>
					</div>
					<div className="flex items-center w-full max-w-[360px]">
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
						<div className="h-2.5 ms-2 bg-gray-200 rounded-full   w-80"></div>
						<div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
					</div>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
      </>
		);
	}

	return (
		<div>
			<FullBlogDetail blog={blog as BlogType} />
		</div>
	);
};

export default FullBlog;
