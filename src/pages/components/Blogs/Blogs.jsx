import BackStory from "./BackStory";
import Roadmap from "./Roadmap";

function Blogs() {
  return (
    <div className="border-b dark:border-gray-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-12 px-4 xl:px-10">
        <BackStory />
        <Roadmap />
      </div>
    </div>
  );
}

export default Blogs;
