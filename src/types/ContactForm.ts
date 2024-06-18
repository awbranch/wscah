import { ComponentProps } from "@/types/Component";
import { PortableTextBlock } from "sanity";

export type ContactForm = ComponentProps & {
  _type: "contactForm";
  name: string; // The name of the form
  toDepartments?: string[]; // this needs more
  toEmails?: string; // comma separated
  fields: string[]; // todo name / value / type objects
  confirmationMessage: PortableTextBlock[];
};
