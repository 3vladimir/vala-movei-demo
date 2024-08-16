import placeholder from "/public/placeholder.gif";
import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="text-center">
        <Image
          src={placeholder}
          alt="placeholder"
          width={500}
          height={500}
        ></Image>
      </div>
    </>
  );
}
