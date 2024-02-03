import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getStatusColor } from "../../utils/getStatusColor";
import moment from "moment";
import Select from "../MainBody/components/SelectBox";

export const Drawer = (props) => {
  const { open, onClose,item} = props;
const [status, setStatus] = useState('')

useEffect(() => {
setStatus(item.status)
}, [item])


  return (
    <>
      <div
        className={`fixed flex top-0 left-0 right-0 bottom-0 opacity-0 bg-black bg-opacity-50 transition-opacity duration-225 ease-in-out ${
          !open && "invisible"
        } ${open && "visible"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex="-1"
        className={`fixed top-0 right-0 p-8 sm:w-[40vh] bg-white lg:w-[40%] h-[100vh] flex flex-col outline-none z-50 overflow-y-auto transition-shadow duration-300 ease-in-out ${
          open ? "transform-none shadow-lg" : "hidden translate-x-full"
        }`}
      >
        {/* <div className="min-h-64 border-b-1 border-gray-300" /> */}
        <h5
          id="drawer-label"
          class="inline-flex items-center mb-6 text-base font-semibold text-gray-800 uppercase dark:text-gray-400"
        >
          Ticket Details
        </h5>
        <button
          type="button"
          onClick={onClose}
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="overflow-scroll sm:max-h-[60vh] lg:max-h-[80vh]">
          <DetailLabel
           head='Requester'
            sub={item.requester}
          />
          <br/>
          <DetailLabel
           head='Subject'
            sub={item.subject}
          />
          <br/>

          <DetailLabel
           head='Description'
            sub= {item.description}
          />
          <br/>

          <div className="flex gap-8 items-center">
            <div className="flex flex-col justify-between ">
              <label className="font-medium text-gray-400 " htmlFor="status">
                Status
              </label>
              <Select
                  value={status}
                  bgColor={getStatusColor(status)}
                  onselect={(val) => {
                    setStatus(val);
                  }}
                />
            </div>
              <DetailLabel head='Platform' sub={item.platform} />
              <DetailLabel head='Created on' sub={moment(item.createdOn).format('MMM DD hh:mm A')}/>
              <DetailLabel head='Assigned To' sub={item.assignedTo}/>
          </div>
          <br />
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
          >
            Send message
          </button>
        </div>
      </div>
    </>
  );

  function DetailLabel({ head, sub }) {
    return (
      <div>
        <label for="subject" className="font-medium text-gray-400 ">
          {head}
        </label>
        <p>{sub}</p>
      </div>
    );
  }
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
