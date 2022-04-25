import React, { useEffect, useState } from "react";
import DashboardTbody from "./DashboardTbody";
import Modal from "react-modal";

const table_data = [
  {
    id: "1",
    date: "22-3-2030",
    time: "22:00",
    name: "rofik hasan",
    contact: "398923239",
  },
  {
    id: "2",
    date: "22-3-2030",
    time: "22:00",
    name: "sojib",
    contact: "398923239",
  },
  {
    id: "3",
    date: "22-3-2030",
    time: "22:00",
    name: "rasel",
    contact: "398923239",
  },
];

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>([]);
  const [deleteId, setDeleteId] = useState<any>('')

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch('http://localhost:5000/getappointmentdata/')
    .then(res => res.json())
    .then(data => setUserData(data))
  }, [])

  const deleteInfo = () => {
    fetch(`http://localhost:5000/delete/${deleteId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    closeModal()
    window.location.reload()
  }


  return (
    <section>
      <h3 className="text-lg font-bold mt-10">Dashboard</h3>

      <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 xm:grid-cols-2 grid-cols-1 mt-10 gap-7 text-white ">
        <div className="flex bg-[#F1536E] items-center rounded-lg text-base py-4 ">
          <h1 className="text-4xl font-bold pr-4 pl-3">09</h1>
          <div>
            <p>Pending</p>
            <p>Appointment</p>
          </div>
        </div>
        <div className="flex bg-[#3DA5F4] items-center rounded-lg xm:px-3 px-4 text-base py-4">
          <h1 className="text-4xl font-bold pr-4">19</h1>
          <div>
            <p>Approved</p>
            <p>Appointment</p>
          </div>
        </div>
        <div className="flex bg-[#00C689] items-center rounded-lg sm:px-5 px-7 text-base py-4">
          <h1 className="text-4xl font-bold pr-4">32</h1>
          <div>
            <p>Total</p>
            <p>Appointment</p>
          </div>
        </div>
        <div className="flex bg-[#FDA006] items-center rounded-lg md:px-9 px-11 text-base py-4">
          <h1 className="text-4xl font-bold pr-4">09</h1>
          <div>
            <p>Total</p>
            <p>Patients</p>
          </div>
        </div>
      </div>

      {/* table data */}

      <div className="overflow-x-auto">
        <div className="">
          <div className="bg-white shadow-md rounded-lg my-6 overflow-x-auto">
            <p className="text-main-color text-lg font-bold pt-4 pl-4">
              Recent Appointments
            </p>
            <table className="text-left w-full border-collapse ">
              <thead>
                <tr className="">
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    sr.no
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
                    Action
                  </th>
                </tr>
              </thead>
              {userData.map((data: any, index:  any) => (
                <DashboardTbody
                  openModal={openModal}
                  id = {data._id}
                  index={index + 1}
                  date={data.date}
                  time={data.time}
                  name={data.name}
                  contact={data.number}
                  setDeleteId={setDeleteId}
                />
              ))}
            </table>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="py-4 ">
          <h2>Do you want to delete this appointment?</h2>
          <div className="flex justify-center text-white mt-5">
            <button className="bg-pink-color py-1 px-6 rounded mr-5" onClick={deleteInfo}>
              Yes
            </button>
            <button
              className="border border-pink-color text-pink-color py-1 px-6 rounded"
              onClick={closeModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Dashboard;
