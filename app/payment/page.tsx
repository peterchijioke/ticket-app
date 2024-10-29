import BottomTab from "@/components/ui/bottom-tab";
import React from "react";
import EventPageComponent from "../_components/EventPageComponent";
import PageLayout from "@/components/ui/PageLayout";
import PaymentPageComponent from "../_components/PaymentPageComponent";

type Props = {};

export default function EventPage({}: Props) {
  return (
    <PageLayout>
      <PaymentPageComponent />
    </PageLayout>
  );
}
