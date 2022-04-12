import React from 'react';
import PatientTbody from './PatientTbody';

const Patients: React.FC = () => {
    return (
        <section>
            <h3 className="text-lg font-bold mt-10">Dashboard</h3>

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
                    Name
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Gender
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Age
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Weight
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Contact
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-[#747171] border-b border-grey-light">
                    Address
                  </th>
                </tr>
              </thead>
              <PatientTbody />
           
            </table>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Patients;