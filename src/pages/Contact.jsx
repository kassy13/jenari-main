import React from "react";
import mail from "../assets/mail.svg";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import whatsapp from "../assets/whatsapp.svg";
import fb from "../assets/Facebook.svg";
import ig from "../assets/instagram.svg";
import ticktok from "../assets/tiktok.svg";
import yt from "../assets/youtube.svg";
const Contact = () => {
  return (
    <div className="px-6 lg:px-16 my-16 flex flex-col lg:flex-row justify-between  gap-6 lg:gap-12 mt-48 lg:mt-56">
      <div className="w-full border p-4 lg:p-9 rounded-xl self-start">
        <p className="text-2xl tracking-tight text-[#0E0E33] pb-4">
          Contact Us
        </p>
        <p className="text-text-light pb-4">
          Have an enquiry or need assistance? We’re just a message away! At
          Jenari, customer service is our top priority, and we’re here to ensure
          you have the best experience possible.
        </p>
        <div className="text-text-light">
          <p>Email</p>
          <div className="flex items-center gap-2 pt-2">
            <img src={mail} alt="" />
            <a
              href="mailto:hello@jenari.co.uk"
              className="text-secondary-bg tracking-tight font-extrabold"
            >
              hello@jenari.co.uk
            </a>
          </div>
        </div>
        <div className="text-text-light pt-4">
          <p>Call</p>
          <div className="flex items-center gap-2 pt-2">
            <img src={call} alt="" className="" />
            <a
              href="tel:+44 7879 315979"
              className="text-secondary-bg tracking-tight font-extrabold"
            >
              +44 7879 315979
            </a>
          </div>
        </div>

        <div className="text-text-light pt-4">
          <p>Address</p>
          <div className="flex items-center gap-2 pt-2">
            <img src={location} alt="" />
            <a
              href=""
              className="text-secondary-bg tracking-tight font-extrabold"
            >
              29 High Street, Worsley, Manchester, M28 3JH.
            </a>
          </div>
        </div>
        <div className="text-text-light pt-4">
          <p>Whatsapp</p>
          <div className="flex items-center gap-2 pt-2">
            <img src={whatsapp} alt="" />
            <a
              href="tel:+44 7879 315979"
              className="text-secondary-bg tracking-tight font-extrabold"
            >
              +44 7879 315979
            </a>
          </div>
        </div>

        <div className="text-text-light pt-4">
          <p>Follow Us on Socials</p>
          <p className="pt-3 text-sm">
            Stay connected with us on social media for updates, special offers,
            and more!{" "}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={ticktok} alt="" />
            <img src={yt} alt="" />
          </div>
          <p className="text-text-light pt-4 text-sm">
            Feel free to reach out to us—we look forward to connecting with you!
            At Jenari, you’re more than just a customer; you’re part of our
            community. Thank you for being here with us.
          </p>
        </div>
      </div>
      <div className="w-full border p-4 lg:p-9 rounded-xl">
        <form action="">
          <p className="text-2xl tracking-tight text-[#0E0E33] pb-4">
            Get in touch!
          </p>
          <p className="text-text-light">
            At Jenari, we’re passionate about providing you with a seamless and
            enjoyable shopping experience. From the moment you place an order to
            the time it arrives at your doorstep, we’re here to make sure
            everything goes smoothly. Whether you have a question, a suggestion,
            or just want to say hello, we’d love to hear from you! Your feedback
            and inquiries are invaluable to us, as they help us continue to
            serve you better.
          </p>
          <div className="pt-8 text-[#000000]">
            <div className="flex flex-col">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                className="bg-gray-100 mt-2 p-3 rounded focus:border-secondary-bg focus:outline-secondary-bg"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="+44"
                className="bg-gray-100 mt-2 p-3 rounded focus:border-secondary-bg focus:outline-secondary-bg"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="phone">Email</label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="bg-gray-100 mt-2 p-3 rounded focus:border-secondary-bg focus:outline-secondary-bg"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="subject">subject</label>
              <input
                type="text"
                id="subject"
                className="bg-gray-100 mt-2 p-3 rounded focus:border-secondary-bg focus:outline-secondary-bg"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="phone"
                className="bg-gray-100 mt-2 p-3 rounded focus:border-secondary-bg focus:outline-secondary-bg h-44"
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                type="submit"
                className="bg-primary-bg text-white p-3 px-8 rounded-full w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
