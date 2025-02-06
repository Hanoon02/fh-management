import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import ErrorFallback from "../components/errorFallback/ErrorFallback.jsx";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage.jsx"));
const FmsPage = lazy(() => import("../pages/FmsPage/FmsPage.jsx"));
const HostelPage = lazy(() => import("../pages/HostelPage/HostelPage.jsx"));
const SharePage = lazy(() => import("../pages/SharePage/SharePage.jsx"));
const BookPage = lazy(() => import("../pages/BookPage/BookPage.jsx"));
const AchievePage = lazy(() => import("../pages/AchievePage/AchievePage.jsx"));
const WbcPage = lazy(() => import("../pages/WbcPage/WbcPage.jsx"));
const NoduesPage = lazy(() => import("../pages/NoduesPage/NoduesPage.jsx"));
const CramsPage = lazy(() => import("../pages/CramsPage/CramsPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/fmsiiitd",
    element: (
      <Suspense fallback={<Loader />}>
        <FmsPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/hosteliiitd",
    element: (
      <Suspense fallback={<Loader />}>
        <HostelPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/shareiiitd",
    element: (
      <Suspense fallback={<Loader />}>
        <SharePage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/bookiiitd",
    element: (
      <Suspense fallback={<Loader />}>
        <BookPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/achieveiiitd",
    element: (
      <Suspense fallback={<Loader />}>
        <AchievePage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/wbc",
    element: (
      <Suspense fallback={<Loader />}>
        <WbcPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/nodues",
    element: (
      <Suspense fallback={<Loader />}>
        <NoduesPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/crams",
    element: (
      <Suspense fallback={<Loader />}>
        <CramsPage />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
