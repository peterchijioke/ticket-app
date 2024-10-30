import React from "react";
import PageLayout from "@/components/ui/PageLayout";
import TicketPageComponent from "../_components/TicketPageComponent";

type Props = {};

export default function EventPage({}: Props) {
  return (
    <PageLayout>
      <TicketPageComponent />
    </PageLayout>
  );
}
