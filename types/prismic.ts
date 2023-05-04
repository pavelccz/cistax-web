import { Document } from '@prismicio/client/types/documents';

export interface ImageData {
  url: string;
}

export interface DocumentData {
  url: string;
}

export interface NavigationData {
  text: string;
  link: string;
}

export enum RichTextType {
  H6 = "heading6",
  P = "paragraph",
}

export interface RichTextData {
  type: RichTextType;
  text: string;
}

export interface PersonData {
  image: ImageData;
  name: string;
  position: string;
  certification: string;
  placeholder_color: string;
}

export enum LinkType {
  TEL= "tel",
  MAILTO = "mailto",
}

export interface ContactData {
  icon: string;
  contact: RichTextData[];
  line_break: boolean;
  link_type: LinkType;
}

export interface CompanyData {
  name: string;
  info: RichTextData[];
}

export interface GdprLinkData {
  text: string;
  document: DocumentData;
}

export interface ServiceData {
  primary: {
    title: string;
    button_text: string;
    subtitle: string;
    image: ImageData;
  };
  items: {
    main_item: string;
    sub_items: RichTextData[];
  }[];
}

export interface MainTitleData {
  text: string;
}

export interface HomepageData {
  logo: ImageData;
  navigation: NavigationData[];
  show_language_switch: boolean;
  language_switch: string;
  main_title: MainTitleData[];
  main_image: ImageData;
  about_us: string;
  team: PersonData[];
  our_services: string;
  services_image: ImageData;
  contact_us: string;
  contacts: ContactData[];
  map_pin: ImageData;
  companies: CompanyData[];
  gdpr: string;
  gdpr_links: GdprLinkData[];
  copyright: string;
  body: ServiceData[];
}

export interface HomepageDocument extends Document {
  data: HomepageData;
}
