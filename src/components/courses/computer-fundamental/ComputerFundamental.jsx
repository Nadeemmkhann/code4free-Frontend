import React from "react";
import { Link } from "react-router-dom";
import computerNetworks from '../../../images/computer-networks.jpg'
import sql from '../../../images/sql.jpg'
import operatingSystem from '../../../images/operating-system.jpg'



export default function ComputerFundamental() {
  const programmingCourse = [
    {
      id: 1,
      name: "SQL",
      api: "sql",
      image:sql
    },
    {
      id: 2,
      name: "Computer Networks",
      api: "computer-networks",
      image:computerNetworks
    },
    {
      id: 3,
      name: "Operating System",
      api: "operating-system",
      image:operatingSystem
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 ">
        <div className="text-xl my-4 py-2">
        <h1 className="py-4 font-bold text-3xl text-center">Computer Fundamentals</h1>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 ">
        {programmingCourse.map((course) => (
          <div
            key={course.id}
            className="bg-gray-100 border-2 p-4 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border-2 border-gray-400  rounded-lg"
          >
            <div className="relative ">
              <img
                src={course.image}
                alt={course.name}
                className="w-[40%] h-24 tablet:w-[40%] tablet:h-48 object-cover rounded-t-lg mx-auto p-[10px]"
              />
              <div className=" absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 hover:opacity-100 flex justify-center items-center">
                {/* <button className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-md"> */}

                <Link
                  to={"/courses/computer-fundamental/" + course.api}
                  className="fit-content p-2 bg-black text-white hover:bg-slate-600 "
                >
                  Enroll Now
                </Link>

                {/* </button> */}
              </div>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="text-xl font-bold">{course.name}</h3>
              {/* <p className="text-gray-600 mt-2">{course.category}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
