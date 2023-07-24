import React from "react";
import Header from "../homepage/Header";
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react';
// import React from 'react';

export default function Aboutus() {
    const [showAnimation, setShowAnimation] = React.useState(false);

    React.useEffect(() => {
      setShowAnimation(true);
    }, []);
  return (
    <div>
                <Transition
          show={showAnimation}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          delay={400}
        >
          
      <div className="bg-gray-100 p-4 h-[84vh] pt-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to code4Free, your ultimate destination for free coding
            education. Our platform is dedicated to providing high-quality
            coding courses, tutorials, and resources to learners all around the
            world. We believe that knowledge should be accessible to everyone,
            regardless of their financial resources or educational background.
          </p>
          <p className="text-lg mb-4">
            At code4Free, we are committed to empowering individuals with the
            skills and knowledge required to thrive in the digital age. Whether
            you're a beginner starting your coding journey or an experienced
            programmer looking to expand your skill set, our platform offers a
            diverse range of courses covering various programming languages, web
            development, software engineering, data science, and more.
          </p>
          <p className="text-lg mb-4">
            Our courses are created by industry experts and experienced
            educators, ensuring that you receive the highest quality learning
            materials. We also emphasize hands-on learning, providing coding
            exercises, projects, and challenges that allow you to apply your
            knowledge in practical ways. Through interactive learning
            experiences, you'll develop problem-solving skills and gain
            real-world coding experience.
          </p>
          <p className="text-lg mb-4">
            Join our vibrant community of learners, where you can connect with
            like-minded individuals, collaborate on projects, and seek guidance
            from experienced mentors. Learning becomes more enjoyable and
            engaging when you have a support network to lean on.
          </p>
          <p className="text-lg">
            Start your coding journey with code4Free today and unlock endless
            opportunities for personal and professional growth. We are dedicated
            to providing a learning experience that is both high-quality and
            free of cost, because we believe in the power of education to
            transform lives.
          </p>
        </div>
      </div>
        </Transition>
      <Link to="/about"></Link>
    </div>
  );
}
