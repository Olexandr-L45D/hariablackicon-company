import css from "./Layout.module.css";

import { Suspense } from "react";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Header />
      <Navigation />
      <main className={css.main}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};
