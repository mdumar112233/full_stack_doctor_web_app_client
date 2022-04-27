import React, { useEffect, useState } from "react";
import MyAppointmentTbody from "./MyAppointmentTbody";

const MyAppointment = () => {
  const [myAppointmentData, setMyAppointmentData] = useState<object[]>([]);

  console.log(myAppointmentData);
  const isLogin = sessionStorage.getItem("isLogin");

  useEffect(() => {
    fetch(
      `https://fierce-plains-12852.herokuapp.com/getuserappointment?email=${isLogin}`
    )
      .then((res) => res.json())
      .then((data) => setMyAppointmentData(data));
  }, [isLogin]);

  return (
    <>
      <h3 className="text-lg font-bold mt-10">My Appointment</h3>

      {/* table data */}
      <div className="overflow-x-auto">
        <div className="">
          <div className="bg-white shadow-md rounded-lg my-6 overflow-x-auto">
            <p className="text-main-color text-lg font-bold pt-4 pl-4">
              My Recent Appointments
            </p>
            <table className="text-left w-full border-collapse ">
              <thead>
                <tr className="">
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    sr.no
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Department
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Doctor
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Date
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Time
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Name
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Contact
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Status
                  </th>
                </tr>
              </thead>
              {myAppointmentData.map((data: any, index: any) => (
                <MyAppointmentTbody
                  id={data._id}
                  index={index + 1}
                  key={index}
                  department={data.selectDepartment}
                  doctor={data.selectDoctor}
                  date={data.date}
                  time={data.time}
                  name={data.name}
                  contact={data.number}
                  status={data.status}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAppointment;
