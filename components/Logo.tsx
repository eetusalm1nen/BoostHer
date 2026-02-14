import Image from "next/image";
import { images } from "@/lib/images";

export function Logo() {
  return (
    <div className="flex justify-center pb-0 pt-4 md:pb-1 md:pt-6">
      <Image
        src={images.logo}
        alt="BoostHer logo"
        width={320}
        height={128}
        className="h-auto w-48 object-contain md:w-64 lg:w-80"
      />
    </div>
  );
}
