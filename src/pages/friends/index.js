import DesignatedPage from "../../ui/designatedPage";

import { getRecommendations } from "../../api/github/recommendations";
import Friend from "./components/friend";
import { useEffect, useState } from "react";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getRecommendations()
    .then(f => {
      setFriends(f);
    })
  }, []);

  return (
    <DesignatedPage title="Friends">
      <div className="flex flex-row flex-wrap space-y-8">
        {friends?.sort((a, b) => a.content.length > b.content.length ? -1 : 0)?.map((friend, i) => <Friend {...friend} idx={i} key={i} />)}
      </div>
    </DesignatedPage>
  )
}
