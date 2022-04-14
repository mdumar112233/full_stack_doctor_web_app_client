import React from "react";
import check from "../../assets/images/check.png";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Navbar";

const AppointmentSuccess: React.FC = () => {
  return (
    <section>
      <Header />
      <div className="w-[90%] xm:w-[80%] mx-auto text-center my-24">
        <div className="flex justify-center">
          <img src={check} alt="check" />
        </div>
        <h1 className="sm:text-4xl xm:text-3xl text-2xl font-bold my-5">Thank you for your appointment</h1>
        <p className="text-main-normal text-sm">We will contact you soon</p>
      </div>
      <Footer />
    </section>
  );
};

export default AppointmentSuccess;
