import { Newsletter } from "@/types/Newsletter";
import { Address } from "@/types/Address";
import { Social } from "@/types/Social";
import { Link } from "@/types/Link";

export type Footer = {
  _type: "footer";
  _key: string;
  newsletter?: Newsletter;
  organization: string;
  addresses: Address[];
  phone?: string;
  fax?: string;
  social: Social[];
  siteMap: Link[];
};
