import React, { useState } from "react";
import { Form } from "../components/Form";
import HiddenRadio from "../components/HiddenRadio";
import { Input } from "../components/Input";
import { InputForm } from "../components/InputForm";
import {XCircleIcon} from '@heroicons/react/24/outline'
import Book from "../components/Book";
import { NavBar } from "../components/NavBar";

export default function Home() {
  const [openBook, setOpenBook] = useState(true);
  const onClick = async(e) => {
    e.preventDefault();
    console.log('test')
    setOpenBook(false)
  }

  return (
    <div className=" relative w-full h-screen">
      <NavBar/>
      {openBook ?
      <Book className="absolute top-56 left-72" openBook={openBook} onClick={onClick}/> 
      :
      <div>2</div> 
    }
    </div>
  )
}
