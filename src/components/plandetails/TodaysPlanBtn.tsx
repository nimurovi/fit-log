'use client'
import { PlanContext } from '@/context/PlanContext';
import { jimType } from '@/type/Type';
import React, { useContext } from 'react';
type TodaysPlanBtnProps = {
    plan: jimType;
};

const TodaysPlanBtn = ({ plan }: TodaysPlanBtnProps) => {
    const { todaysPlan, setTodaysPlan } = useContext(PlanContext);
     
    const handleAddToTodaysPlan = () => {
        if (todaysPlan.some((saved) => saved.id === plan.id)) {
            return;
        } 
        setTodaysPlan([...todaysPlan, plan]);
       
    }
     
    return (
        <div>
            <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#b8ff00] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#c8ff33] active:scale-[0.98]"
                onClick={() => {
                    handleAddToTodaysPlan();
                }
                }
            >
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodaysPlanBtn;