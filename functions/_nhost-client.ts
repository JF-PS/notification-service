import { NhostClient } from "@nhost/nhost-js";

const NHOST_ADMIN_SECRET = process.env.NHOST_ADMIN_SECRET || "";
const NHOST_SUBDOMAIN = process.env.NHOST_SUBDOMAIN || "localhost";

export const nhost = new NhostClient({
  subdomain: NHOST_SUBDOMAIN,
  adminSecret: NHOST_ADMIN_SECRET,
});
