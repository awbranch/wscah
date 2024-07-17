export type SocialMediaService =
  | "facebook"
  | "instagram"
  | "youtube"
  | "x"
  | "linkedin";

export type Social = {
  service: SocialMediaService;
  url: string;
};
