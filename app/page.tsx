import { authOptions } from '@/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'


export default async function Home() {

  return (
    <main >
      <div className='relative isolate pt-14 bg-secondary pb-32 overflow-hidden '>
     <div
     className='absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl'
     aria-hidden="true"
     >
      <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
      style={{
        clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
      }}
      />
      </div>

      <div className='py-12 sm:py-20 lg:pb-40'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-primary sm:text-6xl'>
            Connect Globally, Communicate Locally.
            </h1>
            <p className='mt-6 text-lg leading-8 text-primary'>
              Chat with <span className="before:block before:absolute before:-inset-0 before:-skew-y-3 before:bg-[#ff70d6] relative inline-block mx-1 "><span className="relative text-white m-1">anyone in any</span></span>  language.
            </p>
            <p className='text-indigo-400 text-xl font-bold'>
              Let OmniChat do the translation for you.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link href={'/chat'} prefetch={false} className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                Get Started
              </Link>
              <Link href={'/pricing'} prefetch={true} className="text-sm font-semibold leading-6 text-primary">
                Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
            <div className='mt-16 flex justify-center items-center  flex-1 sm:mt-24'>
              <div className='-m-2 rounded-xl bg-secondary  items-center flex justify-center ring-1 ring-inset ring-secondary lg:-m-4 lg:rounded-2xl md:w-3/4 lg:w-9/12 lg:h-1/3 lg:p-4 '>
                <Image
                unoptimized
                src="/chat.gif"
                alt="chat"
                width={1220}
                height={644}
                // objectFit='contain'
                className="rounded-md shadow-2xl ring-1 ring-secondary "/>
              </div>
            </div>
        </div>
      </div>
          <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden="true"
          > 
        <div
        className='relative bottom-0 left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] '
        style={{
          clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
        />
      </div>

        </div>
    </main>
  )
}
