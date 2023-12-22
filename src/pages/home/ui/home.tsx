import { Post } from "@/entities";

const Home = () => {
  const Posts = [
    {
      id: 1,
      author: "John Doe",
      created: "2021-01-01",
      updated: "2021-01-01",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["tag1", "tag2"],
      cover: "https://picsum.photos/200/300",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      content: {},
    },
    {
      id: 2,
      author: "John Doe",
      created: "2021-01-01",
      updated: "2021-01-01",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["tag1", "tag2"],
      cover: "https://picsum.photos/200/300",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      content: {},
    },
    {
      id: 3,
      author: "John Doe",
      created: "2021-01-01",
      updated: "2021-01-01",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tags: ["tag1", "tag2"],
      cover: "https://picsum.photos/200/300",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      content: {},
    },
  ];

  return (
    <>
      <section>
        <div>
          <div className="flex flex-col gap-y-3">
            {Posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
