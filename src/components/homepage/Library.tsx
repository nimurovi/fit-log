import React from 'react';
import LibraryCard from '../shared/LibraryCard';
import { jimType } from '@/type/Type';

const libraryData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json(); 
};

const Library = async () => {
    const allLibData= await libraryData();
    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold text-white mb-4">THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6">
                {allLibData.map((item:jimType)=>(
                    <LibraryCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Library;