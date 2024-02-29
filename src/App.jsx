/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { webDesktop, webMobile } from "./assets/images/index";
import { products } from './constants';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && <div className="overlay"></div>}
      <div className="h-dvh bg-Off-white flex relative">
        <div className="w-full md:w-4/5 px-[5%] md:px-0 mx-auto h-fit">
          {/* navigation */}
          <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          {/* content */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap8">
            {/* one */}
            <div className="flex flex-col w-full lg:w-[70%]">
              <img src={webMobile} alt="web mobile" loading="lazy" className="block md:hidden" />
              <img src={webDesktop} alt="web desktop" loading="lazy" className="hidden md:block" />
              <div className="flex flex-col md:flex-row mt-3 gap-3">
                <div className="w-full md:w-1/2">
                  <h1 className="text-4xl md:text-3xl lg:text-[55px] lg:leading-none font-extrabold">The Bright Future of Web 3.0?</h1>
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap5 lg:gap10">
                  <p className="text-xs mb5 lg:text-base text-Dark-grayish-blue">We dive into the next evolution of the web that claims to put the power of the platforms  back into the hands of the people. But is it really fulfilling its promise?</p>
                  <button className="bg-Soft-red text-Off-white px-8 py-2 w-fit capitalize cursor-pointer hover:bg-Very-dark-blue mt-5">Read more</button>
                </div>
              </div>
            </div>
            {/* very dark blue section */}
            <div className="flex flex-col lg:w-[30%] bg-Very-dark-blue font-bold px-5 py-7">
              <h1 className="text-Soft-orange text-3xl">New</h1>
              <div className="flex flex-col mt-5 divide-Off-white h-full justify-between">
                {/* one */}
                <div className="flex flex-col">
                  <h4 className="text text-Off-white hover:text-Soft-orange cursor-pointer mb-2">Hydrogen VS Electric Cars</h4>
                  <p className="text-Grayish-blue font-light text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr className="line my-3 lg:my-0" />
                {/* two */}
                <div className="flex flex-col">
                  <h4 className="text text-Off-white hover:text-Soft-orange cursor-pointer mb-2">The Downsides of AI Artistry</h4>
                  <p className="text-Grayish-blue font-light text-sm">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                {/* three */}
                <hr className="line my-3 lg:my-0" />
                <div className="flex flex-col">
                  <h4 className="text text-Off-white hover:text-Soft-orange cursor-pointer mb-2">Is VC Funding Drying Up?</h4>
                  <p className="text-Grayish-blue font-light text-sm">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
              </div>
            </div>
          </div>
          {/* another section */}
          <div className="flex flex-col lg:flex-row gap-5 md:gap-2 justify-between mt-5 md:mt-10 mb-4">
            {products.map(({ id, icon, alt, number, head, body }) => {
              return (
                <div key={id} className="flex flex-row gap-5">
                  <img src={icon} alt={alt} loading="lazy" className="h-[150px]" />
                  <div className="flex flex-col gap-2 mt-2">
                    <h1 className="text-3xl font-bold text-Grayish-blue">{number}</h1>
                    <h3 className="text-Very-dark-blue font-semibold hover:text-Soft-red cursor-pointer lg:text-sm">{head}</h3>
                    <p className="text-sm lg:text-xs font-light text-Dark-grayish-blue">{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* attribution */}
      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blueC"> Frontend Mentor</a>.
        Coded by <a href="https://devemma.netlify.app/" target="_blank" className="text-blueC"> Emmanuel Tofunmi</a>.
      </div>
    </>
  )
}

export default App
