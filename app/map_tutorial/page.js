'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { mapTestData1 } from './data_files/map_intro';

export default function Home() {

    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);



    async function fetchData() {

        // Fetch your data here
        // const response = await fetch('your-api-endpoint');
        // const result = await response.json();

        const result = mapTestData1();

        setData(result);


    }

    async function fetchData2() {

        // Fetch your data here
        // const response = await fetch('your-api-endpoint');
        // const result = await response.json();

        const result = mapTestData1();

        setData2(result);


    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div>
                <button onClick={fetchData}>Fetch Data</button>
                {data && (
                    <div>
                        {data.map((item) => (
                            <div key={item.name}>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <button onClick={fetchData2}>Fetch Data</button>
                {data2 && (
                    <div>
                        {data2.map((item) => (
                            <div key={item.name}>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
