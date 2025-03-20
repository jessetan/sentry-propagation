"use client";

import styles from "./page.module.css";
import * as Sentry from "@sentry/nextjs";

export default function Home() {
  const callApprouter = async () => {
    Sentry.addBreadcrumb({
      category: "test",
      message: "clientside breadcrumb in callApprouter",
    });

    await fetch("/api/hello-approuter");

    Sentry.captureException(
      new Error("This is a client-side test error with app router breadcrumb")
    );
  };

  const callPagerouter = async () => {
    Sentry.addBreadcrumb({
      category: "test",
      message: "clientside breadcrumb in callPagerouter",
    });

    await fetch("/api/hello-pagerouter");

    Sentry.captureException(
      new Error("This is a client-side test error with page router breadcrumb")
    );
  };

  return (
    <div className={styles.page}>
      <input type="button" value="App router" onClick={callApprouter} />
      <input type="button" value="Page router" onClick={callPagerouter} />
    </div>
  );
}
