interface IPost {
  id: number;
  author: string;
  created: string;
  updated: string;
  title: string;
  tags: string[];
  cover: string;
  description: string;
  content: any;
}

const Post = ({ post }: { post: IPost }) => {
  return (
    <article className="flex max-w-[800px] flex-col gap-y-7 border-2 border-black p-7">
      <header className="flex gap-x-2">
        {/* <img alt="user" /> */}
        <div className="h-10 w-10 bg-black"></div>
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-medium leading-none">{post.author}</h3>
          <p className="text-xs font-medium leading-none">{post.created}</p>
        </div>
      </header>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
        <div className="flex gap-x-1">
          {post.tags.map((tag) => (
            <span className="text-base" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {/* <img alt="cover" /> */}
        <div className="h-[418px] w-full bg-black"></div>
        <p>{post.description}</p>
      </div>
    </article>
  );
};

export default Post;
