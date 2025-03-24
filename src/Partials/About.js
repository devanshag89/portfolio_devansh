import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import background from "../images/background.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import SuccessModal from "./SuccessModal";

function About({ data,student }) {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleFormSubmit = () => {
        setIsSuccessModalOpen(true);
    };
    useEffect(() => {
        AOS.init({
            once: true,
        });
    });

    
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${background})` }}>
            <div data-aos="fade-down" data-aos-duration="800">
                <Header navbar={data.navbar} />
                <div className="w-full p-10">
                    <div className="flex flex-col md:flex-row justify-between max-w-screen mx-auto bg-transparent">
                        <div className="md:w-1/3 flex justify-center items-center mt-10 md:mt-20">
                            <img
                                className="w-60 md:w-80 rounded-xl shadow-lg"
                                src={profile}
                                alt="Profile face"
                            />
                        </div>
                        <div className="md:w-2/3 flex flex-col mt-10 md:mt-16 m-5 md:m-10 md:text-left text-white">
                            <p className="text-2xl md:text-5xl font-bold gradient-heading text-center md:text-left pb-6">
                                Let me Introduce Myself
                            </p>
                            <h1 class="text-2xl font-semibold mb-4 gradient-text">Hi, my name is <span className="gradient-hello font-bold">Devansh Agrawal</span> and I'm from <span className="gradient-hello font-bold">Jhansi, Uttar Pradesh, India</span>.</h1>
                            <p className="text-lg md:text-xl text-center md:text-left text-white leading-relaxed mb-4">
                                I'm an enthusiastic <span className="gradient-hello font-bold">B.Tech Computer Science student</span> with a strong interest in technology. Proficient in programming languages like <span className="gradient-hello font-bold">C, Java and Python</span> with hands-on experience in software projects. Quick learner with excellent <span className="gradient-hello font-bold">problem-solving skills</span>, eager to excel in the field.
                            </p>
                            <p class="text-xl mb-4">
                                I will be graduated with a <span className="gradient-hello font-bold">Bachelor's degree in Computer Science and Engineering in 2026</span>.
                            </p>
                            <p class="text-xl mb-4">
                                As a Full-Stack developer, I enjoy <span className="gradient-hello font-bold">tackling new challenges and continuously expanding my skillset</span>.
                            </p>
                            <p class="text-xl mb-4">
                                I am proficient in <span className="gradient-hello font-bold">Javascript</span>, as well as have knowledge in programming languages such as <span className="gradient-hello font-bold">C, Java, and Python</span>.
                            </p>
                            <p class="text-xl mb-4">
                                I have a passion for working with <span className="gradient-hello font-bold">Node.js, MySQL, and modern Javascript</span> libraries and frameworks like <span className="gradient-hello font-bold">React.js</span>.
                            </p>
                            <p class="text-xl mb-4">
                                I am also interested in building new Web Technologies and Products, as well as exploring areas related to <span className="gradient-hello font-bold">Artificial Intelligence</span>.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-full mx-auto bg-transparent overflow-hidden md:max-w-4xl">
                    <div className="md:flex">
                        <div className="md:w-full">
                            <div className="mb-10">
                                <h3 className="text-5xl font-bold gradient-heading">Educational Details:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
                                    <div>
                                        <h4 className="text-4xl gradient-hello font-bold">10th Grade</h4>
                                        <p className="mt-2 text-white text-xl"><strong>School:</strong> {student.educationDetails.grade10.school}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Board:</strong> {student.educationDetails.grade10.board}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Year:</strong> {student.educationDetails.grade10.year}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Percentage:</strong> {student.educationDetails.grade10.percentage}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl gradient-hello font-bold">12th Grade</h4>
                                        <p className="mt-2 text-white text-xl"><strong>School:</strong> {student.educationDetails.grade12.school}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Board:</strong> {student.educationDetails.grade12.board}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Year:</strong> {student.educationDetails.grade12.year}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Percentage:</strong> {student.educationDetails.grade12.percentage}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl gradient-hello font-bold">Graduation</h4>
                                        <p className="mt-2 text-white text-xl"><strong>Course:</strong> {student.educationDetails.graduation.course}</p>
                                        <p className="mt-2 text-white text-xl"><strong>University:</strong> {student.educationDetails.graduation.university}</p>
                                        <p className="mt-2 text-white text-xl"><strong>Year:</strong> {student.educationDetails.graduation.year}</p>
                                        <p className="mt-2 text-white text-xl"><strong>GPA:</strong> {student.educationDetails.graduation.gpa}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
                <Footer onSubmit={handleFormSubmit} name={data.name} social={data.social} />
            </div>
            <SuccessModal
                show={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
            />
        </div>
    );
}

export default About;