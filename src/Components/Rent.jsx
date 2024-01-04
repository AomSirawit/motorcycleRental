import React from "react";
import Swal from "sweetalert2";

function Rent(){
    const rentButton = () =>{
        Swal.fire({
            title: 'สำเร็จ!',
            text: 'กรุณารอเจ้าหน้าที่ติดต่อกลับ',
            icon: 'success',
            comfirmButtonText: 'OK'
        });        
    }
    const clearButton = () =>{
        Swal.fire({
            title: "ต้องการล้างข้อมูล?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "ล้างข้อมูลสำเร็จ!",
                icon: "success"
              });
            }
          });
        };

   
        return(
        <section  className="text-center bg-cover bg-center flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl text-white">เช่ารถ</h1>
          <p className="mt-1 text-sm leading-6">ใส่ข้อมูลที่อยู่และรถที่ต้องการเช่า</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                ชื่อ
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                นามสกุล
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                อีเมล
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="motocycle" className="block text-sm font-medium leading-6">
                รถที่ต้องการเช่า
              </label>
              <div className="mt-2">
                <select
                  id="motocycle"
                  name="motocylcle"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Yamaha Xmax</option>
                  <option>Kawasaki ZX-6R</option>
                  <option>Triumph Tiger 1200</option>
                </select>
              </div>
            </div>

            
            
            <div className="sm:col-span-3">
              <label htmlFor="tel" className="block text-sm font-medium leading-6 ">
                เบอร์โทรศัพท์
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="tel"
                  id="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                วันที่ต้องการเช่า
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6">
                ที่อยู่
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6">
                เขต
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 ">
                จังหวัด
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 ">
              <label htmlFor="postal-code" className="block text-sm font-medium">
                รหัสไปรษณีย์
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
             
            </div>
          </div>
          <div className="flex space-x-4">
              <button className="btn btn-primary mt-5 w-48 text-white" onClick={rentButton}>เช่ารถ</button>
             <button className="btn btn-error mt-5 w-48 text-white" onClick={clearButton}>ล้างข้อมูล</button>
             </div>
    
        </section>
    )
}
export default Rent;