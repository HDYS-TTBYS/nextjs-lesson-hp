import { GetStaticProps } from "next";
import Layout from "../components/Layout"
import Post from "../components/post";
import { getAllPostsData } from "../lib/posts";
import { POST } from "../lib/types";

const Blog = ({ posts }: { posts: POST[] }) => {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPostsData();
    return {
        props: { posts },
    };
}
