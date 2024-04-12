import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
	id: string;
	title: string;
	content: string;
	author: {
		id: string;
		name: string;
	};
}

export const useBlogs = () => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState<Blog[]>([]);

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
