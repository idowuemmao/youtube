// "use client";

const Filter = () => {
  const list = [
    { title: "All", id: 1 },
    { title: "Gaming", id: 2 },
    { title: "Music", id: 3 },
    { title: "Mixes", id: 4 },
    { title: "React routers", id: 5 },
    { title: "Live", id: 6 },
    { title: "Marital Arts Movies", id: 7 },
    { title: "Belief", id: 8 },
    { title: "Superhero movies", id: 9 },
    { title: "JavaScript", id: 10 },
    { title: "Thrillers", id: 11 },
    { title: "Contemporary Worship Music", id: 12 },
    { title: "Lionel Messi", id: 13 },
    { title: "News", id: 14 },
    { title: "Speaking in tongues", id: 15 },
    { title: "Superheroes", id: 16 },
    { title: "Computers", id: 17 },
    { title: "Action Thrillers", id: 18 },
    { title: "Film Criticisms", id: 19 },
    { title: "Dramedy", id: 20 },
    { title: "Comedy", id: 21 },
    { title: "Presentations", id: 22 },
    { title: "Action-adventure games", id: 23 },
    { title: "Recently Uploaded", id: 24 },
    { title: "New to You", id: 25 },
  ];

  const filterList = list.map(({ title, id }) => (
    <p key={id} className="bg-[#222222] p-2 text-xs min-w-max rounded-lg">
      {title}
    </p>
  ));

  return (
    <div className="text-white flex gap-2 w-11/12 h-fit">
      <div className=" flex gap-2 overflow-auto scrollbar-hide p-2">
        {filterList}
      </div>
    </div>
  );
};

export default Filter;
