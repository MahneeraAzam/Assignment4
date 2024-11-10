import Header from '@/components/Header'
import Image from 'next/image'
// import React from 'react'
// import {libreBodoni} from '@/font'

function Home() {
  return (
    <div className='h-screen justify-center'>
        <Header/>
        <div className='flex h-[80%]'>
            <div className='w-1/3'>
            <h1 className='m-12 font-serif text-[40px] font-bold'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className='m-12 p-[17px] pl-[2px] text-[30px] font-medium text-[#787054]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

            <button className='m-12 w-[177px] h-[38px] font-serif text-xl text-white bg-[#A29875] rounded-lg left-44 gap-[10px] py-10px'>Explore Now</button>
            </div>
            
            <div className='md:w-1/3 flex justify-end items-center top-28px left-24px rounded-xl border-white relative'>
            <Image src={"/myImage/figmaImg.svg.svg"} alt="figma Image" width={490} height={667}></Image></div>
        </div>
    </div>
  )
}

export default Home

// font-family: Libre Bodoni;
// font-size: 40px;
// font-weight: 700;
// line-height: 65.8px;
// letter-spacing: 0.025em;
// text-align: left;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;
