import { useSession } from "next-auth/react";
import React from "react";
import StoryCard from "./StoryCard";

function Stories() {
  const { data: session } = useSession();

  const stories = [
    {
      name: session.user?.name,
      src: session.user?.image,
      profile: session.user?.image,
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Jeff Bezos",
      src: "https://links.papareact.com/k2j",
      profile: "https://i.insider.com/62867dbc577b8a0018279fc5?width=700",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
