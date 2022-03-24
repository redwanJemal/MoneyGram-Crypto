import React from "react";

const featureList = [
  {
    id:1,
    titile:'Security gurantee',
    detail:"A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear."
  },
  {
    id:2,
    titile:'Best exchange rates',
    detail:"A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear."
  },
  {
    id:3,
    titile:'Fastest transactions',
    detail:"A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear."
  },
  {
    id:4,
    titile:'A slice of heaven',
    detail:"A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear."
  }
];

const FeatureCard = ({titile, detail}) => {
  return (
    <div className="max-w-md">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg
          className="w-12 h-12 text-deep-purple-accent-400"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
      <h6 className="mb-2 font-semibold leading-5">{ titile }</h6>
      <p className="text-sm text-gray-700">
        { detail }
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="flex flex-col lg:flex-row">
          {<div className="max-w-xl pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              The quick, brown fox jumps over a lazy dog
            </h5>
            <p className="mb-6 text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
              omnis iste natus.
            </p>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>}
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            
            { 
              featureList.map(item => {
                return <FeatureCard key={item.id} titile={item.titile} detail={item.detail} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
