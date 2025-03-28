import { Config } from "@/data/config";
import path from "path";
import process from "process";

export const LatestPostCountInHomePage = 10;
export const PostCountPerPagination = 10;
export const PostsRootDirectory = path.join(process.cwd(), "./data/posts");

export const RSSFeedURL = `https://${Config.SiteDomain}/rss.xml`;
export const WebsiteURL = `https://${Config.SiteDomain}/`;

export const CopyrightAnnouncement = ` © ${Config.YearStart}-${new Date().getFullYear()} ${
  Config.AuthorName
} `;
