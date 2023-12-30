export type TConfig = {
  AvatarURL: string;
  Sentence?: string;
  Nickname: string;

  SiteTitle: string;
  SiteDomain: string;

  PageCovers: {
    websiteCoverURL: string;
  };

  SocialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
    mastodon?: string;
    linkedin?: string;
    email: string;
  };

  RSSFeed?: {
    enabled: boolean;
  };

  Giscus?: {
    enabled: boolean;
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
  };

  Sponsor?: {
    WechatPayQRCodeContent?: `wxp://${string}`;
    AlipayLink?: `https://qr.alipay.com/${string}`;
    PaypalId?: string;
    PatreonId?: string;
  };

  YearStart: number;
  AuthorName: string;
};
