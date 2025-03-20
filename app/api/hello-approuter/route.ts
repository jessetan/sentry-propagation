import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  Sentry.addBreadcrumb({
    category: "test",
    message: "serverside app router breadcrumb",
  });

  Sentry.captureException(new Error("serverside app router error"));
  return NextResponse.json({ message: "Hello from app router" });
}
