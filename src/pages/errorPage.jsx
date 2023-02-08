
import { useRouteError } from "react-router-dom";
import Waves from "../components/Waves";
import Navbar from "../components/Navbar";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// CSS and assets
import '../css/navbar.css';
import '../css/error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (

    <>
      <Navbar />

      <main className="container d-flex justify-content-center">
        <div id="error-page" className="text-center align-self-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred 😔.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>
    </>
  );
}