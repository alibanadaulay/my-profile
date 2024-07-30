import Image from "next/image";
import { Profile } from "./_components/profile";
import { ProfileDetail } from "./_components/profile_detail";
import { Menu } from "./_components/menu";

export default function Home() {
  return (
    <div className="bg-dark">
      <Menu />
      <div className="md:flex md:flex-row w-full md:pt-10 md:h-1/3  pb-11 bg-header">
        <Profile />
        <div className="items-center justify-center flex mt-6 md:w-1/2">
          <Image src={"/kucing.png"} width={500} height={500} alt="kucing" />
        </div>
      </div>
      <ProfileDetail />
    </div>
  );
}

function MyProfile() {
  return (
    <div className="flex mt-10 md:flex-row">
      <Image className="" src={"/kucing.png"} alt="kucing" />

      <ProfileDetail />
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="bg-[#2a2a29] flex flex-col">
      <div className="bg-blue flex-1">
        <Profile />
      </div>
      <div className="bg-red flex-1 relative w-full h-64">
        <Image
          src={"/kucing.png"}
          alt="kucing"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
