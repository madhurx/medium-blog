import React from "react";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";
import { BlogType } from "../hooks";


const FullBlogDetail = ({ blog }: { blog: BlogType }) => {
	return (
		<>
			<Appbar />
			<div className="flex justify-center">
				<div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-10">
					<div className="col-span-8 ">
						<div className="text-3xl font-extrabold">{blog.title}</div>
						<div className="text-slate-500">
							<p>Post on 20 Nov 2024</p>
						</div>
						<div className="text-base pt-2">{blog.content}</div>
					</div>
					<div className="col-span-4 ">
						<div className="text-slate-500 text-lg">Author</div>
						<div className="flex space-x-4">
							<div className="pr-2 flex flex-col justify-center">
								<Avatar name={blog.author.name || "Anonymous"} />
							</div>
							<div>
								<div className="text-xl font-bold">
									{blog.author.name || "Anonymous"}
								</div>
								<div className="pt-2 text-slate-500">
									Random catch phrase here.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FullBlogDetail;
