import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import ErrorFallback from "../components/errorFallback/ErrorFallback.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage.jsx"));
const FmsPage = lazy(() => import("../pages/FmsPage/FmsPage.jsx"));
const HostelPage = lazy(() => import("../pages/HostelPage/HostelPage.jsx"));
const SharePage = lazy(() => import("../pages/SharePage/SharePage.jsx"));
const BookPage = lazy(() => import("../pages/BookPage/BookPage.jsx"));
const AchievePage = lazy(() => import("../pages/AchievePage/AchievePage.jsx"));
const WbcPage = lazy(() => import("../pages/WbcPage/WbcPage.jsx"));
const NoduesPage = lazy(() => import("../pages/NoduesPage/NoduesPage.jsx"));
const CramsPage = lazy(() => import("../pages/CramsPage/CramsPage.jsx"));
const AuthenticationPage = lazy(() =>
  import("../pages/AuthenticationPage/AuthenticationPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function AppRoutes() {
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
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <FmsPage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/hosteliiitd",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <HostelPage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/shareiiitd",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <SharePage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/bookiiitd",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <BookPage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/achieveiiitd",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <AchievePage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/wbc",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <WbcPage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/nodues",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <NoduesPage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/crams",
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <CramsPage />
          </Suspense>
        </ProtectedRoutes>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader />}>
          <AuthenticationPage />
        </Suspense>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRoutes;
