import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("../../pages/AboutUsPage/AboutUsPage"));

const VentPageFilters = lazy(() =>
  import("../../pages/VentPageFilters/VentPageFilters")
);

const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import { Layout } from "../Layout/Layout";

import CompanyTermsPage from "../../pages/CompanyTermsPage/CompanyTermsPage";

const FeedbackEmailModal = lazy(() =>
  import("../FeedbackEmailModal/FeedbackEmailModal")
);

const FeedbackModalPhone = lazy(() =>
  import("../FeedbackModalPhone/FeedbackModalPhone")
);
const FenDetails = lazy(() => import("../FenDetails/FenDetails"));
const HeatExchangeDetails = lazy(() =>
  import("../HeatExchangeDetails/HeatExchangeDetails")
);
const ValveDetails = lazy(() => import("../ValveDetails/ValveDetails"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/catalog" element={<VentPageFilters />} />
          <Route path="/companyTerms" element={<CompanyTermsPage />} />
          <Route path="/feedbackEmail" element={<FeedbackEmailModal />} />
          <Route path="/feedbackPhone" element={<FeedbackModalPhone />} />
          <Route path="/heat/:id" element={<HeatExchangeDetails />} />
          <Route path="/valve/:id" element={<ValveDetails />} />
          <Route path="/fen/:id" element={<FenDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
