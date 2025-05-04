import React, { Suspense } from 'react';
import LawyersData from './LawyersData/LawyersData';

const LawyersSection = () => {

    const lawyersData = fetch('lawyersData.json').then(res => res.json()).then(data => data);

    return (
        <div>
            <Suspense fallback={
                <div className="flex justify-center">
                    <span className="loading loading-infinity loading-xl"></span>
                </div>
            }>
                <LawyersData lawyersData={lawyersData}></LawyersData>
            </Suspense>
        </div>
    );
};

export default LawyersSection;