import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const sendMsg = () => {
    Swal.fire({
      title: "ข้อความถูกส่งสำเร็จแล้ว!",
      text: "เจ้าหน้าที่จะตอบกลับภายใน 24 ชั่วโมง",
      icon: "success",
      comfirmButtonText: "OK",
    });
  };
  return (
    <section className="text-center bg-cover bg-center flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl text-white">Contact</h1>
      <p className="mt-1 text-sm leading-6">สอบถามข้อมูลเพิ่มเติม</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6"
          >
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
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 "
          >
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
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 "
          >
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

        <div className="col-span-full">
          <label
            htmlFor="msg"
            className="block text-sm font-medium leading-6"
          >
            ข้อความ
          </label>
          <div className="mt-2">
            <textarea
              name="msg"
              className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>

      </div>

      <div className="flex space-x-4">
              <button className="btn btn-primary mt-5 w-48 text-white" onClick={sendMsg}>ส่งข้อความ</button>
             </div>
    </section>
  );
}

export default Contact;
