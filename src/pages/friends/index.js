import DesignatedPage from "../../ui/designatedPage";

import { getRecommendations } from "../../api/github/recommendations";
import Friend from "./components/friend";
import { useEffect, useState } from "react";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getRecommendations().then((f) => {
      setFriends(f);
    });
  }, []);

  return (
    <DesignatedPage title="Friends">
      <span className="fin fin-1 text-center text-white text-lg italic -my-4 md:-my-8 md:px-48">
        Here are friends who I have worked with, mentored, or otherwise significantly helped. This page is automatically
        generated from{" "}
        <a
          href="https://github.com/Iapetus-11/recommendations"
          target="_blank"
          rel="noreferrer"
          className="text-cornflower-normal"
        >
          this GitHub repository
        </a>
        .
      </span>
      <div className="flex flex-row flex-wrap space-y-8">
        {friends
          ?.sort((a, b) =>
            a.content.length > b.content.length ? -1 : a.content.length < b.content.length ? 1 : 0
          )
          ?.map((friend, i) => (
            <Friend {...friend} idx={i} key={i} />
          ))}
      </div>
    </DesignatedPage>
  );
}
