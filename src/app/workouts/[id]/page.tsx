 
import React from 'react';
import Image from 'next/image';
import TodaysPlanBtn from '@/components/plandetails/TodaysPlanBtn';
import SavedBtn from '@/components/plandetails/SavedBtn';
    const indivisualWorkout = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } =await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    return res.json();
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const workout = await indivisualWorkout({ params });
    console.log("workout",workout);
    return (

        <section className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

                    {/* ================= IMAGE ================= */}
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={800}
                            height={600}
                            className="h-full min-h-[400px] w-full object-cover object-center sm:min-h-[500px] lg:min-h-[630px]"
                        />
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {workout.muscleGroups?.map((muscle: string, index: number) => (
                                <span
                                    key={`${muscle}-${index}`}
                                    className="rounded-full bg-[#b8ff00] px-4 py-1.5 text-sm font-semibold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= INFO TABLE ================= */}
                        <div className="mt-7 overflow-hidden rounded-2xl border border-[#242932] bg-[#15191f]">

                            {/* Equipment */}
                            <div className="flex justify-between border-b border-[#242932] px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Equipment
                                </span>

                                <span className="text-sm text-gray-300">
                                    {workout.equipment}
                                </span>
                            </div>


                            {/* Difficulty */}
                            <div className="flex justify-between border-b border-[#242932] px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Difficulty
                                </span>

                                <span className="text-sm text-gray-300">
                                    {workout.difficulty}
                                </span>
                            </div>


                            {/* Sets */}
                            <div className="flex justify-between border-b border-[#242932] px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Sets
                                </span>

                                <span className="text-sm text-gray-300">
                                    {workout.sets}
                                </span>
                            </div>


                            {/* Reps */}
                            <div className="flex justify-between border-b border-[#242932] px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Reps
                                </span>

                                <span className="text-sm text-gray-300">
                                    {workout.reps}
                                </span>
                            </div>


                            {/* Duration */}
                            <div className="flex justify-between border-b border-[#242932] px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Duration
                                </span>

                                <span className="text-sm text-gray-300">
                                    {workout.duration} min
                                </span>
                            </div>


                            {/* Calories */}
                            <div className="flex justify-between border-b border-[#242932] px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Calories
                                </span>

                                <span className="text-sm text-gray-300">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>


                            {/* Rating */}
                            <div className="flex justify-between px-5 py-4">
                                <span className="text-xs font-bold uppercase text-gray-500">
                                    Rating
                                </span>

                                <span className="text-sm text-gray-300">
                                    ⭐ {workout.rating}
                                </span>
                            </div>

                        </div>

                        {/* ================= INSTRUCTIONS ================= */}
                        <div className="mt-8">
                            <h2 className="text-lg font-bold uppercase tracking-wide">
                                Instructions
                            </h2>

                            <ol className="mt-4 space-y-4">
                                {workout.instructions?.map((instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-sm leading-6 text-gray-400"
                                    >
                                        <span className="shrink-0 text-gray-300">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* ================= BUTTONS ================= */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                             <TodaysPlanBtn plan={workout}></TodaysPlanBtn>
                             
                            <SavedBtn plan={workout}></SavedBtn>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default page;