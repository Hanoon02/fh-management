import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorFallback() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-3xl font-bold text-[#3fada8] mt-4">
        Oops! Something went wrong.
      </h1>

      <p className="text-sm mt-2 text-gray-500">
        {error?.message || "An unknown error occurred."}
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#3fada8] text-white rounded-lg shadow-lg hover:bg-[#338a86] transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
