"use client"
import React, { useState } from 'react';
import productsData from '../../../data/Products.json';
import Image from 'next/image';

const HomePage = () => {
  const [selectedCategoryName, setSelectedCategoryName] = useState('All Products');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedCategoryName(category === '' ? 'All Products' : category);
    filterProducts(searchTerm, category);
    closeDropdown();
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };

  const filterProducts = (searchTerm, category) => {
    const filtered = productsData.filter((product) => {
      return (
        (category === '' || product.category === category) &&
        (searchTerm === '' || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <>
      <section className="bg-[#fafafa] container-tcss py-10 mt-14">
        <div className="container mx-auto">
          <div className="rounded-lg border border-light bg-white py-4 px-4 shadow-md sm:px-6 md:px-8 md:py-5">
            <form className='flex w-full flex-wrap items-center justify-center gap-4'>
              <div className='relative w-auto max-sm:flex-1'>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} id="dropdown-button" data-dropdown-toggle="dropdown" className="text-white bg-[#e4a22f] hover:bg-[#e4a22fe3] focus:ring-4 focus:outline-none w-40 max-sm:w-full focus:ring-blue-300 font-medium rounded-lg text-base p-4 px-5 text-center inline-flex items-center justify-between" type="button">{selectedCategoryName}<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg></button>
                <div id="dropdown" className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white top-16 absolute divide-y divide-gray-100 rounded-lg shadow w-44`}>
                  <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                    <li>
                      <button onClick={() => { handleCategoryChange(''); closeDropdown() }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">All Products</button>
                    </li>
                    <li>
                      <button onClick={() => { handleCategoryChange('Electronics'); closeDropdown() }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Electronics</button>
                    </li>
                    <li>
                      <button onClick={() => { handleCategoryChange('Men'); closeDropdown() }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Men</button>
                    </li>
                    <li>
                      <button onClick={() => { handleCategoryChange('Women'); closeDropdown() }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Women</button>
                    </li>
                    <li>
                      <button onClick={() => { handleCategoryChange('Others'); closeDropdown() }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Others</button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex-1 min-w-max'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input value={searchTerm} onChange={(e) => handleSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search your favorite product ;)" required />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


      <section className="bg-[#fafafa] py-10 mt-5">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className=" flex flex-wrap">

                {filteredProducts.map((product) => (
                  <div key={product.url} className="h-full w-full px-4 md:w-1/2 xl:w-1/4">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-md">
                      <div className="relative">
                        <Image src={`/images/products/${product.title}.jpg`} width={200} height={200} alt="product" className="w-full aspect-square" />
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
      </section>
    </>
  );

};

export default HomePage;
