import { Outlet } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

// see https://gist.github.com/groundedsage/995dc2e14845980fdc547c8ba510169c for a context provider example

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;
