import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: ApiPost[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
