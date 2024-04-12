import { Link } from "react-router-dom";

interface BlogCardProps {
	id: string;
	author: string;
	title: string;
	content: string;
	publishedDate: string;
}

const BlogCard = ({ author, title, content, publishedDate,id }: BlogCardProps) => {
	return (
		<Link to={`/blog/${id}`}>
			<div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
				<div className="flex">
					<div className="flex justify-center flex-col">
						<Avatar name={author} />
					</div>
					<div className="font-extralight px-1 text-sm flex justify-center flex-col ">
						{author}
					</div>
					<div>.</div>
					<div className="text-slate-500 font-thin px-1 text-sm flex justify-center flex-col ">
						{publishedDate}
					</div>
				</div>
				<div className="text-xl font-semibold pt-2">{title}</div>
				<div className="text-base font-thin">
					{content.slice(0, 100) + "..."}
				</div>
				<div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
					content.length / 100,
				)} minute(s) read`}</div>
			</div>
		</Link>
	);
};

export default BlogCard;

export const Avatar = ({ name }: { name: string }) => {
	return (
		<div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-300 rounded-full">
			<span className="font-medium text-sm text-gray-600 ">
				{name[0].toUpperCase() + name[1].toUpperCase()}
			</span>
		</div>
	);
};
