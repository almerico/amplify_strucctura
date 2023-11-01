import { useAuthenticator } from "@aws-amplify/ui-react";
import { useParams, useNavigate } from "react-router-dom";
import { FmsTrainerConfig } from "@components/FmsTrainerConfig";
import { Checkout, ProductName } from "@components/Checkout";
import { Protected } from "@components/Protected";

function MyCheckout() {
  const useAuthenticatorData = useAuthenticator((context) => [context.user]);
  console.log("useAuthenticatorData", useAuthenticatorData);
  const { user } = useAuthenticatorData;

  return (
    <div>
      <Checkout email={user?.attributes?.email ?? ""} />
    </div>
  );
}

function LoginHint() {
  return (
    <>
      <div className="flex items-center h-full">
        Create an account or login to complete your order for <ProductName />.
      </div>
    </>
  );
}

function Buy() {
  const navigate = useNavigate();

  const { productSlug } = useParams();
  if (!productSlug) {
    return <div>Buy link is invalid.</div>;
  }
  const isFmsTrainer = productSlug.toLowerCase() === "fms-trainer";
  function onPurchase(productSlug: string) {
    navigate(`/buy/${productSlug}`);
  }
  return (
    <>
      {isFmsTrainer && <FmsTrainerConfig onPurchase={onPurchase} />}
      {!isFmsTrainer && (
        <Protected
          anonymousContent={<LoginHint />}
          loggedInContent={<MyCheckout />}
        />
      )}
    </>
  );
}
export default Buy;
