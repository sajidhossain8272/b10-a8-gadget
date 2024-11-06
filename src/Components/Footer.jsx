const Footer = () => {
  return (
    <div>
      <footer className='footer footer-center bg-white text-black p-10'>
        <aside>
          <p className='sora-bold text-2xl'>Gadget Heaven</p>
          <p className='sora-medium'>
            {" "}
            Leading the way in cutting-edge technology and innovation.
          </p>
        </aside>
        <nav>
          <div className='grid grid-flow-col gap-4'></div>
        </nav>
        <div className='footer flex justify-center lg:gap-40 sora-regular '>
          <nav>
            <h6 className='footer-title sora-regular'>Services</h6>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
          </nav>
          <nav className='pr-5'>
            <h6 className='footer-title'>Company</h6>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Jobs</a>
            <a className='link link-hover'>Press kit</a>
          </nav>
          <nav className='pr-2'>
            <h6 className=' footer-title'>Legal</h6>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </nav>
        </div>
        <p>
          Copyright © Gadget Heaven {new Date().getFullYear()} - All right
          reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
