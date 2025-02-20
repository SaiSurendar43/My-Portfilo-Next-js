"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const EmailSection = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const templateParams = {
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        emailjs
            .send(
                "service_nxubt9t",
                "template_z9u1k2w",
                templateParams,
                "TvC_NV6nERIaslcSz"
            )
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                toast.success("Email sent successfully!");
                form.reset(); // Reset the form fields
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                toast.error("Failed to send email. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="bg-custom-gradient scroll-mt-5 lg:-scroll-mt-52 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>

            <ToastContainer position="top-right" autoClose={3000} />
            <div className="grid md:grid-cols-2 mx-10 py-10 pb-10 gap-24 relative">
                <div className="lg:w-[100%] flex lg:justify-end justify-center items-center">
                    <img
                        src="/ddf.png"
                        alt="Ommniverse Gem"
                        className="w-3/4 lg:w-full object-cover rounded-lg"
                    />
                </div>

                <div>
                    <h5 className="text-3xl font-semibold mb-3 bg-[#fff] bg-clip-text text-transparent">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#F5F5F5] font-inter mb-4 max-w-md">
                        I&apos;m currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <form className="flex flex-col" ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#FFFFFFCC] border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#FFFFFFCC] border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="bg-[#FFFFFFCC] border border-gray-300 text-gray-800 text-sm rounded-lg block w-full p-2.5 shadow-md focus:outline-none"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#FFFFFFCC] text-black hover:bg-white rounded-full font-medium py-2.5 px-5 w-full flex items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="animate-spin border-t-2 border-black rounded-full w-5 h-5"></span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
