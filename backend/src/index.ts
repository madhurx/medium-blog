import { Hono } from "hono";
import { blogRouter } from "./routes/blog";
import { userRouter } from "./routes/user";
import { cors } from 'hono/cors'

const app = new Hono();
app.use('/*', cors())

app.route("/api/v1/blog", blogRouter);
app.route("/api/v1/user", userRouter);



export default app;
