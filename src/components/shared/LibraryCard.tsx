import React from 'react';
import { jimType } from '@/type/Type';
import Image from 'next/image';
interface LibraryCardProps {
    item: jimType;
}

const LibraryCard = ({ item }: LibraryCardProps) => {
     
        return (
        <div className="  overflow-hidden rounded-2xl border border-slate-700 bg-[#15171c] text-white shadow-lg">

            {/* Image */}
            <div className="h-[205px] w-full overflow-hidden">
                <Image

                    src={item.image}
                    alt={item.name}
                    width={423}
                    height={205}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Card Content */}
            <div className="px-6 py-6">

                {/* Muscle Groups */}
                <div className="mb-4 flex gap-2">
                    {item.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#b7ff00] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Exercise Name */}
                <h2 className="text-xl font-extrabold uppercase tracking-wide">
                    {item.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-sm text-slate-400">
                    {item.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 border-t border-slate-800"></div>

                {/* Exercise Stats */}
                <div className="flex items-center gap-5 text-sm text-slate-400">

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                         
                        <span>{item.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-2">
                         
                        <span>{item.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                     
                        <span>{item.rating}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LibraryCard;