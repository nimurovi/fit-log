'use client'
import { PlanContext } from '@/context/PlanContext';
import { jimType } from '@/type/Type';
import React, { useContext } from 'react';
type  SavedBtnProps = {
    plan: jimType;
};

const SavedBtn = ({ plan }: SavedBtnProps) => {
    const { savedPlan, setSavedPlan } = useContext(PlanContext);
     
    const handleAddToSaved = () => {
        if (savedPlan.some((saved) => saved.id === plan.id)) {
            return;
        }    
        setSavedPlan([...savedPlan, plan]);
        
    }
     
    return (
        <div>
            <button
                type="button"
                onClick={()=>{
                    handleAddToSaved();
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-medium transition active:scale-[0.98] ${
                    //   saved
                    //     ? "border-[#b8ff00] text-[#b8ff00]"
                    // : 
                    "border-[#30353e] text-gray-300 hover:border-gray-500"
                    }`}
            >
                Save for later
            </button>

             
        </div>
    );
};

export default SavedBtn;