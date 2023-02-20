import { Novu } from "@novu/node";

const NOVU_API_SECRET = process.env.NOVU_API_SECRET;

export const novu = new Novu(NOVU_API_SECRET);
