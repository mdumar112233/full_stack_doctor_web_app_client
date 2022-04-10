import React from 'react';

interface IProps {
    img: string;
    name: string;
    department: string;
}

const DoctorsDetail: React.FC<IProps> = ({img, name, department}) => {
    return (
        <div className='justify-self-center'>
                <img src={img} alt="doctor_1" />
                <h2 className="text-xl font-bold mt-4 mb-2">{name}</h2>
                <p className="text-main-normal">{department}</p>
            </div>
    );
};

export default DoctorsDetail;