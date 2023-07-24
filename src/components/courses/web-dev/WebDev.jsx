import React from "react";
import { Link } from "react-router-dom";
import html from '../../../images/html.svg'
import css from '../../../images/css.svg'
import javascript from '../../../images/javascript.png'
import react from '../../../images/react.png'
import node from '../../../images/nodejs.png'
import express from '../../../images/express.png'
import mongodb from '../../../images/mongodb.png'

export default function WebDev() {
  const webCourse = [
    {
      id: 1,
      name: "Html",
      api: "html",
      image:html
    },
    {
      id: 2,
      name: "CSS",
      api: "css",
      image:css
    },
    {
      id: 3,
      name: "Javascript",
      api: "javascript",
      image:javascript
    },
    {
      id: 4,
      name: "ReactJS",
      api: "reactjs",
      image:react
    },
    {
      id: 5,
      name: "Node.js",
      api: "nodejs",
      image:node
    },
    {
      id: 6,
      name: "Express.js",
      api: "expressjs",
      image:express
    },
    {
      id: 7,
      name: "MongoDB",
      api: "mongodb",
      image:mongodb
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 ">
        <div className="text-xl my-4 py-2">
        <h1 className="py-4 font-bold text-3xl text-center">Full Stack Web Development</h1>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 ">
        {webCourse.map((course) => (
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
                  to={"/courses/web-dev/" + course.api}
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
