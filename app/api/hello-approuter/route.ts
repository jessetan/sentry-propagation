import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  Sentry.addBreadcrumb({
    category: "test",
    message: "serverside app router breadcrumb",
  });
  return NextResponse.json({ message: "Hello from app router" });
}
