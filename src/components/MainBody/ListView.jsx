import React from "react";
import Select from "./components/SelectBox";
import { getStatusColor } from "../../utils/getStatusColor";
import moment from "moment/moment";
import DeleteIcon from "../DeleteIcon";

export default function ListView({data,handleStatusChange,onDelete,handleOpen}) {
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
            <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
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
                  {item.description.length > 40
                    ? `${item.description.slice(0, 40)}...`
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
              <td className="px-6 py-4 ">{moment(item.createdOn).format('MMM DD hh:mm A')}</td>
              <td  onClick={()=>handleOpen(item)} class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
