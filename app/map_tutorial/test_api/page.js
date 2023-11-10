'use client'
import { useState } from "react";
import { apiTest } from "../data_files/api";

export default function api_test() {

    const [data, setData] = useState(null);

    async function fetchData() {

        // Fetch your data here
        // const response = await fetch('your-api-endpoint');
        // const result = await response.json();

        const response = await apiTest();
        const result = await response;

        setData(result);

        console.log(data)


    }


    return (

        <>
            <h1>
                API Test
            </h1>

            <div>

                <button onClick={fetchData}>Fetch Data</button>
                {data && (
                    <div>
                        {/* {data.map((item) => (
                            <div key={item.name}>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                            </div>
                        ))} */}
                    </div>
                )}

            </div>
        </>
    )
}