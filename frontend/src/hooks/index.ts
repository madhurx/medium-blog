import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface BlogType {
	id: string;
	title: string;
	content: string;
	author: {
		id: string;
		name: string;
	};
}

export const useBlog = ({ id }: { id: string }) => {
	const [loading, setLoading] = useState(true);
	const [blog, setBlog] = useState<BlogType>();

	const fetchData = async () => {
		const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
		setBlog(res.data);
		setLoading(false);
		return;
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { loading, blog };
};

export const useBlogs = () => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState<BlogType[]>([]);

	const fetchData = async () => {
		const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("jwt")}`,
			},
		});
		setBlogs(res.data);
		setLoading(false);
		return;
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { loading, blogs };
};
