import PricingCards from '@/components/PricingCards'
import React from 'react'

function PricingPage() {
  return (
    <div className='isolate overflow-hidden bg-secondary '>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 pb-96 text-center'>
            <div className='mx-auto max-w-4xl'>
                <h2 className='text-base font-semibold leading-7 text-indigo-400 '>Pricing</h2>
                <p className='mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl'>Find the right price for you,{' '} 
                <br className='hidden sm:inline lg:hidden' />
                to connect with others
                </p>
            </div>
            <div className='relative mt-6'>
                <p className='mx-auto max-w-2xl text-lg leading-8 '>
                    A simple native language chat app.
                </p>
                <svg viewBox='0 0 1208 1024'
                className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
                >
                <ellipse 
                cx='604' cy='512' rx='604' ry='512' fill='url(#radial-gradient-pricing)'
                />
                <defs>
                    <radialGradient id='radial-gradient-pricing' >
                    <stop stopColor='#9089FC' />
                    <stop offset='1' stopColor='#FF80B5' />
                    </radialGradient>
                </defs>
                </svg>
            </div>
        </div>

        <div className='flow-root  pb-24 sm:pb-32 '>
            <div className='-mt-80 sm:gap-4 sm:flex sm:justify-center'>
          <PricingCards redirect={true} selectedCardIndex={0} />
          <PricingCards redirect={true} selectedCardIndex={1} />
            </div>
        </div>
    </div>
  )
}

export default PricingPage