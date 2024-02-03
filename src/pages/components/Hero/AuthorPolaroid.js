import Image from "next/image";
import polaroid from "@/styles/assets/sticker.png";

function AuthorPolaroid() {
  return (
    <div className="col-span-12 border-r order-1 md:order-2 md:col-span-5">
      <div className="p-5 bg-white mx-auto polaroid">
        <Image
          className="pt-5 bg-gray-100"
          src={polaroid}
          alt="authors avatar image"
          priority
        />
        <div className="polaroid-text bg-white p-5 text-center font-cursive text-2xl pb-0">
          plz don't scribble on it !!
        </div>
      </div>
    </div>
  );
}

export default AuthorPolaroid;
