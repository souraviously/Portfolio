import React, { useState } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Magnet from '../effects/Magnet';
import ScrollFloat from '../effects/ScrollFloat';
import { Bounce, toast } from 'react-toastify';
import { contactServices } from '../../api';

const initialFormState = {
  name: '',
  nameError: 'hidden',
  email: '',
  emailError: 'hidden',
  subject: '',
  subjectError: 'hidden',
  message: '',
  messageError: 'hidden',
};

const ContactMe = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      [`${field}Error`]: 'hidden',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {
      nameError: formData.name.trim() ? 'hidden' : 'block',
      emailError: formData.email.trim() ? 'hidden' : 'block',
      subjectError: formData.subject ? 'hidden' : 'block',
      messageError: formData.message.trim() ? 'hidden' : 'block',
    };

    setFormData((prev) => ({ ...prev, ...nextErrors }));

    if (!formData.name.trim()) return toast.warn('Please enter your name.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    if (!formData.email.trim()) return toast.error('Oops! Please enter your email.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    if (!formData.subject) return toast.info('Uh-oh! Don’t forget your subject.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    if (!formData.message.trim()) return toast.warn('Please add a short message.', { autoClose: 5000, theme: 'dark', transition: Bounce, });

    setIsSubmitting(true);

    try {
      await contactServices.sendContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
      });

      setFormData(initialFormState);
      toast.success('Your message has been sent.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
      toast.success('Thanks for reaching out to us!', { delay: 1000, autoClose: 5000, theme: 'dark', transition: Bounce, });
    } catch (error) {
      toast.error(error.message || 'Something went wrong while sending your message.', { autoClose: 5000, theme: 'dark', transition: Bounce, });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id='Contact' className='my-10 md:my-[112px]'>
        <div className="container">
          <div className="mb-10 md:mb-20">
            <div className='flex items-center justify-center font-poppins text-Primary font-medium text-lg md:text-2xl'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>CONTACT ME</ScrollFloat></div>
            <div className='flex items-center justify-center font-soldier text-Primary font-medium text-2xl md:text-4xl tracking-[2px] md:tracking-[5px] mt-3 md:mt-5'><ScrollFloat animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=70%' scrollEnd='bottom bottom-=40%' stagger={0.03}>NO NEED TO BE SHY</ScrollFloat></div>
          </div>
          <div id="main" className='flex flex-col md:flex-row items-start gap-6 md:gap-10'>
            {/* -----------Left Side-------------- */}
            <form onSubmit={handleSubmit} id="LeftSide" className='w-full md:w-[700px] flex flex-col gap-5 md:gap-[20px]'>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>01</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>What's your name? *</h2>
                </div>
                <input value={formData.name} onChange={(e) => updateField('name', e.target.value)} type="text" className='w-full py-3 md:py-[15px] text-base md:text-[24px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='John Smith' />
                <p className={`text-coffee text-lg ml-10 ${formData.nameError}`}>Please fill out this field.</p>
              </div>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>02</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>What's your Email? *</h2>
                </div>
                <input value={formData.email} onChange={(e) => updateField('email', e.target.value)} type="email" id='email' className='w-full py-3 md:py-[15px] text-base md:text-[24px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='Eren@gmail.com' />
                <p className={`text-coffee text-lg ml-10 ${formData.emailError}`}>Please fill out this field.</p>
              </div>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>03</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>What would you like to talk about? *</h2>
                </div>
                <label htmlFor="subject" className="sr-only">Project Type</label>
                <select value={formData.subject} onChange={(e) => updateField('subject', e.target.value)} id="subject" aria-label="Project Type" className='w-full py-3 md:py-[15px] text-base md:text-[22px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='Web Application build'>
                  <option>Please Choose An Option</option>
                  <option value="fullstack-website">Fullstack website</option>
                  <option value="backend-development">Backend development</option>
                  <option value="webpage">Webpage Build</option>
                  <option value="landing-page">Landing Page Build</option>
                  <option value="eCommerce-website">eCommerce Website</option>
                  <option value="figma-to-website">Figma To Website</option>
                  <option value="web-design">Web Design</option>
                  <option value="custom-website">Custom Website</option>
                  <option value="other">Others</option>
                </select>
                <p className={`text-coffee text-lg ml-10 ${formData.subjectError}`}>Please fill out this field.</p>
              </div>
              <div className='border-1 border-borderCol p-4 md:p-[20px] rounded-xl' data-aos="fade-up">
                <div className='flex items-center gap-4 md:gap-[24px]'>
                  <p className='text-second'>04</p>
                  <h2 className='text-second text-lg md:text-[26px] font-poppins font-medium'>Your message *</h2>
                </div>
                <textarea value={formData.message} onChange={(e) => updateField('message', e.target.value)} name="TextArea" cols={40} rows={5} maxLength={2000} className='w-full pt-3 md:pt-[15px] text-base md:text-[24px] text-borderCol pl-6 md:pl-[40px] outline-none' placeholder='Hello, How can u help me with...'></textarea>
                <p className={`text-coffee text-lg ml-10 ${formData.messageError}`}>Please fill out this field.</p>
              </div>
              <div data-aos="fade-up">
                <button disabled={isSubmitting} className='bg-coffee text-white font-medium font-poppins py-2 md:py-[12px] px-7 md:px-[28px] rounded-full cursor-pointer border-3 border-white outline-4 outline-coffee duration-300 hover:scale-[1.05] hover:bg-Primary hover:outline-Primary hover:outline-6 disabled:cursor-not-allowed disabled:opacity-70'>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {/* -----------Right Side-------------- */}
            <div id="RightSide" className='relative w-full md:w-auto mt-10 md:mt-0'>
              <MdOutlineArrowBack data-aos="fade-up" className='hidden md:block text-[200px] md:text-[300px] rotate-[-45deg] text-borderCol absolute left-[-40px] md:left-[-80px] top-[-40px] md:top-[-80px]' />
              <div className='mt-0 md:mt-[180px]' data-aos="fade-up">
                <p className='font-poppins text-borderCol text-base md:text-[18px] font-medium opacity-50 uppercase'>Let's Talk</p>
                <h2 className='font-poppins text-second font-medium text-base md:text-[19px] max-w-full md:max-w-[500px] mt-4 md:mt-6'>You're just one step away from elevating your brand or product to the next level. Simply fill out the form below to share the details of your project—we’re ready to bring your vision to life.</h2>
              </div>
              <div className='mt-6 md:mt-10 opacity-90'>
                <p className='font-poppins text-borderCol text-base md:text-[18px] font-medium opacity-50 uppercase' data-aos="fade-up">Details</p>
                <div data-aos="fade-up" className='font-poppins text-second font-medium text-base md:text-[19px] max-w-full md:max-w-[500px] mt-4 md:mt-6 uppercase flex items-center gap-3 md:gap-5'>
                  <FaLocationDot />
                  <p>BENGALURU, INDIA</p>
                </div>
                <div data-aos="fade-up" className='font-poppins text-second font-medium text-base md:text-[19px] max-w-full md:max-w-[500px] mt-4 md:mt-6 flex items-center gap-3 md:gap-5'>
                  <MdEmail />
                  <p>souraviously@gmail.com</p>
                </div>
              </div>
              <div data-aos="fade-up" className='mt-6 md:mt-10'>
                <p className='font-poppins text-borderCol text-base md:text-[18px] font-medium opacity-50 uppercase'>Socials</p>
                <div className='mt-4 md:mt-7 flex items-center gap-4 md:gap-7'>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.facebook.com/souraviously' target='_blank'><FaFacebookF className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  {/* <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.instagram.com/' target='_blank'><FaInstagram className='text-[18px] hover-brown' /></a>
                  </Magnet> */}
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://x.com/souraviously' target='_blank'><FaXTwitter className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://github.com/souraviously' target='_blank'><FaGithub className='text-[18px] hover-brown' /></a>
                  </Magnet>
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <a href='https://www.linkedin.com/in/souraviously' target='_blank'><FaLinkedinIn className='text-[18px] hover-brown' /></a>
                  </Magnet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactMe