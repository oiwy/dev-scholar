const Home = () => {
  const Posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      difficulty: "easy",
      author: "John Doe",
      date: "2021-01-01",
      cover: "https://picsum.photos/200/300",
      content: {},
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      difficulty: "easy",
      author: "John Doe",
      date: "2021-01-01",
      cover: "https://picsum.photos/200/300",
      content: {},
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      difficulty: "easy",
      author: "John Doe",
      date: "2021-01-01",
      cover: "https://picsum.photos/200/300",
      content: {},
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      difficulty: "easy",
      author: "John Doe",
      date: "2021-01-01",
      cover: "https://picsum.photos/200/300",
      content: {},
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col gap-y-3">
            {Posts.map((post) => (
              <div key={post.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={post.cover} alt="cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
