import React, { ReactNode } from "react";
import TopNavigation from "@/components/shared/Navigations/TopNavigation";
import LeftNavigation from "@/components/shared/Navigations/LeftNavigation";
import Footer from "@/components/shared/Footer/Footer";
import { useRouter } from "next/router";
import BannerHeader from "@/components/shared/Headers/BannerHeader";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <TopNavigation />
      {children}
      <Footer />
    </React.Fragment>
  );
}
