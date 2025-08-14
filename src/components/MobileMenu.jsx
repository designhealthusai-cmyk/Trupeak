"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
// import { menuItem } from "@/lib/MenuItem";
import { MdDoubleArrow, MdKeyboardDoubleArrowRight } from "react-icons/md";

const MobileMenu = ({ setIsOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openMegaIndex, setOpenMegaIndex] = useState(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [openSubSubMenuIndex, setOpenSubSubMenuIndex] = useState(null);


  const toggleSubMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenMegaIndex(null);
    setOpenSubMenuIndex(null);
  };

  const toggleMegaMenu = (index) => {
    setOpenMegaIndex(openMegaIndex === index ? null : index);
  };

  const toggleSubMenuItem = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div className="p-4 overflow-y-scroll h-screen">
      <ul className="space-y-4">
        {menuItem.map((item, index) => (
          <li
            key={index}
            className={`relative group pb-3 border-b border-gray-300`}
          >
            <div
              onClick={() => toggleSubMenu(index)}
              className="text-base tracking-wide flex font-medium items-center justify-between capitalize text-templateText"
            >
              <Link onClick={() => setIsOpen(false)} href={item.url}>
                <div className="flex gap-2 items-center">
                  <MdDoubleArrow className="text-primary" />
                  <span>{item.name}</span>
                </div>
              </Link>
              {(item.dropdown || item.megamenu) && (
                <IoChevronForwardSharp
                  className={`transition-all ease-in-out ${openIndex === index ? "rotate-90" : ""
                    }`}
                />
              )}
            </div>

            {item.dropdown && openIndex === index && (
              <ul className="p-4 pb-0 space-y-4">
                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                  <li key={dropdownIndex}>
                    <div
                      onClick={() => toggleSubMenuItem(dropdownIndex)}
                      className="text-base tracking-wide flex items-center justify-between capitalize text-templateText cursor-pointer"
                    >
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={dropdownItem.url}
                      >
                        <div className="flex gap-2 items-center">
                          <MdKeyboardDoubleArrowRight className="text-primary" />
                          {dropdownItem.name}
                        </div>
                      </Link>
                      {dropdownItem.subMenuItem && (
                        <IoChevronForwardSharp
                          className={`transition-all ease-in-out ${openSubMenuIndex === dropdownIndex
                              ? "rotate-90"
                              : ""
                            }`}
                        />
                      )}
                    </div>

                    {dropdownItem.subMenuItem && openSubMenuIndex === dropdownIndex && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {dropdownItem.subMenuItem.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <div
                              onClick={() =>
                                setOpenSubSubMenuIndex(
                                  openSubSubMenuIndex === subIndex ? null : subIndex
                                )
                              }
                              className="flex justify-between items-center cursor-pointer text-base tracking-wide capitalize text-templateText"
                            >
                              <Link
                                onClick={() => {
                                  if (!subItem.subMenuItem) setIsOpen(false);
                                }}
                                href={subItem.url}
                                className="flex gap-2 items-center"
                              >
                                <MdKeyboardDoubleArrowRight className="text-primary" />
                                {subItem.name}
                              </Link>
                              {subItem.subMenuItem && (
                                <IoChevronForwardSharp
                                  className={`transition-all ease-in-out ${openSubSubMenuIndex === subIndex ? "rotate-90" : ""
                                    }`}
                                />
                              )}
                            </div>

                            {subItem.subMenuItem && openSubSubMenuIndex === subIndex && (
                              <ul className="ml-6 mt-2 space-y-2">
                                {subItem.subMenuItem.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <Link
                                      onClick={() => setIsOpen(false)}
                                      href={nestedItem.url}
                                      className="text-sm flex gap-2 items-center tracking-wide capitalize text-templateText"
                                    >
                                      <MdKeyboardDoubleArrowRight className="text-primary" />
                                      {nestedItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}


                  </li>
                ))}
              </ul>
            )}

            {item.megamenu && openIndex === index && (
              <div className="py-4 pl-4">
                <ul className="space-y-4">
                  {item.megamenu.map((submenu, submenuIndex) => (
                    <li key={submenuIndex} className="relative">
                      <div
                        onClick={() => toggleMegaMenu(submenuIndex)}
                        className="flex justify-between items-center text-templateText"
                      >
                        <h4>{submenu.title}</h4>
                        <IoChevronForwardSharp
                          className={`transition-all ease-in-out ${openMegaIndex === submenuIndex ? "rotate-90" : ""
                            }`}
                        />
                      </div>

                      {openMegaIndex === submenuIndex && (
                        <ul className="p-4 space-y-4">
                          {submenu.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.url}
                                className="text-templateText block text-sm"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
