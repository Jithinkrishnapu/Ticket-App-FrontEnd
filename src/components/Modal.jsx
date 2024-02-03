import React, { useState } from "react";
import { createTicket } from "../services/ticketService";

export default function Modal(props) {
  const [formData, setFormData] = useState({
    platform: "",
    subject: "",
    description:"",
    userName: "",
    createdBy: "DIGITAL",
    assignedTo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log("first==============",formData)
    // Call the createTicket function with the form data
    createTicket(formData)
      .then((response) => {
        // Handle the response if needed
        console.log("Ticket created successfully:", response);

        // Optionally, you can reset the form or close the modal here
        setFormData({
            platform: "",
            subject: "",
            description:
              "",
            userName: "",
            createdBy: "DIGITAL",
            assignedTo: "",
        });
        props.toggler(); // Close the modal
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("Error creating ticket:", error);
      });
  };

  const handleChange = (e) => {
    // Update the form data when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="static">
      <div className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"></div>
      {/** Just added */}
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center">
        <div className="mx-4 my-4 bg-white rounded-md ">
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Ticket
            </h3>
            <button
              onClick={props.toggler}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} class="p-4 md:p-5">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  id="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type the subject"
                  required=""
                />
              </div>
              <div class="col-span-2">
                <label
                  for="userName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="userName"
                  id="userName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type your name"
                  required=""
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="platform"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Platform
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="platform"
                  id="platform"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type platform here"
                  required=""
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="assignedTo"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Assign To
                </label>
                <select
                  onChange={handleChange}
                  id="assignedTo"
                  name="assignedTo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Department</option>
                  <option value="Product">Product</option>
                  <option value="Digital">Digital</option>
                  <option value="Content">Content</option>
                  <option value="Operations">Operations</option>
                  <option value="Sales">Sales</option>
                  <option value="Sales">Finance</option>
                  <option value="Sales">Insurance</option>
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ticket Description
                </label>
                <textarea
                  onChange={handleChange}
                  id="description"
                  name="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write ticket description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add new ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
