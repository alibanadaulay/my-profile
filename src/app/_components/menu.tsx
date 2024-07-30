"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Router } from "next/router";

export function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    // {
    //   name: "Skills",
    //   path: "/skills",
    // },
    // {
    //   name: "My Experience",
    //   path: "/experience",
    // },
    // {
    //   name: "Resume",
    //   path: "/resume",
    // },
  ];
  return (
    <nav>
      <ul className="mt-5 flex absolute justify-center bg-transparent float-none w-full">
        {menuItems.map((item) => (
          <MenuButton
            pathname={pathname}
            path={item.path}
            router={router}
            name={item.name}
          />
        ))}
      </ul>
    </nav>
  );
}

const MenuButton = ({
  pathname,
  path,
  router,
  name,
}: {
  pathname: string;
  path: string;
  router: AppRouterInstance;
  name: String;
}) => {
  return (
    <li
      key={path}
      className={`${
        pathname === path
          ? "text-white bg-gray-600 rounded-xl p-2"
          : "text-white"
      } hover:text-white hover:bg-gray-600 hover:p-2 hover:rounded-xl
          hover:cursor-pointer p-2 ms-3`}
      onClick={() => router.push(path)}
    >
      <Link href={"{path}"}>{name}</Link>
    </li>
  );
};
