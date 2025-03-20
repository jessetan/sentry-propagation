import { NextApiRequest, NextApiResponse } from "next/types";
import * as Sentry from "@sentry/nextjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  Sentry.addBreadcrumb({
    category: "test",
    message: "serverside page router breadcrumb",
  });
  return res.status(200).json({ message: "Hello from page router" });
}
