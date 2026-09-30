'use client'
import { PlanContext } from '@/context/PlanContext';

import React, { useContext } from 'react';


const RemoveBtn = ({ id, activeTab }: { id: number, activeTab: string }) => {
    const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = useContext(PlanContext);


    const handleRemove = () => {
        if (activeTab === 'todaysPlan') {
            const updatedTodaysPlan = todaysPlan.filter((plan) => plan.id !== id);
            setTodaysPlan(updatedTodaysPlan);
        }
        else {
            const updatedPlan = savedPlan.filter((plan) => plan.id !== id);
            setSavedPlan(updatedPlan);
        }


    }
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    handleRemove();
                }}
                className="text-lg text-slate-500 transition hover:text-white"
            >
                ×
            </button>
        </div>
    );
};

export default RemoveBtn;