import Image from "next/image";
import Facebook from "../../public/facebook-icon.svg";
import Twitter from "../../public/twitter-icon.svg";
import LinkedIn from "../../public/linkedin-icon.svg";

export const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <Image
        src={Facebook}
        className="h-[2.438rem] w-[2.438rem]"
        alt="facebook"
      />
      <Image
        src={Twitter}
        className="h-[2.438rem] w-[2.438rem]"
        alt="facebook"
      />
      <Image
        src={LinkedIn}
        className="h-[2.438rem] w-[2.438rem]"
        alt="facebook"
      />
    </div>
  );
};
