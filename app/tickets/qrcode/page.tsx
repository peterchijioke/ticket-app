import React from "react";
import PageLayout from "@/components/ui/PageLayout";
import QrCodePageComponent from "@/app/_components/QrCodePageComponent";

type Props = {};

export default function EventPage({}: Props) {
  return (
    <PageLayout>
      <QrCodePageComponent />
    </PageLayout>
  );
}
