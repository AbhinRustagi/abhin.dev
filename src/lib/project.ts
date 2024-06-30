export type StatusType = "retired" | "in progress";

export interface IProject {
  title: string;
  description: string;
  href: string;
  status?: StatusType;
  type: string;
}

export const projectSections = {
  big: "Big projects 🍗",
  mini: "Bite-sized projects 🍪",
};
