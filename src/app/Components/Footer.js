import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="pt-[70px]">
                <div className="container mx-auto">
                    <div className=" flex flex-wrap">
                        <div className="w-full px-4 max-md:text-center md:w-1/2 lg:w-5/12 xl:w-1/3">
                            <div className="mb-16">
                                <Link href="/" className="mb-6 inline-block">
                                    <Image src="/images/Mega-sale-hub-logo.png" width={150} height={100} alt="Mega Sale Hub logo" className="h-20 w-full" />
                                </Link>

                                <div className="space-y-4">
                                    <p className="flex text-base font-medium text-body-color">
                                    Stay updated on our latest discounts, promotions, and new arrivals. <br/>Shop smart and save big with our handpicked selection of discounted products.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 max-md:text-center sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-1/3">
                            <div className="mb-16">
                                <h3 className="mb-9 text-2xl font-semibold text-black">Quick Links</h3>

                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="inline-block text-base font-medium text-body-color hover:text-[#e4a22f]">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/shop" className="inline-block text-base font-medium text-body-color hover:text-[#e4a22f]">
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/men" className="inline-block text-base font-medium text-body-color hover:text-[#e4a22f]">
                                            Men
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/women" className="inline-block text-base font-medium text-body-color hover:text-[#e4a22f]">
                                            Women
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/others" className="inline-block text-base font-medium text-body-color hover:text-[#e4a22f]">
                                            Others
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 max-md:text-center sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-1/3">
                            <div className="mb-16">
                                <h3 className="mb-9 text-2xl font-semibold text-black">
                                    Socials
                                </h3>
                                <p className="text-base font-medium text-body-color">Follow us on Instagram</p>
                                <Link href="https://www.instagram.com/megasalehub.shop" target='_blank' className="text-base text-[#e4a22f] font-medium text-body-color">@megasalehub &#128071;</Link>
                                <Link href="https://www.instagram.com/megasalehub.shop" target='_blank' className="mb-6">
                                    <Image src="/images/instagram.png" width={150} height={100} alt="Instagram logo" className="h-11 mt-4 w-auto max-md:m-auto" />
                                </Link>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            <div className="border-t border-[#e7e7e7] py-7">
                <div className="container mx-auto">
                    <div className="text-center">
                        
                        <p className="text-base font-medium text-body-color">
                            © 2023 <Link href="/" className='text-[#e4a22f]'> Mega Sale Hub</Link>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
