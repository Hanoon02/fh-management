import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100  text-center px-6">
      <h1 className="text-9xl font-bold text-[#3fada8] animate-bounce">404</h1>

      <p className="text-lg mt-4 text-gray-700">
        Oops! The page you are looking for does not exist.
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

export default NotFoundPage;
