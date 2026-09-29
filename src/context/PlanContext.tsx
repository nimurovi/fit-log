'use client'
 
import { jimType } from '@/type/Type';
import { createContext, useState } from 'react'
export type PlanContextType = {
    todaysPlan: jimType[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<jimType[]>>;
    savedPlan: jimType[];
    setSavedPlan: React.Dispatch<React.SetStateAction<jimType[]>>;
    minute: number;
    setMinute: React.Dispatch<React.SetStateAction<number>>;
    calories: number;
    setCalories: React.Dispatch<React.SetStateAction<number>>;

}
 
export const PlanContext = createContext<PlanContextType>({
    todaysPlan: [],
    setTodaysPlan: () => {},
    savedPlan: [],
    setSavedPlan: () => {},
    minute: 0,
    setMinute: () => {},
    calories: 0,
    setCalories: () => {},
});
 
export default function PlanProvider({
  children,
}: {
  children: React.ReactNode
}) {
    const [todaysPlan,setTodaysPlan] = useState<jimType[]>([]);
    const [savedPlan,setSavedPlan] = useState<jimType[]>([]);
    const [minute,setMinute] = useState<number>(0);
    const [calories,setCalories] = useState<number>(0);

    const planValue={
        todaysPlan,
        setTodaysPlan,
        savedPlan,
        setSavedPlan,
        minute,
        setMinute,
        calories,
        setCalories
    }
 
  return <PlanContext.Provider value={planValue}>{children}</PlanContext.Provider>
}