import React from 'react'
import  Link  from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ( { heroBanner: {buttonText} } ) => {
  return (
    <div className="md:ml-40 h-fit bottom-20 md:w-auto absolute flex w-10/12 ml-10 text-white">
      <div className='w-fit items-end m-auto'>
        <p>Since 1642</p>
        <h1 className="text-3xl uppercase font-thin md:font-normal tracking-[0.2em]">Trinkets fit for a witch</h1>
        {/* <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image"  /> */}
        <div>
          <Link href={`/products`}>
            <button type="button" className='transition-all duration-300 hover:bg-purple-800 rounded-2xl p-3 mt-5 bg-[#745da7]'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner