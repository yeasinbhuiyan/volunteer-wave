import { FaArrowRight, FaFacebook, FaGithub, FaGoogle } from 'react-icons/Fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer className="footer   p-10 py-20 ">
                <div>


                    <h1 className="font-bold text-black flex items-center   top-8 "><span className="text-2xl flex items-center text-green-700 font-bold">
                        {/* TODO   */}
                        {/* <img className="w-6 mr-2" src={logo} alt="" /> */}
                        Volunteer </span>  <span className=' ms-2'> Wave</span> </h1>
                    <p className='text-sm font-lg text-black font-semibold w-56'>Connecting volunteers with purposeful opportunities. Empowering communities. Creating positive change. Join Volunteer Wave and make a difference today.</p>
                </div>


                <div>
                    <span className="text-black font-bold text-xl">Legal Information</span>
                    <a className="link text-black link-hover"> Trademarks</a>
                    <a className="link text-black link-hover">Terms of use</a>
                    <a className="link text-black link-hover">Privacy policy</a>
                    <a className="link text-black link-hover"> Cookie Policy</a>
                </div>
                <div>
                    <span className="text-black font-bold text-xl">Services</span>
                    <a className="link text-black link-hover">Shipping & Delivery</a>
                    <a className="link text-black link-hover">Online Delivery</a>
                    <a className="link text-black link-hover">Toy Marketing</a>
                    <a className="link text-black link-hover">Help Center</a>
                </div>

                <div>
                    <span className="text-black font-bold text-xl">About</span>
                    <a className="link text-black link-hover">About us</a>
                    <a className="link text-black link-hover">Contact</a>
                    <a className="link text-black link-hover">Toys Information</a>
                    <a className="link text-black link-hover">Press Contacts</a>
                </div>

                <div>
                    <span className="text-black font-bold text-xl">Subscribe</span>
                    <div className='flex items-center'>
                        <input className='p-3 bg-black text-gray-400 rounded' type="email" name="email" placeholder='Enter Your Email' id="" />
                        <button className='p-4 btn-primary rounded-xl'>
                            <FaArrowRight></FaArrowRight>
                            
                        </button>
                    </div>
                    <div className='gap-4 flex text-2xl text-black mt-5'>
                        <FaGithub></FaGithub>
                        <FaGoogle></FaGoogle>
                        <FaFacebook></FaFacebook>
                    </div>
                </div>
            </footer>
               
             <div>
                <div className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
                    <div className='py-6 text-sm text-center text-black'>
                        © 2023 Volunteer Wave. All rights reserved.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;