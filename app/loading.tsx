import Image from "next/image";
import placeholder from '../public/placeholder.gif'

export default function Loading() {
  return (
    <>
      <div className="text-center">
        <Image
          src={placeholder}
          alt="placeholder"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
