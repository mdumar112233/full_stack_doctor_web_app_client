import React from 'react';
import lab_img from '../../assets/images/flask.png';
import heart_img from '../../assets/images/heart.png';
import tooth_img from '../../assets/images/tooth.png';
import injury_img from '../../assets/images/injury.png';
import brain_img from '../../assets/images/brain.png';
import dna_img from '../../assets/images/dna.png';

const OurService: React.FC = () => {
    return (
        <section className='bg-[#f4f9fc] h-auto pb-10 pt-48'>
            <div className='w-[90%] xm:w-[80%] mx-auto mb-20'>
            {/* service detail */}
            <div className='text-center'>
                <h1 className='text-3xl text-main-color font-bold'>Award winning patient care</h1>
                <div className='flex justify-center flex-row my-3'><div className="bg-pink-color w-10 h-1"></div></div>
                <p className='text-main-normal md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cupiditate distinctio libero rem deserunt delectus! Sapiente cupiditate distinctio libero rem deserunt delectus!</p>
            </div>
            
            {/* service card */}
            <div className='grid grid-flow-row tablet:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                <div className='bg-white rounded-lg h-auto py-8 pl-8 pr-5'>
                    <div className='flex items-center space-x-4'>
                        <img src={lab_img} alt='lab_img' className='h-10' />
                        <p className='font-bold text-xl tablet:text-[17px] xl:text-xl'>Laboratory service</p>
                    </div>
                    <p className='text-main-normal mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus?</p>
                </div>

                <div className='bg-white rounded-lg h-auto py-8 pl-8 pr-4'>
                    <div className='flex items-center space-x-4'>
                        <img src={heart_img} alt='heart_img' className='h-10' />
                        <p className='font-bold text-xl tablet:text-[17px] xl:text-xl'>Heart Disease</p>
                    </div>
                    <p className='text-main-normal mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus?</p>
                </div>

                <div className='bg-white rounded-lg h-auto py-8 pl-8 pr-4'>
                    <div className='flex items-center space-x-4'>
                        <img src={tooth_img} alt='tooth_img' className='h-10' />
                        <p className='font-bold text-xl tablet:text-[17px] xl:text-xl'>Dental Care</p>
                    </div>
                    <p className='text-main-normal mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus?</p>
                </div>

                <div className='bg-white rounded-lg h-auto p-8'>
                    <div className='flex items-center space-x-4'>
                        <img src={injury_img} alt='tooth_img' className='h-12' />
                        <p className='font-bold text-xl tablet:text-[17px] xl:text-xl'>Body Surgery</p>
                    </div>
                    <p className='text-main-normal mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus?</p>
                </div>

                <div className='bg-white rounded-lg h-auto p-8'>
                    <div className='flex items-center space-x-4'>
                        <img src={brain_img} alt='brain_img' className='h-10' />
                        <p className='font-bold text-xl tablet:text-[17px] xl:text-xl'>Neurology Surgery</p>
                    </div>
                    <p className='text-main-normal mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus?</p>
                </div>

                <div className='bg-white rounded-lg h-auto p-8'>
                    <div className='flex items-center space-x-4'>
                        <img src={dna_img} alt='dna_img' className='h-10' />
                        <p className='font-bold text-xl tablet:text-[17px] xl:text-xl'>Gynecology</p>
                    </div>
                    <p className='text-main-normal mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellendus?</p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default OurService;