import * as z from "zod";

export const Blog = z.object({
  slug: z.string(),
  userId: z.string(),
  userEmail: z.string(),
  image: z.string(),
  title: z.string(),
  body: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type Blog = z.infer<typeof Blog>;

export const CreateBlogBody = Blog.pick({
  image: true,
  title: true,
  body: true,
  userId: true,
  userEmail: true,
});
export type CreateBlogBody = z.infer<typeof CreateBlogBody>;
