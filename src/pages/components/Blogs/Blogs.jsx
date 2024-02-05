import BackStory from "./BackStory";
import Roadmap from "./Roadmap";

function Blogs() {
  return (
    <div className="border-b">
      <div className="mx-auto grid grid-cols-12 max-w-7xl px-4 xl:px-10">
        <BackStory />
        <Roadmap />
      </div>
    </div>
  );
}

export default Blogs;
