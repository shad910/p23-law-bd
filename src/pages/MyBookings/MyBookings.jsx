import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, } from 'react-router';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
    Cell
} from 'recharts';
import { Bounce, toast } from 'react-toastify';
import { getStoredData } from '../../utility/Utility';
import Appointment from '../../components/Appointment/Appointment';


const MyBookings = () => {

    const [appointments, setAppointments] = useState([]);

    const lawyersData = useLoaderData();

    useEffect(() => {
        if (lawyersData && lawyersData.length > 0) {
            const storedData = getStoredData();
            const convertedStoredData = storedData.map(id => parseInt(id));
            const bookAppointment = lawyersData.filter(lawyerData => convertedStoredData.includes(lawyerData.id));
            setAppointments(bookAppointment);
        }

    }, [lawyersData]);


    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const renderCustomBarLabel = ({ x, y, width, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
    };

    const handleTost = () => {
        toast.error('Appointment cancelled', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }



    return (
        <div>
            <br />
            <div>
                {
                    appointments.length > 0 ? (<div className="w-full max-w-4xl mx-auto my-10">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={appointments}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="fee" label={renderCustomBarLabel} shape={<TriangleBar />}>
                                    {appointments.map((appointment, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1', '#d0ed57', '#a4de6c'][index % 7]
                                            }
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                        <br />
                        <div className='text-center space-y-2.5 mt-16 mb-12'>
                            <h2 className='text-2xl font-extrabold'>My Today Appointments</h2>
                            <p className='text-sm text-[#141414b3] font-medium'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                        </div>
                    </div>)


                        : <div className='text-center space-y-2.5 my-[78px]'>
                            <h2 className='text-2xl font-extrabold'>You have not booked any appointment yet</h2>
                            <p className='text-sm text-[#141414b3] font-medium'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                            <Link to="/">
                                <button className='btn btn-outline btn-primary mt-2'>Book an Appointment</button>
                            </Link>
                        </div>

                }

            </div>

            <div>
                {
                    appointments.map(appointment => <Appointment key={appointment.id} appointment={appointment} setAppointments={setAppointments} handleTost={handleTost}></Appointment>)
                }
            </div>
        </div >
    );
};

export default MyBookings;