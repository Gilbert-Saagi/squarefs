import type { Request } from "../types";

export const mockRequests: Request[] = [
  {
    id: "1",
    title: "Broken Road",
    description: "Road in my area is damaged",
    category: "Infrastructure",
    status: "OPEN",
  },
  {
    id: "2",
    title: "Hospital Issue",
    description: "No medicine in hospital",
    category: "Health",
    status: "IN_PROGRESS",
  },
];