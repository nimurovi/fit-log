'use client'
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
                <h1>today plan:{todaysPlan.length}</h1>
                <h1>saved plan:{savedPlan.length}</h1>
            </div>
        </div>
    );
};

export default MyPlanPage;