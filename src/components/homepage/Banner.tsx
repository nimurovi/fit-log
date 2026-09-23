import React from 'react';
import Image from 'next/image';
import bannerImage from '@/assets/banner.png';
const Banner = () => {
     
    return (
        <section className="  px-6 py-10">
            <div className="container mx-auto  ">

                <div className="flex   items-center justify-between overflow-hidden rounded-2xl border border-[#252830] bg-[#15171c] px-8 py-10 md:px-12 lg:px-14">

                    
                    <div className="max-w-2xl">

                        <p className="mb-5 text-sm font-bold tracking-[0.15em] text-lime-400">
                            WORKOUT LIBRARY
                        </p>

                        <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
                            Train with intent.
                            <br />
                            Log every set.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today&apos;s plan,
                            and watch the week&apos;s work add up.
                        </p>

                        <button
                            className="mt-7 rounded-md bg-lime-400 px-6 py-3 text-sm font-bold uppercase
                            text-black transition hover:bg-lime-300"
                        >
                            Browse Workouts
                        </button>

                    </div>


                    {/* Right Image */}
                    <div className="hidden   items-center justify-center md:flex">
                        <Image
                            src={bannerImage}
                            alt="Banner Image"
                            width={400}
                            height={400}
                            className="rounded-lg object-cover"
                        /> 
                    </div>

                </div>

            </div>
        </section>
    );
};

 
 

export default Banner;