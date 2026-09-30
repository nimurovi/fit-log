import React from "react";
import Image from "next/image";
import { jimType } from "@/type/Type";
import RemoveBtn from "../plandetails/RemoveBtn";
import Link from "next/link";
import MarkBtn from "../plandetails/MarkBtn";
interface PlanCardProps {
    item: jimType;
    activeTab: string;
}
const PlanCard = ({ item, activeTab }: PlanCardProps) => {
    return (
        <div className="flex w-full flex-col gap-4 rounded-xl border border-slate-800 bg-[#15171c] p-3 text-white lg:flex-row lg:items-center">

            {/* Image */}
            <div className="h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-48 lg:h-16 lg:w-24">                <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={64}
                className="object-cover"
            />
            </div>

            {/* Workout Information */}
            <div className="min-w-0 flex-1">

                {/* Workout Name */}
                <h2 className="truncate text-sm font-bold uppercase tracking-wide">
                    {item.name}
                </h2>

                {/* Equipment */}
                <p className="mt-0.5 text-xs text-slate-400">
                    {item.equipment}
                </p>

                {/* Difficulty Label */}
                <div className="mt-1.5">
                    <span className="rounded-full bg-[#b7ff00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                        {item.difficulty}
                    </span>
                </div>

                {/* Stats */}
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[#b7ff00]">
                            ◷
                        </span>

                        <span>
                            {item.duration} min
                        </span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[#b7ff00]">
                            ♨
                        </span>

                        <span>
                            {item.caloriesBurned} kcal
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[#b7ff00]">
                            ☆
                        </span>

                        <span>
                            {item.rating}
                        </span>
                    </div>

                </div>
            </div>

            {/* Buttons */}
            <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:gap-3 lg:w-auto lg:flex-nowrap">
                <Link href={`/workouts/${item.id}`} className="flex-1 sm:flex-none">
                    <button
                        type="button"
                        className="rounded-full border border-slate-600 px-4 py-2 text-xs text-slate-200 transition hover:border-slate-400 hover:text-white"
                    >
                        View Details
                    </button>
                </Link>

                <MarkBtn activeTab={activeTab} />
                <RemoveBtn id={item.id} activeTab={activeTab} />


            </div>
        </div>
    );
};

export default PlanCard;