import React from 'react';
import { Transition } from '@headlessui/react';
import image from '../../images/image.avif';

const Features = () => {
  const [showAnimation, setShowAnimation] = React.useState(false);

  React.useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="bg-gray-100 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Transition
            show={showAnimation}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            delay={200}
          >
            <h2 className="text-3xl text-center font-extrabold text-gray-900 mb-4">
              Features That Make Us Stand Out
            </h2>
          </Transition>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Transition
              show={showAnimation}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              delay={400}
            >
              <div className="flex items-center text-xl">
                <div className="mr-4">
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                  Free of Cost
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                  Enjoy the benefits of high-quality coding education without any hidden fees or subscriptions. Learn at your own pace, completely free of cost.
                  </p>
                </div>
              </div>
            </Transition>
            <Transition
              show={showAnimation}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              delay={400}
            >
              <div className="flex items-center text-xl">
                <div className="mr-4">
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    Interactive Learning
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    Engage with interactive coding exercises, quizzes, and challenges to reinforce your knowledge and enhance problem-solving skills.
                  </p>
                </div>
              </div>
            </Transition>
            <Transition
              show={showAnimation}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              delay={600}
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    Comprehensive Curriculum
                  </h3>
                  <p className="mt-2 text-xl text-gray-600">
                    Access a wide range of coding courses and tutorials covering various programming languages, web development, and more.
                  </p>
                </div>
              </div>
            </Transition>
            <Transition
              show={showAnimation}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              delay={600}
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                  Expert-Created Content
                  </h3>
                  <p className="mt-2 text-xl text-gray-600">
                  Learn from industry experts and experienced educators who provide high-quality learning materials to ensure a valuable learning experience.
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
