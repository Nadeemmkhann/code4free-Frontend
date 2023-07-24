import React from "react";
import webImage from "../../images/web-development.png";
import dataScienceImage from "../../images/data-science.png";
import codingImage from "../../images/coding.png";
import appImage from "../../images/apps-develop.png";
import computerNetwork from "../../images/computer-networking.png";
import dataStructure from "../../images/data-structure.png";
import cs50 from "../../images/cs50.jpg";
import { Link } from "react-router-dom";

const CourseCards = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "Web Development",
      image: webImage,
      api: "web-dev",
    },
    {
      id: 3,
      title: "Programming Languages",
      category: "Programming",
      image: codingImage,
      api: "programming",
    },
    {
      id: 6,
      title: "Data Structures and Algorithms",
      category: "Computer Science",
      image: dataStructure,
      api: "data-structures",
    },
    {
      id: 7,
      title: "CS50",
      category: "Computer Science",
      image: cs50,
      api: "cs50",
    },
    {
      id: 5,
      title: "Computer Fundamentals",
      category: "Computer Science",
      image: computerNetwork,
      api: "computer-fundamental",
    },
    {
      id: 2,
      title: "Data Science",
      category: "Data Science",
      image: dataScienceImage,
      api: "data-science",
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "Mobile Development",
      image: appImage,
      api: "mobile-dev",
    },
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="text-xl my-4 py-2">
        <h1 className="py-4 font-bold text-3xl">What Courses We Offer ?</h1>
      
At code4Free, we offer a wide range of courses to cater to your learning needs. Our course catalog includes web development, mobile app development, programming languages,  data structures and algorithms (DSA) and many more. Explore our top-quality courses, enhance your skills, and unlock exciting opportunities in the tech industry. Join us on a learning journey that empowers you to achieve your goals.

      </div>
      <h2 className="text-2xl font-bold mb-2 text-center">
        Courses You Can Explore
      </h2>
      <hr class="h-px mt-0 mb-8 bg-gray-200 border-0 dark:bg-gray-700 w-[25%]  mx-auto"></hr>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-100 border-2 p-4 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border-2 border-gray-400  rounded-lg"
          >
            <div className="relative ">
              <img
                src={course.image}
                alt={course.title}
                className="w-[40%] h-24 tablet:w-[40%] tablet:h-48 object-cover rounded-t-lg mx-auto"
              />
              <div className=" absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 hover:opacity-100 flex justify-center items-center">
                {/* <button className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-md"> */}
           
                  <Link
                    to={"/courses/" + course.api}
                    className="fit-content p-2 bg-black text-white hover:bg-slate-600 "
                  >
                    Enroll Now
                  </Link>
    

                {/* </button> */}
              </div>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
