import fetch from "node-fetch";
import { POST } from "./types";

const apiURL = "https://jsonplaceholder.typicode.com/posts"

export const getAllPostsData = async () => {
    const res = await fetch(new URL(apiURL))
    const posts: POST[] = await res.json()
    return posts
}

export const getAllPostIds = async () => {
    const res = await fetch(new URL(apiURL))
    const posts: POST[] = await res.json()
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    })
}
export type ALLPOSTIDS = ReturnType<typeof getAllPostIds>

export const getPostsData = async (id: string) => {
    const res = await fetch(new URL(`${apiURL}/${id}`))
    const post = await res.json()
    return post
}
