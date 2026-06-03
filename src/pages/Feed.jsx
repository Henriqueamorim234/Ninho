import { Posts } from "../components/Posts";
import { Auth } from "../layouts/auth";

function Feed() {
  return (
    <>
      <Auth>
        <Posts />
      </Auth>
    </>
  );
}

export default Feed;
