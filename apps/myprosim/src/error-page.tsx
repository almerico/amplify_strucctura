import { useRouteError } from "react-router-dom";
import { PrimaryButton } from "@components/buttons";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  <div id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>;
  return (
    <>
      <main className="grid place-items-center py-24 px-6 min-h-full bg-white sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Oops!
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, an unexpected error occurred.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {error.statusText || error.message}
          </p>
          <div className="flex gap-x-6 justify-center items-center mt-10">
            <PrimaryButton href="/">Go back home</PrimaryButton>
            <a
              href="https://prosim.atlassian.net/servicedesk/customer/portal/1/group/1"
              className="text-sm font-semibold text-gray-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
