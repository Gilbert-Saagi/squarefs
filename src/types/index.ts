export type Role = "MP" | "OFFICER" | "CITIZEN";

export type Request = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
};