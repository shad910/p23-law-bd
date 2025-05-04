import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero md:h-[500px] mb-20 rounded-3xl"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/fVnkmHcx/banner-img-1.png)",

            }}
        >
          
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-4xl font-extrabold">It avoids subjective claims or<br />exaggeration that might raise<br />red flags legally</h1>
                    <p className="mb-5 font-medium">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a<br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;