import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShopByCategory = () => {
    return (
        <section className="bg-[#fafafa] py-12">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Shop By Category
                            </h2>
                            <span className="mx-auto mb-4 block h-1 w-24 bg-[#e4a22f]"></span>
                            <p className="text-base text-body-color">
                                Shop among the varities of products!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <Link href="/electronics" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src="/images/products/Boat airdopes.jpg" width={200} height={300} alt="Boat airdopes" className="w-full h-full aspect-[4/5] object-cover" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-[#e4a22f] md:text-2xl lg:text-xl xl:text-2xl">
                                Electronics
                            </h3>
                            
                        </Link>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <Link href="/men" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src="/images/products/Men formal attire.jpg" width={200} height={300} alt="Men formal attire" className="w-full h-full aspect-[4/5] object-cover" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-[#e4a22f] md:text-2xl lg:text-xl xl:text-2xl">
                                Men
                            </h3>
                            
                        </Link>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <Link href="/women" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src="/images/products/Women attire with jacket.jpg" width={200} height={300} alt="Women attire with jacket" className="w-full h-full aspect-[4/5] object-cover" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-[#e4a22f] md:text-2xl lg:text-xl xl:text-2xl">
                                Women
                            </h3>
                            
                        </Link>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <Link href="/others" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <Image src="/images/products/Dream Catcher with Lights.jpg" width={200} height={300} alt="Dream Catcher with Lights" className="w-full h-full aspect-[4/5] object-cover" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-[#e4a22f] md:text-2xl lg:text-xl xl:text-2xl">
                                Others
                            </h3>
                           
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ShopByCategory
