'use client'
 
import { jimType } from '@/type/Type';
import { createContext, useState } from 'react'
export type PlanContextType = {
    todaysPlan: jimType[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<jimType[]>>;
    savedPlan: jimType[];
    setSavedPlan: React.Dispatch<React.SetStateAction<jimType[]>>;
}
 
export const PlanContext = createContext<PlanContextType>({
    todaysPlan: [],
    setTodaysPlan: () => {},
    savedPlan: [],
    setSavedPlan: () => {}
});
 
export default function PlanProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [todaysPlan,setTodaysPlan] = useState<jimType[]>([]);
    const [savedPlan,setSavedPlan] = useState<jimType[]>([]);

    const planValue={
        todaysPlan,
        setTodaysPlan,
        savedPlan,
        setSavedPlan
    }
 
  return <PlanContext.Provider value={planValue}>{children}</PlanContext.Provider>
}