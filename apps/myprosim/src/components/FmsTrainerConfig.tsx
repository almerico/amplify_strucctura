import React from "react";
import {
  FirstGroupButton,
  LastGroupButton,
  MiddleGroupButton,
  PrimaryButton,
} from "@components/buttons";
import { H1 } from "@components/headings";

interface WithChildren {
  children?: React.ReactNode;
}

function ConfigHeader({ children }: WithChildren) {
  return <h3 className="mb-2">{children}</h3>;
}

interface FmsTrainerConfigProps {
  onPurchase: (productSlug: string) => void;
}

const personalMonthlyPrice = 49.99;
const classroomMonthlyPrice = 299.0;

export function FmsTrainerConfig({ onPurchase }: FmsTrainerConfigProps) {
  const [aircraftType, setAircraftType] = React.useState("");
  const [licenseType, setLicenseType] = React.useState("");
  const [subscription, setSubscription] = React.useState("");

  function getProductSlug() {
    return `fms-trainer-${aircraftType}-${licenseType}-${subscription}`.toLowerCase();
  }

  function purchaseEnabled() {
    return aircraftType && licenseType && subscription;
  }

  function calculatePrice() {
    if (!purchaseEnabled()) {
      return 0;
    }
    const basePrice =
      licenseType === "Personal" ? personalMonthlyPrice : classroomMonthlyPrice;

    const result =
      subscription === "Monthly" ? basePrice : Math.floor(basePrice * 10);
    if (licenseType === "Classroom" && subscription === "Annual") {
      return 2995;
    }
    return result;
  }

  const price = calculatePrice();
  let priceString = "";
  if (price) {
    priceString =
      `€ ${price.toFixed(2)} per ` +
      (subscription === "Monthly" ? "month" : "year");
  }
  return (
    <>
      <H1>ProSim FMS Trainer user license </H1>
      <div>
        <ConfigHeader>Aircraft type: {aircraftType}</ConfigHeader>
        <FirstGroupButton onClick={() => setAircraftType("A322")}>
          A322
        </FirstGroupButton>
        <MiddleGroupButton onClick={() => setAircraftType("B738")}>
          B738
        </MiddleGroupButton>
        <LastGroupButton onClick={() => setAircraftType("B38M")}>
          B38M
        </LastGroupButton>
      </div>
      <div className="mt-8">
        <ConfigHeader>License type: {licenseType}</ConfigHeader>
        <FirstGroupButton onClick={() => setLicenseType("Personal")}>
          Personal
        </FirstGroupButton>
        <LastGroupButton onClick={() => setLicenseType("Classroom")}>
          Classroom
        </LastGroupButton>
      </div>
      <div className="mt-8">
        <ConfigHeader>Subscription: {subscription}</ConfigHeader>
        <FirstGroupButton onClick={() => setSubscription("Monthly")}>
          Monthly
        </FirstGroupButton>
        <LastGroupButton onClick={() => setSubscription("Annual")}>
          Annual
        </LastGroupButton>
      </div>
      <div className="my-8">{priceString}</div>
      <div className="">
        <PrimaryButton
          disabled={!purchaseEnabled()}
          onClick={() => onPurchase(getProductSlug())}
        >
          Purchase
        </PrimaryButton>
      </div>
      <h2 className="mt-8 text-red-500">
        Todo: show tiered pricing discount table for personal
      </h2>
    </>
  );
}
