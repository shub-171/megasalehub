import React from 'react'
import productsData from '../../../data/Products.json';
import Image from 'next/image';

const page = () => {
    const category = "Electronics"
    const electronics = productsData.filter((product) => product.category === category);
  return (
    <>
    <section className="bg-[#fafafa] container-tcss py-10 mt-14">
        <div className="container mx-auto">
          <div className="rounded-lg border border-light bg-white py-4 px-4 shadow-md sm:px-6 md:px-8 md:py-5">
            <h1 className='text-center text-4xl max-md:text-2xl font-bold uppercase'>{category}</h1>
          </div>
        </div>
      </section>

    <section className="bg-[#fafafa] py-10 mt-5">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className=" flex flex-wrap">

                {electronics.map((product) => (
                  <div key={product.url} className="h-full w-full px-4 md:w-1/2 xl:w-1/4">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md">
                      <div className="relative">
                        <Image src={`/Images/products/${product.title}.jpg`} width={200} height={200} alt="product" className="w-full aspect-square" />
                      </div>
                      <div className="px-5 pt-6 pb-8 text-center">
                        <h3 className="text-lg font-semibold text-black hover:text-[#e4a22f] xs:text-xl">
                          {product.title}
                        </h3>
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
      </section>
    </>
  )
}

export default page
