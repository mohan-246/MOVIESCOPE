import React, { useState } from "react";

export const Header = ({ onSubmit }) => {
  const [search, setsearch] = useState("");

  return (
    <div id="header-container" className="bg-slate-900 h-[70px]">
   
      <a
        className="float-left font-sans text-white h-8 uppercase text-3xl  font-extrabold m-4"
        href="/#"
      >
        MovieScope
      </a>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setsearch(e.target.value);

          onSubmit(search);
        }}
        className="m-4 w-[30%] h-8 float-right outline outline-2 rounded outline-gray-400 font-mono uppercase text-slate-700 text-start px-2"
        placeholder=" Search"
      ></input>
      
    </div>
  );
};
