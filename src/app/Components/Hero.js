import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="py-10 mt-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div className="relative mb-8 h-[370px] md:h-[480px]">
              <Image src="/images/Chair.jpg" width={500} height={500} alt="product" className="h-full w-full object-cover object-center" />

              <div className="absolute top-0 left-0 flex h-full w-full items-center px-8 md:px-12">
                <div className="max-w-[420px]">
                    <h1 className="mb-5 block text-2xl font-bold text-black sm:text-4xl">
                      Mega Sale Up To 50% Off For All
                    </h1>
                  <p className="mb-10 text-base font-medium text-body-color">
                  Here you'll find a Wired selection of discounted products that offer incredible savings for you. Explore our deals and start saving today!
                  </p>
                  <Link href="/shop" className="inline-flex items-center justify-center rounded bg-[#e4a22f] py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[223px]">
                  <Image src="/images/Fashion.jpg" width={200} height={200} alt="product" className="h-full w-full object-cover object-center" />

                  <div className="absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                        <h2 className="mb-3 block text-lg font-bold text-black xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl">
                          Summer Travel Collection
                        </h2>
                      <Link href="/women" className="text-base font-semibold text-black hover:text-[#e4a22f]">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[223px]">
                  <Image src="/images/phone.jpg" width={200} height={200} alt="product" className="h-full w-full object-cover object-center" />

                  <div className="absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                        <h2 className="mb-3 block text-lg font-bold text-black xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl">
                          Get 30% Off On Electronics
                        </h2>
                      <Link href="/electronics" className="text-base font-semibold text-black hover:text-[#e4a22f]">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
