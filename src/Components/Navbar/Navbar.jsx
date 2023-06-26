import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/all-volunteers',
        title: 'All Volunteers'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
    {
        path: '/events',
        title: 'Events'
    }
]


const Navbar = () => {
    // const navigationlink = <>


    //     <li><Link  href={'/'}>Home</Link></li>
    //     <li><Link href={'/'}>About</Link></li>

    //     <li><Link href={'/'}> Events </Link></li>
    //     <li><Link href={'/'}> Blogs </Link></li>


    // </>
    return (
        <div className="navbar  bg-gradient-to-r md:px-5 bg-opacity-30  text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="space-y-5   bg-opacity-70 bg-black menu-compact dropdown-content mt-3 p-6 shadow  rounded-box w-52">


                        {navLinks.map(({ path, title }) => (
                            <li className='mx-2 text-black' key={path}>
                                <NavLink
                                    exact={path === '/'}
                                    activeClassName="text-blue-500"
                                    href={path}>{title}</NavLink>

                            </li>
                        ))}


                        {/* {navigationlink} */}




                    </ul>
                </div>
                {/* <img className='md:w-72 w-24 h-8 md:h-20' src={logo} alt="" /> */}
                <div className="">



                    <h1 className="font-bold flex text-black items-center w-full"><span className="text-2xl text-green-700 flex items-center">  Volunteer  </span>  <span className="ms-2">Wave</span></h1>
                </div>
            </div>




            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">

                    {navLinks.map(({ path, title }) => (
                        <li className='mx-2 text-black' key={path}>
                            <NavLink
                                exact={path === '/'}
                                activeClassName="text-blue-500"
                                href={path}>{title}</NavLink>

                        </li>
                    ))}
                    {/* {navigationlink} */}

                </ul>
            </div>








            {/* <div className="navbar-end gap-3">
                {
                    user ? <button onClick={handleLogOut} className='btn btn-outline btn-success'>Log Out</button> :
                        <Link to='/login' className="btn">Login</Link>
                }

                <button onClick={() => setAdmin(!admin)} className='btn btn-success'> Admin </button>



            </div> */}
        </div>
    );
};

export default Navbar;