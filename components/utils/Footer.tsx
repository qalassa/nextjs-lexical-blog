import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CopyrightAnnouncement, RSSFeedURL } from "@/consts/consts";
import { Config } from "@/data/config";
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCheck, FaCopy } from "react-icons/fa";
import { IoLogoRss } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Dialog
      onOpenChange={() => {
        setIsCopied(false);
      }}
    >
      <footer className="my-5 flex flex-col justify-center py-2 text-sm">
        <div className="my-2 flex flex-wrap justify-center space-x-3 text-center text-gray-500 underline dark:text-gray-400">
          {Config.RSSFeed?.enabled && (
            <DialogTrigger asChild>
            </DialogTrigger>
          )}
        </div>
        <div className="mx-auto px-3 text-center font-bold">{CopyrightAnnouncement}</div>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex">
              <IoLogoRss className="mr-2 my-auto" />
              {"RSS Feed"}
            </DialogTitle>
          </DialogHeader>

          <div>
            <div className="w-full text-sm my-2">
              <div>
                <b>NOTE: </b>Some RSS Feed Reader may has deficient in rendering SVG formulations, graphs. Such as the
                Inoreader, Feedly. If it happens, please read the origin web page for better experience.
              </div>
            </div>
            <Separator />
            <div className="w-full flex my-3">
              <Input defaultValue={RSSFeedURL} readOnly />
              <CopyToClipboard
                onCopy={() => {
                  setIsCopied(true);
                }}
                text={RSSFeedURL}
              >
                <Button
                  className={`ml-3 my-auto ${isCopied && "bg-green-500 hover:bg-green-500"}`}
                  size="sm"
                  type="submit"
                >
                  <span className="sr-only">{"Copy"}</span>
                  {isCopied ? <FaCheck className="h-4 w-4" /> : <FaCopy className="h-4 w-4" />}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </DialogContent>
      </footer>
    </Dialog>
  );
};
