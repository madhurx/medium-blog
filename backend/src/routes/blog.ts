import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

blogRouter.use("/*", async (c, next) => {
	const jwt = c.req.header("authorization") || "";
	const token = jwt.split(" ")[1];
	const response = await verify(token, c.env.JWT_SECRET);
	if (response.id) {
		c.set("userId", response.id);
		await next();
	} else {
		c.status(403);
		return c.json({ error: "unauthorized" });
	}
});

blogRouter.post("/", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const userId = c.get("userId");
	const blog = await prisma.blog.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId,
		},
	});

	return c.json({ id: blog.id });
});

blogRouter.put("/", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const blog = await prisma.blog.update({
		where: { id: body.id },
		data: {
			title: body.title,
			content: body.content,
		},
	});

	return c.json({ id: blog.id });
});

blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
	try {
		const blogs = await prisma.blog.findMany();
		return c.json(blogs);
	} catch (error) {
		console.log(error);
		c.status(400);
		return c.text("Error fetching blogs");
	}
});

blogRouter.get("/:id", async (c) => {
	const id = c.req.param("id");
	try {
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		const blog = await prisma.blog.findUnique({ where: { id } });
		return c.json(blog);
	} catch (error) {
		console.log(error);
		c.status(400);
		return c.text("Error fetching blog");
	}
});