import { useState, useContext } from "react";
import control from "./assets/control.png";
import logo from "./assets/logo.png";
import Chart_fill from "./assets/Chart_fill.png";
import Chat from "./assets/Chat.png";
import User from "./assets/User.png";
import Calendar from "./assets/Calendar.png";
import Search from "./assets/Search.png";
import Chart from "./assets/Chart.png";
import Folder from "./assets/Folder.png";
import Setting from "./assets/Setting.png";

import Pagination from "./Pagination";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <div className=" container-fluid d-flex">
      <div
        className={` bg-primary  p-1  pt-5 position-relative `}
        style={{
          transitionDuration: "300ms",
          height: "100vh",
          width: open ? "28%" : "17%",
        }}
      >
        <img
          src={control}
          className={`position-absolute cursor-pointer -right-3 top-9 w-5 border-dark-purple
           border-2 rounded-circle  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer ${open && "rotate-[360deg]"}`}
            style={{ transitionDuration: "500ms" }}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
            style={{ transitionDuration: "200ms" }}
          >
            Sidebar
          </h1>
        </div>
        <ul className="pt-2" style={{ listStyle: "none" }}>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded py-2 hover:bg-light-white  text-sm items-center  
              ${Menu.gap ? "mt-2" : "mt-2"} ${
                index === 0 && "bg-light-white"
               } `}
              style={{ color: "lightgray", cursor:"pointer" }}
            onClick={()=>alert("coming soon")}
            >
              <img src={Menu.src} className="" />
              <span
                className={`${!open && "d-none"} origin-left duration-200`}
                style={{ transitionDuration: "200ms" }}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
      <Pagination />
      </div>
    </div>
  );
};
export default Sidebar;
