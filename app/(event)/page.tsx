import BottomTab from "@/components/ui/bottom-tab";
import React from "react";
import EventPageComponent from "../_components/EventPageComponent";
import PageLayout from "@/components/ui/PageLayout";

type Props = {};

export default function EventPage({}: Props) {
  return (
    <PageLayout>
      <EventPageComponent />
    </PageLayout>
  );
}
