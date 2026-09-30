'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
interface MarkBtnProps { 
    activeTab: string;
}
const MarkBtn = ({ activeTab }:MarkBtnProps) => {
    const [mark, setMark] = useState<boolean>(true);
    const handleMarkAsDone = () => {
        setMark(!mark);
         
        mark ? toast.success("Plan marked as  done!") :
        toast.info("Plan marked as not done!");
    }
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    handleMarkAsDone();
                }}
                className={`flex items-center gap-2 rounded-full ${mark ? 'bg-[#b7ff00]' : 'bg-[#30353e] text-white'} px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#a8eb00] ${activeTab === 'todaysPlan' ? 'visible' : 'hidden'} `}
            >
                {mark ? (<div>
                    <span className="text-sm">
                        ✓
                    </span>

                    Mark as Done
                </div>
                ) : (
                    <div>
                        DONE
                    </div>
                )
                }
            </button>
        </div>
    );
};

export default MarkBtn;