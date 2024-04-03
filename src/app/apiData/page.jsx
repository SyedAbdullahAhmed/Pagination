"use client"
import React from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios';

/**
* UN COMMENT CODE WRT TO CASE
*/

function Home() {

    const noOfEle = 4
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const data = response.data;
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // CASE 1 && CASE 2

    // const [showMore, setShowMore] = useState(noOfEle);

    // CASE 2 
    // const controlledInput = 2

    // CASE 3
    // const [pageNo, setpageNo] = useState(1)
    // // Ending Index , Items Per Page , Controlled Input 
    // const num = 4
    // const [SI, setSI] = useState(0)
    // const [EI, setEI] = useState(num)
    // const itemsPerPage = num;
    // const controlledInput2 = num

    // CASE 1
    // SHOW / LESS FUNCTIONALITY WITH A WHOLE DATA 
    // const show = (e) => {
    //   const { name } = e.target
    //   console.log(name);
    //   if (name === 'less') {
    //     (showMore === noOfEle) ? alert("Already at the beginning.") : setShowMore(noOfEle);

    //   }
    //   else if (name === 'more') {
    //     (showMore === data.length) ? alert("Already at the end.") : setShowMore(data.length);
    //   }
    // }

    // CASE 2
    // SHOW / LESS FUNCTIONALITY WITH A FIXED NUMBER OF DATA 
    // const show = (e) => {
    //   const { name } = e.target
    //   if (name === 'less') {
    //     showMore > 0 ? setShowMore(Math.max(2, showMore - controlledInput)) : alert("Already at the beginning.");
    //   } else if (name === 'more') {
    //     showMore < data.length ? setShowMore(Math.min(data.length, showMore + controlledInput)) : alert("Already at the end.");
    //   }
    // }

    // CASE 3
    // NEXT/PREVIOUS PAGE AND ALSO CURRENT PAGE NO. FUNCTIONALITY WITH  DATA 
    // const show = (e) => {
    //     const { name } = e.target;
    //     if (name === 'less') {
    //         const newSI = Math.max(SI - itemsPerPage, 0);
    //         const newEI = Math.min(SI, data.length) < controlledInput2 ? controlledInput2 : Math.min(SI, data.length);

    //         setSI(newSI);
    //         setEI(newEI);
    //         setpageNo(pageNo <= 1 ? 1 : pageNo - 1);

    //     } else if (name === 'more') {
    //         const newSI = Math.min(SI + itemsPerPage, data.length - itemsPerPage);
    //         const newEI = Math.min(newSI + itemsPerPage, data.length);

    //         setSI(newSI);
    //         setEI(newEI);
    //         pageNo >= data.length / controlledInput2 ? null : setpageNo(pageNo + 1)
    //     }
    // }

    return (
        <div>
            <ul>
                {/* CASE 1 AND 2 */}

                {/* {data.map((item, index) => (
          (showMore > index) && (
            <div key={item.id} class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.category}</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.title}</a>
                  <p class="mt-2 text-gray-500">{item.description}</p>
                  <p class="mt-2 text-gray-500 font-bold">${item.price}</p>
                  <div class="flex mt-3">
                    <p class="mr-2 text-gray-700">Rating:</p>
                    <p class="text-gray-700">{item.rating.rate}</p>
                    <p class="mx-2 text-gray-700">(<span>{item.rating.count}</span> reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          )
        ))} */}

                {/* CASE 3 */}

                {/* { data.slice(SI, EI).map((item, index) => (
          <div key={item.id} class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.category}</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{item.title}</a>
              <p class="mt-2 text-gray-500">{item.description}</p>
              <p class="mt-2 text-gray-500 font-bold">${item.price}</p>
              <div class="flex mt-3">
                <p class="mr-2 text-gray-700">Rating:</p>
                <p class="text-gray-700">{item.rating.rate}</p>
                <p class="mx-2 text-gray-700">(<span>{item.rating.count}</span> reviews)</p>
              </div>
            </div>
          </div>
        </div>
        ))} */}

            </ul>

            {/* CASE 1 2 3*/}

            {/* <button type="button" name="less" onClick={show} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Show Less
            </button>
            <button type="button" name="more" onClick={show} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Show More
            </button> */}

            {/* CASE 3 */}

            {/* <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                PAGE NO : {pageNo}
            </div> */}

        </div>
    );
}

export default Home;

