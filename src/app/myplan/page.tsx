'use client'
import PlanCard from '@/components/shared/PlanCard';
import { PlanContext, PlanContextType } from '@/context/PlanContext';
import React, { useContext } from 'react';


const MyPlanPage = () => {
    const { savedPlan, todaysPlan }: PlanContextType = useContext(PlanContext);


    return (
        <div>
            <div>
                <h1>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div>
                <div>
                    <h1>today plan:{todaysPlan.length}</h1>
                    <h1>minute: {todaysPlan.reduce((total, plan) => total + plan.duration, 0)}</h1>
                    <h1>calories: {todaysPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}</h1>
                </div>
                <div>
                    <h1>saved plan:{savedPlan.length}</h1>
                    <h1>minute: {savedPlan.reduce((total, plan) => total + plan.duration, 0)}</h1>
                    <h1>calories: {savedPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}</h1>
                </div>

            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            todaysPlan.map((plan) => (

                                <div key={plan.id} className="mb-4">
                                    <PlanCard key={plan.id} item={plan} />
                                </div>
                            ))
                        }
                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            savedPlan.map((plan) => (
                                <div key={plan.id} className="mb-4">
                                    <PlanCard key={plan.id} item={plan} />
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