import { NhostClient } from "@nhost/nhost-js";

const ADMIN_HASURA_SECRET = process.env.ADMIN_HASURA_SECRET || "";

export const nhost = new NhostClient({
  subdomain: "localhost",
  adminSecret: ADMIN_HASURA_SECRET,
});
