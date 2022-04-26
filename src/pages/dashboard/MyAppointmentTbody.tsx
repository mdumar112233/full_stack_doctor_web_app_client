import React from 'react';

interface IProps {
    id: string;
    department: string;
    doctor: string;
    date: string;
    time: string;
    name: string;
    contact: string;
    status: string;
    index: number
}

const MyAppointmentTbody: React.FC<IProps> = ({id, index, department, doctor, date, time, name, contact, status}) => {
    return (
        <tbody>
                <tr className="font-medium">
                  <td className="py-4 px-6">{index}</td>
                  <td className="py-4 px-6">{department}</td>
                  <td className="py-4 px-6">{doctor}</td>
                  <td className="py-4 px-6">{date}</td>
                  <td className="py-4 px-6">{time} PM</td>
                  <td className="py-4 px-6">{name}</td>
                  <td className="py-4 px-6">{contact}</td>
                  <td className="py-4 px-6">
                    <div className={status == 'pending' ? 'bg-[#3DA5F4] text-white py-2 px-4 rounded-md': status == 'approved' ? 'bg-[#00C689] text-white py-2 px-4 rounded-md' : status == 'cancel' && 'bg-[#F1536E] text-white py-2 px-4 rounded-md'} >
                      {status}
                    </div>
                  </td>
                </tr>
              </tbody>
    );
};

export default MyAppointmentTbody;