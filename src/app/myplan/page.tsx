'use client'
import { PlanContext, PlanContextType } from '@/context/PlanContext';
import React, { useContext } from 'react';


const MyPlanPage = () => {
    const {minute,calories, savedPlan, todaysPlan }: PlanContextType = useContext(PlanContext);
    

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
        </div>
    );
};

export default MyPlanPage;