import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";

const DashboardTbody: React.FC<any> = (props) => {
    const [approved, setApproved] = useState<string>('')

    const isApproved = true
    const isNotApproved = false
    return (
        <tbody>
                <tr className="font-medium">
                  <td className="py-4 px-6">1</td>
                  <td className="py-4 px-6">2020-02-21</td>
                  <td className="py-4 px-6">2:22 PM</td>
                  <td className="py-4 px-6">Karim</td>
                  <td className="py-4 px-6">9298329838</td>
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
                        
                        <div className='bg-[#F1536E] text-white p-2 rounded cursor-pointer' onClick={props.openModal}>
                            <AiFillDelete />
                        </div>
                    </div>
                  </td>
                </tr>
              </tbody>
    );
};

export default DashboardTbody;