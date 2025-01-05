import { useState } from 'react';

const Accordion = () => {
  const [open, setOpen] = useState(1);

  const questionsAndAnswers = [
    {
      id: 1,
      question: 'What is Jenari?',
      type: 'text',
      answer:
        'Jenari is transforming access to authentic African foods in the UK by connecting customers directly with trusted producers. Our focus on quality, fair pricing, and sustainability allows us to bring fresh African groceries to your door, while supporting the farmers who grow them.',
    },
    {
      id: 2,
      question: 'How does Jenari work?',
      type: 'list',
      answer: [
        'Visit jenari.co.uk and click on "Sign Up."',
        'Complete the required information and click "Create."',
        'A confirmation email will be sent to you to verify your account.',
      ],
    },
    {
      id: 3,
      question: 'How can I place an order?',
      type: 'list',
      answer: [
        'Visit jenari.co.uk or use our mobile app for iOS or Android, and log in.',
        'Browse our categories or use the search bar to find your favorite items.',
        'Add your selected items to the cart and proceed to checkout.',
        'Choose your preferred delivery option.',
        'Pay securely using our online payment options.',
        'An order confirmation will be sent to your email. ',
      ],
    },
    {
      id: 4,
      question: 'How long does delivery take?',
      type: 'text',
      answer:
        'We offer same-day, next-day, and scheduled deliveries from Monday to Saturday. Delivery times may vary based on your location and selected option. No Sunday deliveries.',
    },
    {
      id: 5,
      question: 'Why should I shop at Jenari?',
      type: 'list',
      answer: [
        'Access to fresh, authentic African food items.',
        'Convenient doorstep delivery options.',
        'Competitive pricing with free delivery on orders over £25',
      ],
    },
    {
      id: 6,
      question: 'Can I return an order?',
      type: 'text',
      answer:
        'Yes! If your order meets our return policy criteria, you can return it. Simply contact our customer service within 6 hours of receiving your order to initiate the return process. For more details, see our Return & Refund Policy.',
    },
    {
      id: 7,
      question: 'What payment methods do you accept?',
      type: 'text',
      answer:
        'We accept various payment methods, including card payments, bank transfers, and online payments. Select your preferred payment option at checkout and follow the instructions to complete your purchase.',
    },
    {
      id: 8,
      question: 'Do you offer Pay on Delivery?',
      type: 'text',
      answer:
        'Currently, we do not offer Pay on Delivery. All orders must be prepaid before dispatch.',
    },
    {
      id: 9,
      question: 'How can I use a discount or voucher code?',
      type: 'list',
      answer: [
        'Add items to your cart.',
        'Enter your delivery details at checkout.',
        'In the "Apply Voucher Code" section, enter your code and click "Apply." The discount will be deducted from your total.',
      ],
    },
    {
      id: 10,
      question: 'Do you have a referral program?',
      type: 'text',
      answer:
        'Yes! For every friend or family member who registers with your referral link and makes a purchase, you’ll earn £1. It’s our way of saying thank you for spreading the word!',
    },
    {
      id: 11,
      question: 'Is there a mobile app for Jenari?',
      type: 'text',
      answer:
        'Yes! Our mobile app is available for both iOS and Android devices. Download it from the Apple App Store or Google Play Store for a seamless shopping experience wherever you are.',
    },
    {
      id: 12,
      question: 'Where is Jenari located?',
      type: 'text',
      answer:
        'Our office is located at:\n29 High Street, Worsley, Manchester, M28 3JH.\n\nContact Number: +44 7879 315979\nEmail: hello@jenari.co.uk',
    },
    {
      id: 13,
      question: 'Is my card information secure?',
      type: 'text',
      answer:
        'Absolutely. Your security is our top priority. We use secure, PCI-compliant payment gateways to process your payment details. For more information, see our Privacy Policy.',
    },
    {
      id: 14,
      question: 'Can I order for someone else?',
      type: 'text',
      answer:
        "Yes, you can! Just enter the recipient's delivery details during checkout, and we'll deliver directly to them.",
    },
    {
      id: 15,
      question: 'How do I use my wallet?',
      type: 'text',
      answer:
        'You can use your wallet to pay for orders by selecting it at checkout. You may also fund your wallet for future purchases or receive referral bonuses directly to it.',
    },
    {
      id: 16,
      question: 'Do you offer delivery outside of Manchester?',
      type: 'text',
      answer:
        'Currently, we deliver within Manchester and surrounding areas. We are actively working to expand our service reach in the future.',
    },
    {
      id: 17,
      question: 'How can I get same-day delivery?',
      type: 'text',
      answer:
        'Choose the same-day delivery option at checkout. Orders confirmed before 9 AM are eligible for same-day delivery in Manchester.',
    },
    {
      id: 18,
      question: 'How are delivery charges calculated?',
      type: 'text',
      answer:
        'Delivery fees are calculated based on your location and the weight of your order. Orders over £25 qualify for free delivery, making it even easier to stock up on essentials without additional cost.',
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
                    open === item.id ? 'rotate-180' : 'rotate-0'
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
                open === item.id ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className="p-4 text-gray-700">
                {item.type === 'text' ? (
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

        <div>
          <p>
            If you have any more questions, don’t hesitate to contact us at
            hello@jenari.co.uk or +44 7879 315979. We’re here to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
