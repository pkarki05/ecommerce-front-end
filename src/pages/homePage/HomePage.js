import React from "react";
import UserLayout from "../../layout/UserLayout";
import CustomCard from "../../components/customCard/CustomCard";
import Header from "../../layout/Header";
import CustomCarousal from "../../components/customCarousal/CustomCarousal";
import Footer from "../../layout/Footer";
import CustomModal from "../../components/Customodal/CustomModal";
import CardDetails from "../../components/customCard/CardDetails";

function HomePage() {
  return (
    <div>
      <Header />

      <CustomCarousal />
      <main className="main">
        <CustomCard />
        <CustomModal>
          <CardDetails/>
        </CustomModal>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
