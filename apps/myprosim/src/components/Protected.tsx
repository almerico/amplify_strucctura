import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import React from "react";

interface WithChildren {
  children?: React.ReactNode;
}

interface ProtectedProps extends WithChildren, LoginProps {}

export function Protected({
  loggedInContent,
  anonymousContent,
  ...other
}: ProtectedProps) {
  return (
    <Authenticator.Provider>
      <Login
        loggedInContent={loggedInContent}
        anonymousContent={anonymousContent}
        {...other}
      ></Login>
    </Authenticator.Provider>
  );
}

interface LoginProps {
  loggedInContent?: React.ReactNode;
  anonymousContent?: React.ReactNode;
}

export function Login({
  loggedInContent,
  anonymousContent,
  ...other
}: LoginProps) {
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <div {...other}>
      {user && loggedInContent}
      {user && <SignOut />}
      <div className="grid gap-4 lg:grid-cols-2">
        <div>{!user && anonymousContent}</div>
        <div>
          <Authenticator initialState="signUp"></Authenticator>
        </div>
      </div>
    </div>
  );
}

export function SignOut() {
  const { signOut } = useAuthenticator((context: any) => [context.user]);
  return <button onClick={signOut}>Sign out</button>;
}

// alternative method to get user and session:
//
// type IUser = {
//   username: string;
//   token: CognitoAccessToken;
// };

// interface IAuthContext {
//   user: IUser | null;
//   login(username: string, password: string): Promise<CognitoUser>;
//   logout(): Promise<any>;
// }

// const [user, setUser] = useState<CognitoUser | null>(null);
// const [email, setEmail] = useState<string | null>(null);
// const [session, setSession] = useState<CognitoUserSession | null>(null);
// useEffect(() => {
//   // React advises to declare the async function directly inside useEffect
//   (async function getToken() {
//     const session = await getSession();
//     setSession(session);
//     const user = await Auth.currentAuthenticatedUser();
//     console.log("session and user", {session, user});
//     setUser(user);
//     setEmail(user.attributes.email);
//   })();
// }, []);
//
// export default withAuthenticator(App);
// // import {
//   CognitoUserSession,
//   CognitoAccessToken,
//   CognitoUserAttribute,
// } from "amazon-cognito-identity-js";
// import { HubCallback } from "@aws-amplify/core/lib/Hub";
// interface Props {
// children ?: ReactNode;
// }
// const getSession = (): Promise<CognitoUserSession | null> =>
//   Auth.currentSession();
// import { CognitoUser } from "@aws-amplify/auth";
// type AppProps = {
//   signOut?: () => void;
//   user?: CognitoUser;
// };
