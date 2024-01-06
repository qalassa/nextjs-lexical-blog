import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Config } from "@/data/config";
import { fontFangZhengXiaoBiaoSongCN } from "@/styles/font";
import { nanoid } from "nanoid";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode, MdSearch } from "react-icons/md";

const MenuItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "POSTS",
    href: "/posts",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
];

export const NavBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsSideNavOpen(false);
  };

  return (
    <Sheet open={isSideNavOpen} onOpenChange={(open) => setIsSideNavOpen(open)}>
      <nav className="sticky top-0 z-50 flex flex-wrap justify-between py-3 backdrop-blur bg-white/50 dark:bg-black/50">
        <Link href="/" className="cursor-pointer">
          <h1
            className={`${fontFangZhengXiaoBiaoSongCN.className} my-auto border-b-4 border-b-black text-xl font-bold dark:border-b-white`}
          >
            {Config.SiteTitle}
          </h1>
        </Link>
        <div className="my-auto hidden sm:flex">
          {MenuItems.map((menuItem) => (
            <Link
              href={menuItem.href}
              key={nanoid()}
              className="border-b-sky-600 font-bold hover:text-sky-600 dark:hover:border-b-sky-500 dark:hover:text-sky-500 mx-2 my-auto px-2"
              onClick={() => setIsSideNavOpen(false)}
            >
              {menuItem.title}
            </Link>
          ))}
          <Link
            href={"/search"}
            className="cursor-pointer mx-2 rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
          >
            <MdSearch />
          </Link>
          <div
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="cursor-pointer mx-1 rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            onClick={handleSwitchTheme}
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
        </div>
        <div className="flex flex-wrap text-3xl space-x-2 sm:hidden">
          <Link
            title="Search the posts"
            className="my-auto rounded-full p-1 text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            href="/search"
          >
            <MdSearch />
          </Link>
          <div
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="cursor-pointer rounded-full my-auto p-1 text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            onClick={handleSwitchTheme}
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
          <SheetTrigger
            title="Spread the navigation menu"
            className="text-black rounded-full p-1 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
          >
            <MdMenu
              onClick={() => {
                setIsSideNavOpen(!isSideNavOpen);
              }}
            />
          </SheetTrigger>
        </div>
      </nav>
      <SheetContent className="bg:white border-none shadow-md dark:bg-black">
        <div className="my-5 flex flex-col">
          {MenuItems.map((menuItem) => (
            <Link
              href={menuItem.href}
              key={nanoid()}
              className="border-b border-dashed p-3 text-xl hover:text-sky-500"
              onClick={() => setIsSideNavOpen(false)}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
