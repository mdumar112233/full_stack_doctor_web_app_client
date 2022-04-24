import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";
import doctor_1 from '../../assets/images/doctor_1.jpg';
import doctor_2 from '../../assets/images/doctor_2.jpg';
import doctor_3 from '../../assets/images/doctor_3.jpg';
import doctor_4 from '../../assets/images/doctor_4.jpg';
import DoctorsDetail from "./DoctorsDetail";
import Header from "../../components/common/Navbar";
import { useEffect } from "react";

const doctor_data = [
    {
        img : doctor_1,
        name : 'Thomas Henry',
        department: 'Cardiology'
    },
    {
        img : doctor_2,
        name : 'Henry Samuel',
        department: 'Medicine'
    },
    {
        img : doctor_3,
        name : 'Alexandar James',
        department: 'Dental'
    },
    {
        img : doctor_4,
        name : 'Edward John',
        department: 'Neurology'
    },
    {
        img : doctor_3,
        name : 'Alexandar James',
        department: 'Cardiology'
    },
    {
        img : doctor_4,
        name : 'Edward John',
        department: 'Pediatric'
    },
    {
        img : doctor_1,
        name : 'Thomas Henry',
        department: 'Traumatology'
    },
    {
        img : doctor_4,
        name : 'Edward John',
        department: 'Medicine'
    },
    {
        img : doctor_2,
        name : 'Henry Samuel',
        department: 'Dental'
    },
    {
      img : doctor_1,
      name : 'Thomas Henry',
      department: 'Neurology'
  },
]

const Doctors: React.FC = () => {
    const [selectDepartment, setSelectDepartment] = useState<number>(1);
    const [department, setDepartment] = useState('')

    const doctor_filter_data = doctor_data.filter(data => data.department === department)

    console.log(doctor_filter_data)
    console.log(department)

    const handleDepartment1 = () => {
      setSelectDepartment(1)
      setDepartment('')
    }

    const handleDepartment2 = () => {
      setSelectDepartment(2)
      setDepartment('Cardiology')
    }

    const handleDepartment3 = () => {
      setSelectDepartment(3)
      setDepartment('Dental')
    }

    const handleDepartment4 = () => {
      setSelectDepartment(4)
      setDepartment('Neurology')
    }

    const handleDepartment5 = () => {
      setSelectDepartment(5)
      setDepartment('Medicine')
    }

    const handleDepartment6 = () => {
      setSelectDepartment(6)
      setDepartment('Pediatric')
    }

    const handleDepartment7 = () => {
      setSelectDepartment(7)
      setDepartment('Traumatology')
    }


    useEffect(() => {
      fetch('http://127.0.0.1:8000/getuser/', {
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwNzA2MDg4LCJpYXQiOjE2NTA3MDQ4ODgsImp0aSI6IjZhOGY0MmYzOWQwZTRmNGY4ZjFkNjJkYzgzOTc5NjMyIiwidXNlcl9pZCI6Mn0.0HZSK-5PMe5CkIjoUpBN7DY4MxQ2uKj196UxINL4lC4'}`}
      })
      .then(res => res.json())
      .then(data => console.log(data))

    }, [])

  return (
    <section>
      {/* doctors first banner */}
      <Header />
      <div className="text-black bg-service_banner_1 h-80 bg-center">
        <div className="bg-[#273e67] h-80 opacity-90 text-white text-center pt-28">
          <p>All Doctors</p>
          <h1 className="md:text-5xl xm:text-3xl text-2xl font-bold">
          Specalized Doctors
          </h1>
        </div>
      </div>

      {/* doctors card */}
      <div className="w-[90%] xm:w-[80%] mx-auto">
        <div className="text-center my-16">
          <h1 className="text-4xl text-main-color font-bold">Doctors</h1>
          <div className="flex justify-center flex-row my-3">
            <div className="bg-pink-color w-10 h-1"></div>
          </div>
          <p className="text-main-normal md:w-3/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            cupiditate distinctio libero rem deserunt delectus!!
          </p>
        </div>

        {/* select department */}
        <div className="mb-10">
            <ul className="grid grid-flow-row xl:grid-cols-7 lg:grid-cols-6 tablet:grid-cols-4 md:grid-cols-3 2xm:grid-cols-2 grid-cols-1 items-center gap-4 font-bold">
                <li className={selectDepartment === 1 ? 'bg-pink-color text-white py-2 px-3 rounded text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment1}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">All Department</Link>
                </li>
                <li className={selectDepartment === 2 ? 'bg-pink-color text-white py-2 px-3 rounded cursor-pointer text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment2}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">Cardiology</Link>
                </li>
                <li className={selectDepartment === 3 ? 'bg-pink-color text-white py-2 px-3 rounded cursor-pointer text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment3}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">Dental</Link> 
                </li>
                <li className={selectDepartment === 4 ? 'bg-pink-color text-white py-2 px-3 rounded cursor-pointer text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment4}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">Neurology</Link>
                </li>
                <li className={selectDepartment === 5 ? 'bg-pink-color text-white py-2 px-3 rounded cursor-pointer text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment5}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">Medicine</Link>
                </li>
                <li className={selectDepartment === 6 ? 'bg-pink-color text-white py-2 px-3 rounded cursor-pointer text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment6}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">Pediatric</Link>
                </li>
                <li className={selectDepartment === 7 ? 'bg-pink-color text-white py-2 px-3 rounded cursor-pointer text-center':'text-center py-2 px-3 hover:bg-pink-color transition-all hover:text-white rounded cursor-pointer'} onClick={handleDepartment7}>
                    <Link to='#' className="xl:text-[1.1vw] text-sm">Traumatology</Link>
                </li>
            </ul>
        </div>

        {/* doctors */}
        <div className="grid grid-flow-row tablet:grid-cols-4 md:grid-cols-3 xm:grid-cols-2 grid-cols-1 my-10 gap-7  justify-center">
            {
              department != '' ? (
                doctor_filter_data.map(doctor => <DoctorsDetail img={doctor.img} name={doctor.name} department={doctor.department} />)
              ) : (
                doctor_data.map(doctor => <DoctorsDetail img={doctor.img} name={doctor.name} department={doctor.department} />)
              )
            }
        </div>
        
      </div>

      {/* doctors second banner */}
      <div className="bg-service_banner_2 bg-center h-[28rem]">
        <div className="w-[80%] tablet:w-[80%] mx-auto pt-28">
          <div className="tablet:w-[60%] md:w-[70%]">
            <div className="bg-pink-color w-10 h-1"></div>
            <h1 className="text-3xl sm:text-5xl font-bold my-8">
              We are pleased to offer you the{" "}
              <span className="text-main-color">
                chance to have the healthy
              </span>
            </h1>

            <Link to="/appointment">
              <div className="mt-4 text-white hover:bg-main-color bg-pink-color md:w-60 w-48 py-3 px-4 rounded-3xl transition-all flex items-center justify-between cursor-pointer">
                <p className="text-sm md:text-base">MAKE APPOINMENT</p>
                <BiChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>

      </div>

      <Footer />
    </section>
  );
};

export default Doctors;
