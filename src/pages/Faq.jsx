// import React from "react";

// const Faq = () => {
//   return (
//     <section>
//       <div className="flex flex-col justify-center items-center h-48 bg-[#F9F9F9]">
//         <h1 className="text-3xl text-dark-blue font-bold">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-base text-text-light py-7">
//           Quick answers to questions you may have
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Faq;

// import React, { useState } from "react";

// const Accordion = () => {
//   const [open, setOpen] = useState(1);

//   const toggleAccordion = (index) => {
//     setOpen(open === index ? null : index);
//   };

//   return (
//     <section>
//       <div className="flex flex-col justify-center items-center h-48 bg-[#F9F9F9]">
//         <h1 className="text-3xl text-dark-blue font-bold">
//           Frequently Asked Questions
//         </h1>

//         <p className="text-base text-text-light py-7">
//           Quick answers to questions you may have
//         </p>
//       </div>

//       <div className="grid grid-cols-1  gap-8 py-12 lg:px-24">
//         {/* Accordion 1 */}
//         <div className="space-y-4">
//           <div className="border rounded-lg border[#F0F4FF]">
//             <div className=" p-4">
//               <button
//                 onClick={() => toggleAccordion(1)}
//                 className="flex justify-between w-full text-left"
//               >
//                 <span className="font-semibold text-secondary-bg">
//                   What is Jenari?
//                 </span>
//                 <svg
//                   xmlns="http:www.w3.org/2000/svg"
//                   className={`h-6 w-6 transform transition-transform ${
//                     open === 1 ? "rotate-180" : "rotate-0"
//                   } text-secondary-bg`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div
//               className={`overflow-hidden transition-[max-height] duration-300 ${
//                 open === 1 ? "max-h-screen" : "max-h-0"
//               }`}
//             >
//               <div className="p-4 text-gray-700">
//                 Jenari is a platform designed to connect individuals with the
//                 resources they need to thrive in their personal and professional
//                 lives.
//               </div>
//             </div>
//           </div>

//           {/* Accordion 2 */}
//           <div className="border rounded-lg">
//             <div className="bg-gray-100 p-4">
//               <button
//                 onClick={() => toggleAccordion(2)}
//                 className="flex justify-between w-full text-left"
//               >
//                 <span className="font-semibold">How does Jenari work?</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-6 w-6 transform transition-transform ${
//                     open === 2 ? "rotate-180" : "rotate-0"
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div
//               className={`overflow-hidden transition-[max-height] duration-300 ${
//                 open === 2 ? "max-h-screen" : "max-h-0"
//               }`}
//             >
//               <div className="p-4 text-gray-700">
//                 Jenari works by providing tailored solutions through a network
//                 of expert professionals and modern technology.
//               </div>
//             </div>
//           </div>

//           {/* Accordion 3 */}
//           <div className="border rounded-lg">
//             <div className="bg-gray-100 p-4">
//               <button
//                 onClick={() => toggleAccordion(3)}
//                 className="flex justify-between w-full text-left"
//               >
//                 <span className="font-semibold">Why choose Jenari?</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-6 w-6 transform transition-transform ${
//                     open === 3 ? "rotate-180" : "rotate-0"
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div
//               className={`overflow-hidden transition-[max-height] duration-300 ${
//                 open === 3 ? "max-h-screen" : "max-h-0"
//               }`}
//             >
//               <div className="p-4 text-gray-700">
//                 Jenari offers unmatched expertise and a commitment to helping
//                 users achieve their goals efficiently and effectively.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Accordion;
import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(1);

  const questionsAndAnswers = [
    {
      id: 1,
      question: "What is Jenari?",
      type: "text",
      answer:
        "Jenari is a platform designed to connect individuals with the resources they need to thrive in their personal and professional lives.",
    },
    {
      id: 2,
      question: "How does Jenari work?",
      type: "list",
      answer: [
        "Jenari provides tailored solutions.",
        "It connects you with expert professionals.",
        "It uses modern technology to meet your needs.",
      ],
    },
    {
      id: 3,
      question: "Why choose Jenari?",
      type: "text",
      answer:
        "Jenari offers unmatched expertise and a commitment to helping users achieve their goals efficiently and effectively.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center h-48 bg-[#F9F9F9] mt-40">
        <h1 className="text-2xl lg:text-3xl text-center text-dark-blue font-bold">
          Frequently Asked Questions
        </h1>

        <p className="text-base text-text-light lg:py-7">
          Quick answers to questions you may have
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 py-12 px-6 lg:px-24">
        {questionsAndAnswers.map((item) => (
          <div key={item.id} className="border rounded-lg">
            <div className="bg-gray-100 p-4">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="flex justify-between w-full text-left"
              >
                <span className="font-semibold text-secondary-bg">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform text-secondary-bg ${
                    open === item.id ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                open === item.id ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-700">
                {item.type === "text" ? (
                  <p>{item.answer}</p>
                ) : (
                  <ol className="list-decimal list-inside">
                    {item.answer.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
