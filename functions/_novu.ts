import { Novu } from "@novu/node";

const NOVU_API_SECRET =
  process.env.NOVU_API_SECRET || "86186edb890f78cba6f41d4ba05c8409";

export const novu = new Novu(NOVU_API_SECRET);
