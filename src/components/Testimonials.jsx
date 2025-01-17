import React from 'react';
import profile from '../assets/profile.svg';

const Testimonials = () => {
  const options = [
    {
      id: 1,
      title: 'Exceptional Quality and Authenticity',
      description:
        '“Jenari has been a lifesaver! The quality of the products is unmatched, and I can finally get authentic African food items delivered straight to my door. Even the hard-to-find brands are available here. Highly recommend!”',
      name: 'Chinwe Okafor',
      position: 'Salford',
    },
    {
      id: 2,
      title: 'Convenient and Reliable Service',
      description:
        '“I was blown away by how easy it was to shop on Jenari. The website is user-friendly, and the doorstep delivery makes everything so convenient. My order arrived on time and in perfect condition!”',
      name: 'Adewale Olatunji',
      position: 'Bolton',
    },
    {
      id: 3,
      title: 'Freshness You Can Trust',
      description:
        '“The freshness of the food I received from Jenari is incredible. I’ve shopped elsewhere before, but nothing compares to the quality and care they provide. It’s a must-try for anyone craving authentic African cuisine.”',
      name: 'Fatima Abubakar',
      position: 'Oldham',
    },
    {
      id: 4,
      title: 'Affordable and Free Delivery Perks',
      description:
        '“Jenari is my go-to marketplace! The prices are super competitive, and I love the free delivery on orders over £100. It’s such a great deal for families like mine who order in bulk.”',
      name: 'Ngozi Chukwu',
      position: 'Rochdale',
    },
    {
      id: 5,
      title: '⁠Excellent Customer Service',
      description:
        '“I had a question about my order, and the customer service team was so helpful and polite. They resolved my query quickly, and I felt truly valued as a customer. Jenari is a marketplace I trust and will continue to shop with!”',
      name: 'Ibrahim Musa',
      position: 'Wigan',
    },
  ];
  return (
    <div className="mx-14 py-12">
      <h2 className="text-center font-extrabold text-2xl text-secondary-bg pb-4">
        What Our Customers Say
      </h2>
      <p className="text-center text-4xl tracking-tight py-3">
        Customer Testimonials
      </p>

      <div className="flex flex-row items-center mt-10 justify-around">
        {options?.map((option) => {
          return (
            <div
              key={option.id}
              className="flex flex-col justify-between my-5 border w-1/4 h-[12rem] rounded-lg p-4"
            >
              <div>
                <h3 className="text-base font-bold text-[#170F49]">
                  {option.title}
                </h3>
                <p className="text-xs pt-1 text-[#6F6C90]">
                  {option.description}
                </p>
              </div>

              <div className="flex flex-row items-center">
                <img src={profile} />

                <div className="ml-3">
                  <p className="font-bold text-base text-[#170F49]">
                    {option.name}
                  </p>
                  {option.position && (
                    <p className="font-normal text-xs text-[#6F6C90]">
                      {option.position}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
