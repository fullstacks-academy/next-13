import Link from "next/link";

const Post = ({
  description,
  title,
}: {
  description: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col my-10 border border-blue-400 p-20">
      <div className="text-lg font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default async function Posts() {
  const postRes = await fetch("http://localhost:3001/posts/", {
    cache: "no-cache",
  });
  const posts = await postRes.json();

  return (
    <div>
      <h1 className="text-xl font-bold">Posts</h1>
      {posts.map((post: any) => {
        return (
          <Post
            title={post.title}
            description={post.description}
            key={post.title}
          />
        );
      })}
    </div>
  );
}
