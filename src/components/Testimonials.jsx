import React from 'react';
import profile from '../assets/profile.svg';

const Testimonials = () => {
  const options = [
    {
      id: 1,
      title: '“This a game changer”',
      description:
        'Finally bought from @JANERI and I gotta say, best decision made ever, not going back again ooo',
      name: 'Clinton Ajayi',
      position: '',
    },
    {
      id: 2,
      title: '“I love JANERI and everything about them”',
      description:
        'Love everything about this app, I can literally shop while scrolling through content...damn!! big ups to the team, this is a product i can confidently share to my friends and family. ',
      name: 'Ifeoluwa King',
      position: '',
    },
    {
      id: 3,
      title: '“Top 3 Platform I’ve used this year”',
      description:
        'Love everything about this app, I can literally shop while scrolling through content...damn!! big ups to the team, this is a product i can confidently share to my friends and family. ',
      name: 'Clinton Ajayi',
      position: 'CEO at Vendorsgate Ltd.',
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
