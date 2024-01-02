import React from "react";

function New() {
  const cardsData = [
    {
      title: 'Yamaha Xmax',
      imageUrl: 'https://storagetym.blob.core.windows.net/www2021/images/product-2021/commuter/model-year-2023/xmax-connected-2023/lineup-360-dark-petrol/2.png'
    },
    {
      title: 'Triumph Tiger 1200',
      imageUrl: 'https://www.xparts.net/media/809364/catalog/AK-Moto-S-T12SO6-HJA_04.png'
    },
    {
      title: 'Kawasaki ZX-6R',
      imageUrl: 'https://www.kawasaki.eu/content/dam/products/pim/resource/nin/Resource_296614_24MY_Ninja_ZX-6R_GN1_STU.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.png'
    }
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <section key={index} className="text-center bg-cover bg-center flex flex-col items-center justify-center h-screen">
          <h1 className="text-center mb-5">รถใหม่วันนี้ 🔥</h1>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5">
              <figure>
              
                <img className="w-full bg-white" src={card.imageUrl} alt={card.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary text-white">เช่ารถคันนี้</button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default New;
