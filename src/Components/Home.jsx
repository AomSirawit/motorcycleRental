import React from "react";

function Home(){
    return (
        <>
        <h1 className="text-white">ค้นหารถที่คุณต้องการเช่า</h1>
        <select className="bg-white p-1 rounded-md">
            <option>Honda</option>
            <option>Yamaha</option>
            <option>Suzuki</option>
            <option>Kawasaki</option>
            <option>BMW</option>
            <option>Ducati</option>
            <option>Harley - Davidson</option>
            <option>KTM</option>
            <option>Trimph</option>
        </select>
        <select className="bg-white p-1 rounded-md">
            <option>Sport</option>
            <option>Touring</option>
            <option>Retro</option>
            <option>Big Scooters</option>
            <option>Naked</option>
            <option>Ducati</option>
            <option>Harley - Davidson</option>
            <option>KTM</option>
            <option>Trimph</option>
        </select>
   
        </>
    )
}
export default Home;