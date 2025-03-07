"use client"
import Image from "next/image";
import React from "react";

const LocationsSector = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 min-h-[30vh] rounded overflow-hidden border ">
          <div className=" flex flex-col justify-between items-center min-h-[30vh]">
            <div className="bg-black-base-bg py-2 text-center px-4 w-full text-[12px]">
              Dallas
            </div>
            <p className="text-center px-2 text-[12px]">
              214.428.8181 Fax: 214.428.8127 7239 Envoy Court Dallas 75247
            </p>
            <div className="pb-4 text-center text-[12px]">MORE INFO</div>
          </div>

          <div className=" flex flex-col justify-between min-h-[30vh] items-center">
            <div className="bg-black-base-bg py-2 text-center px-4 w-full text-[12px]">
              Fort Worth
            </div>
            <p className="text-center px-2 text-[12px]">
              817.332.8116 Fax: 817.332.2145 3450 Alemeda Street Suite 343 Ft.
              Worth 76126
            </p>
            <div className="pb-4 text-center text-[12px]">MORE INFO</div>
          </div>

          <div className=" flex flex-col justify-between md:col-span-3  xl:col-span-1 min-h-[30vh] items-center">
            <div className="bg-black-base-bg py-5 text-center px-4 w-full"></div>
            <div className="h-full py-6 -mt-32  bg-green400">
              <Image
                alt="map"
                className="h-full w-full"
                src="/texas.png"
                height={500}
                width={500}
              />
            </div>

            {/* <div className="bg-black-base-bg py-2 text-center px-4 w-full">
              Dasss
            </div>
            <p className="text-center px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quod laboriosam, hic voluptas nisi fugiat perspiciatis dolorum
              officiis necessitatibus dolores?
            </p>
            <div className="pb-4 text-center">scscdsc</div> */}
          </div>

          <div className=" flex flex-col justify-between min-h-[30vh] items-center">
            <div className="bg-black-base-bg py-2 text-center px-4 w-full text-[12px]">
              Austin / San Antonio
            </div>
            <p className="text-center px-2 text-[12px]">
              512.312.9220 Cell: 512.520.7753 100 Precision Drive Suite 301 Buda
              78610
            </p>
            <div className="pb-4 text-center text-[12px]">MORE INFO</div>
          </div>

          <div className="bg-red400 flex-1 flex flex-col justify-between min-h-[30vh] items-center">
            <div className="bg-black-base-bg py-2 text-center px-4 w-full text-[12px]">
              Houston
            </div>
            <p className="text-center px-2 text-[12px]">
              281.445.9021 Fax: 281.445.9027 14850 Woodham Drive Suites B-135
              and B-130 Houston 77073
            </p>
            <div className="pb-4 text-center text-[12px]">MORE INFO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSector;
