export default function About() {
  return (
    <>
      <h1>ProSim webshop demo</h1>
      <div>
        buy links:
        <div>
          <a href="http://localhost:5173/buy/fms-trainer">FMS Trainer</a>
        </div>
        <div>
          <a href="http://localhost:5173/buy/a320-nc-suite">ProSimA320 suite</a>
        </div>
        <div>
          <a href="http://localhost:5173/buy/a320-nc-suite-neo">
            ProSimA320 suite with NEO engine
          </a>
        </div>
      </div>
      <div className="mt-20 mb-5">
        Todo: setup pnpm workspaces monorepo with{" "}
        <a href="https://docs.aws.amazon.com/amplify/latest/userguide/monorepo-configuration.html#turborepo-pnpm-monorepo-configuration">
          amplify support
        </a>
      </div>
    </>
  );
}
