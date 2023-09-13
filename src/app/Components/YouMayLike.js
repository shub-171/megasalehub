import React from 'react'
import productsData from '../../../data/Products.json';
import Link from 'next/link';

const YouMayLike = () => {
    const productsToShow = productsData.slice(0, 8);

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Products You May Like
                            </h2>
                            <span className="mx-auto mb-4 block h-1 w-24 bg-[#e4a22f]"></span>
                            <p className="text-base text-body-color">
                            The best products, carefully chosen exclusively for you!
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative flex justify-center">
                        <div className="relative w-full">
                            <div className="flex-wrap flex h-auto w-full transition-all ">



                                {productsToShow.map((product, index) => (
                                    <div key={index} className="h-full w-full px-4 md:w-1/2 xl:w-1/4">
                                    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md">
                                      <div className="relative">
                                        <img src={`/images/products/${product.title}.jpg`} alt="product" className="w-full aspect-square" />
                                      </div>
                                      <div className="px-5 pt-6 pb-8 text-center">
                                        <h3 className="text-lg font-semibold text-black hover:text-[#e4a22f] xs:text-xl">
                                          {product.title}
                                        </h3>
                                        <p className="text-lg font-semibold text-gray-500">{product.category}</p>
                                        <div className="text-center mt-2">
                                          <a href={product.url} className="inline-flex items-center justify-center rounded-md bg-[#e4a22f] py-3 px-8 text-center text-base font-semibold text-white hover:bg-black">
                                            Buy Now
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}




                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <Link href="/shop" className="inline-flex items-center justify-center rounded-md bg-[#e4a22f] py-3 px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                        Explore All Products
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default YouMayLike
