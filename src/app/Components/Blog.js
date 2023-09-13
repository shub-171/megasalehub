import React from 'react'

const Blog = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Recent News
              </h2>
              <span className="mx-auto mb-4 block h-1 w-24 bg-blue-700"></span>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 shadow-md rounded-lg">
            <div className="mx-auto mb-10">
              <div className="mb-2 overflow-hidden rounded">
                <img src="https://demo.tailgrids.com/templates/planet/build/src/assets/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
              </div>
              <div>
                <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                  Dec 22, 2023
                </span>
                <h3>
                  <a href="#" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 shadow-md rounded-lg">
            <div className="mx-auto mb-10">
              <div className="mb-2 overflow-hidden rounded">
                <img src="https://demo.tailgrids.com/templates/planet/build/src/assets/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
              </div>
              <div>
                <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                  Mar 15, 2023
                </span>
                <h3>
                  <a href="#" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    How to earn more money as a wellness coach
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 shadow-md rounded-lg">
            <div className="mx-auto mb-10">
              <div className="mb-2 overflow-hidden rounded">
                <img src="https://demo.tailgrids.com/templates/planet/build/src/assets/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
              </div>
              <div>
                <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                  Jan 05, 2023
                </span>
                <h3>
                  <a href="#" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
