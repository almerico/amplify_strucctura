import { initializePaddle, Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {
  email?: string;
};

const productSlugDataMapper: { [key: string]: any } = {
  "a320-nc-suite-neo": {
    title: "ProSim A320 Suite non-commercial with NEO",
    items: [
      { priceId: "pri_01hczmnerh5dvkmed0eme9s3a1" },
      { priceId: "pri_01hczmr4133mprxmzwabej3nwr" },
      { priceId: "pri_01hczmy8e5m880xfx57nc82h8f" },
    ],
  },
  "a320-nc-suite": {
    title: "ProSim A320 Suite non-commercial",
    items: [
      { priceId: "pri_01hczmnerh5dvkmed0eme9s3a1" },
      { priceId: "pri_01hczmr4133mprxmzwabej3nwr" },
    ],
  },
  "fms-trainer-a322-personal-monthly": {
    title: "ProSim FMS Trainer A322 Personal Monthly subscription",
    items: [],
  },
  "fms-trainer-a322-personal-annual": {
    title: "ProSim FMS Trainer A322 Personal Annual subscription",
    items: [],
  },
  "fms-trainer-a322-classroom-monthly": {
    title: "ProSim FMS Trainer A322 Classroom Monthly subscription",
    items: [],
  },
  "fms-trainer-a322-classroom-annual": {
    title: "ProSim FMS Trainer A322 Classroom Annual subscription",
    items: [],
  },
  "fms-trainer-b738-personal-monthly": {
    title: "ProSim FMS Trainer B738 Personal Monthly subscription",
    items: [],
  },
  "fms-trainer-b738-personal-annual": {
    title: "ProSim FMS Trainer B738 Personal Annual subscription",
    items: [],
  },
  "fms-trainer-b738-classroom-monthly": {
    title: "ProSim FMS Trainer B738 Classroom Monthly subscription",
    items: [],
  },
  "fms-trainer-b738-classroom-annual": {
    title: "ProSim FMS Trainer B738 Classroom Annual subscription",
    items: [],
  },
  "fms-trainer-b38m-personal-monthly": {
    title: "ProSim FMS Trainer B38M Personal Monthly subscription",
    items: [],
  },
  "fms-trainer-b38m-personal-annual": {
    title: "ProSim FMS Trainer B38M Personal Annual subscription",
    items: [],
  },
  "fms-trainer-b38m-classroom-monthly": {
    title: "ProSim FMS Trainer B38M Classroom Monthly subscription",
    items: [],
  },
  "fms-trainer-b38m-classroom-annual": {
    title: "ProSim FMS Trainer B38M Classroom Annual subscription",
    items: [],
  },
};

export function ProductName() {
  const { productSlug } = useParams();
  if (!productSlug || !(productSlug in productSlugDataMapper)) {
    return <>Buy link is invalid</>;
  }
  const productData = productSlugDataMapper[productSlug];

  return <>{productData.title}</>;
}
export function Checkout({ email }: Props) {
  // Create a local state to store Paddle instance
  const [paddle, setPaddle] = useState<Paddle>();

  // Download and initialize Paddle instance from CDN
  useEffect(() => {
    initializePaddle({
      // environment: sandbox or production
      environment: "sandbox",
      // SELLER_ID from https://sandbox-vendors.paddle.com/authentication
      seller: 14880,
    }).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
        paddleInstance?.Checkout.open({
          customer: {
            email: email ?? "",
          },
          items: productData.items,
        });
      }
    });
  }, []);

  // get query parameter
  // import { useLocation, useParams } from "react-router-dom";
  // const location = useLocation();••••••
  // const queryParams = new URLSearchParams(location.search);
  // const products = queryParams.get("products");
  // console.log("products", products);

  const { productSlug } = useParams();
  if (!productSlug || !(productSlug in productSlugDataMapper)) {
    return <div>Buy link is invalid.</div>;
  }
  const productData = productSlugDataMapper[productSlug];

  // Callback to open a checkout
  const openCheckout = () => {
    paddle?.Checkout.open({
      customer: {
        email: email ?? "",
      },
      items: productData.items,
    });
  };
  return (
    <>
      <div className="flex justify-center my-10 mr-10 space-x-10 font-sans">
        <div>
          Purchase <ProductName />
        </div>
        <button onClick={openCheckout}>checkout</button>
      </div>
    </>
  );
}
