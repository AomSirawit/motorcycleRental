import React from "react";

function Home() {
  return (
    <>
      <section
        className="text-center bg-cover bg-center flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1535579386897-af3bfc73d110?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div>
          <h1 className="text-white text-center text-4xl font-bold">ค้นหารถที่คุณต้องการเช่า</h1>
          <select className="bg-white p-3 rounded-md w-56 mt-5">
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
          <select className="bg-white p-3 rounded-md w-56 ml-5">
            <option>Sport</option>
            <option>Touring</option>
            <option>Retro</option>
            <option>Big Scooters</option>
            <option>Naked</option>
          </select>
          <button className="btn btn-primary ml-5 w-32 text-white">ค้นหา</button>
        </div>
      </section>
    </>
  );
}
export default Home;
