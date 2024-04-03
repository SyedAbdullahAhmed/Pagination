"use client"
import React from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image'
function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const result = await res.json()
      console.log(result);
      setData(result)
      return result
    }
    const a = async () => {
      const data = await fetchData()
      console.log(data);
    }
    a()


  }, [])
  // const data = [
  //   { id: 1, name: "1 : John", age: 30 },
  //   { id: 2, name: "2 : Alice", age: 25 },
  //   { id: 3, name: "3 : Bob", age: 35 },
  //   { id: 4, name: "4 : Nagatha", age: 35 },
  //   { id: 5, name: "5 : Alisa", age: 35 },
  //   { id: 6, name: "6 : Steve", age: 35 },
  //   { id: 7, name: "7 : Natasha", age: 35 },
  //   // { id: 8, name: "8 : Asad", age: 35 }
  // ];
  const noOfEle = 4
  // case 1 && case 2
  // const [showMore, setShowMore] = useState(noOfEle);
  // case 2 
  // const controlledInput = 2
  // case 3
  const [pageNo, setpageNo] = useState(1)
  // Ending Index , Items Per Page , Controlled Input 
  const num = 4
  const [SI, setSI] = useState(0)
  const [EI, setEI] = useState(num)
  const itemsPerPage = num;
  const controlledInput2 = num

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
  const show = (e) => {
    const { name } = e.target;
    if (name === 'less') {
      const newSI = Math.max(SI - itemsPerPage, 0);
      const newEI = Math.min(SI, data.length) < controlledInput2 ? controlledInput2 : Math.min(SI, data.length);

      setSI(newSI);
      setEI(newEI);
      setpageNo(pageNo <= 1 ? 1 : pageNo - 1);

    } else if (name === 'more') {
      const newSI = Math.min(SI + itemsPerPage, data.length - itemsPerPage);
      const newEI = Math.min(newSI + itemsPerPage, data.length);

      setSI(newSI);
      setEI(newEI);
      pageNo >= data.length / controlledInput2 ? null : setpageNo(pageNo + 1)
    }
    }

  return (
    <div>
      Home Page Plz goto /apiData or /normalData
    </div>
  );
}

export default Home;

