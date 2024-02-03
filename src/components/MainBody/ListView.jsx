import React, { useState } from "react";
import Select from "./components/SelectBox";
import { getStatusColor } from "../../utils/getStatusColor";

export default function ListView() {
  const [data, setData] = useState([
    {
      id: 1,
      requester: "Nishad",
      subject: "Pop up needed for ad page",
      platform: "Mykare",
      description:
        "The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.",
      assignedTo: "Lami",
      status: "NEW",
      createdOn: "Feb 2 2024",
    },
    {
      id: 2,
      requester: "Joash",
      subject: "Color need to change",
      platform: "Karetrip",
      description:
        "The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.",
      assignedTo: "Kareem",
      status: "OPEN",
      createdOn: "Feb 2 2024",
    },
    {
      id: 3,
      requester: "Shafneed",
      subject: "Crm report download getting 400",
      platform: "Kareflow",
      description:
        "The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.",
      assignedTo: "Varun",
      status: "CLOSED",
      createdOn: "Feb 2 2024",
    },
    {
      id: 4,
      requester: "Manoj",
      subject: "Patient not assiged to karebuddy",
      platform: "Karebuddy",
      description:
        "The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.",
      assignedTo: "Jithin",
      status: "CLOSED",
      createdOn: "Feb 2 2024",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Requester
            </th>
            <th scope="col" className="px-6 py-3">
              Subject
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Platform
            </th>
            <th scope="col" className="px-6 py-3">
              Assigned to
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Created On
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.requester}
              </th>
              <td className="px-6 py-4">{item.subject}</td>
              <td className="px-6 py-4">
                <div class="group cursor-pointer relative  w-full inline-block">
                  {item.description.length > 50
                    ? `${item.description.slice(0, 50)}...`
                    : item.description}
                  <div class="opacity-0 w-fit  bg-black text-white text-center text-xs rounded-lg py-2 absolute z-1 group-hover:opacity-100 bottom-0 -left-1/2 ml-14 px-3 pointer-events-none">
                    {item.description}
                    <svg
                      class="absolute text-black h-2 w-full left-0 top-full"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xml:space="preserve"
                    >
                      <polygon
                        class="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{item.platform}</td>
              <td className="px-6 py-4">{item.assignedTo}</td>
              <td className="px-6 py-4">
                <Select
                  value={item.status}
                  bgColor={getStatusColor(item.status)}
                  onselect={(val) => {
                    handleStatusChange(item.id, val);
                  }}
                />
              </td>
              <td className="px-6 py-4 ">{item.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
