import React, { useEffect, useState } from 'react'

const Personajes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const url = "https://rickandmortyapi.com/api/character";
                const data = await fetch(url);
                const res = await data.json();
                setData(res.results)

            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {
                data.map(item => {
                    return (
                        <div key={item.id} className="w-fit bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg" src={item.image} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.gender}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    

    
}

export default Personajes