import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-1 text-center">
        <h1 className="md:text-4xl text-3xl font-bold">Oops!</h1>
        <p className="text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="md:text-xl w-fit text-gray-50 block px-4 py-2 mx-auto mt-1 text-lg transition-colors bg-red-500 rounded">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
