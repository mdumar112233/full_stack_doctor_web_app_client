import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";

interface IProps {
    openModal: () => void;
    index:  string;
    id: string;
    date: string;
    time: string;
    name: string;
    contact: string;
    setDeleteId: any;
}

const DashboardTbody: React.FC<IProps> = ({id, index, date, time, name, contact, openModal, setDeleteId}) => {
    const [approved, setApproved] = useState<string>('')

    const isApproved = true
    const isNotApproved = false

    const handleDelete = (id: string) => {
        openModal()
        setDeleteId(id)
    }

    return (
        <tbody>
                <tr className="font-medium">
                  <td className="py-4 px-6">{index}</td>
                  <td className="py-4 px-6">{date}</td>
                  <td className="py-4 px-6">{time} PM</td>
                  <td className="py-4 px-6">{name}</td>
                  <td className="py-4 px-6">{contact}</td>
                  <td className="py-4 px-6">
                    <div className='flex items-center'>
                        <div className="bg-[#3DA5F4] w-28 py-1 px-2 rounded mr-3">
                            <select
                                name="select"
                                id=""
                                className="bg-transparent border-none outline-none w-24 text-white"
                            >
                                <option value="approved" className="text-black ">Approved</option>
                                <option value="pending" className="text-black" selected={true}>
                                Pending
                                </option>
                                <option value="cancel" className="text-black">Cancel</option>
                            </select>
                        </div>
                        
                        <div className='bg-[#F1536E] text-white p-2 rounded cursor-pointer' onClick={() => handleDelete(id)}>
                            <AiFillDelete />
                        </div>
                    </div>
                  </td>
                </tr>
              </tbody>
    );
};

export default DashboardTbody;