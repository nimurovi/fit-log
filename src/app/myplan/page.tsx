'use client'
import PlanCard from '@/components/shared/PlanCard';
import { PlanContext, PlanContextType } from '@/context/PlanContext';
import React, { useContext, useState } from 'react';


const MyPlanPage = () => {
    const { savedPlan, todaysPlan }: PlanContextType = useContext(PlanContext);
    const [activeTab, setActiveTab] = useState<string>("saved");

    return (
        <div className="container mx-auto mt-8 flex flex-col gap-6 px-4">
            <div>
                <h1>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="bg-[#232732] rounded-lg p-4 ">
                {
                    activeTab === 'todaysPlan' ? (

                        <div className="grid grid-cols-3 gap-4">
                            <h1>Exercise <br /> <span className="text-[#b8ff00] text-2xl font-bold">{todaysPlan.length}</span></h1>
                            <h1>Minute <br /> <span className="text-2xl font-bold">{todaysPlan.reduce((total, plan) => total + plan.duration, 0)}</span></h1>
                            <h1>Calories <br /> <span className="text-2xl font-bold">{todaysPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}</span></h1>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            <h1>Exercise <br /> <span className="text-[#b8ff00] text-2xl font-bold">{savedPlan.length}</span></h1>
                            <h1>Minute <br /> <span className="text-2xl font-bold">{savedPlan.reduce((total, plan) => total + plan.duration, 0)}</span></h1>
                            <h1>Calories <br /> <span className="text-2xl font-bold">{savedPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}</span></h1>
                        </div>
                    )
                }
            </div>
            <div>

                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" onChange={() => { setActiveTab('todaysPlan') }} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {todaysPlan.length > 0 ? (

                            todaysPlan.map((plan) => (

                                <div key={plan.id} className="mb-4">
                                    <PlanCard item={plan} />
                                </div>
                            ))
                        ) :

                            <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
                                <h1 className='text-2xl font-bold'>NOTHING HERE YET</h1>
                                <p>Browse the library and add a lift to get today moving.</p>
                                <button className="btn  rounded-full bg-[#b8ff00] text-black">Go to workouts</button>
                            </div>
                        }
                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked onChange={() => { setActiveTab('saved') }} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            savedPlan.length === 0 ? (
                                <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
                                    <h1 className='text-2xl font-bold'>NOTHING HERE YET</h1>
                                    <p>Browse the library and add a lift to get today moving.</p>
                                    <button className="btn  rounded-full bg-[#b8ff00] text-black">Go to workouts</button>
                                </div>
                            ) :
                                savedPlan.map((plan) => (
                                    <div key={plan.id} className="mb-4">
                                        <PlanCard item={plan} />
                                    </div>
                                ))
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;