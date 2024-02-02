import React, { useState } from "react";
import Select from "./components/SelectBox";
import { getStatusColor } from "../../utils/getStatusColor";

export default function ListView() {
  const [data, setData] = useState([
    { id: 1, requester: "Nishad", subject: "Pop up needed for ad page",platform:'Mykare', assignedTo: "Lami", status: "NEW", createdOn: "Feb 2 2024" },
    { id: 2, requester: "Joash", subject: "Color need to change",platform:'Karetrip', assignedTo: "Kareem", status: "OPEN", createdOn: "Feb 2 2024" },
    { id: 3, requester: "Shafneed", subject: "Crm report download getting 400", platform:'Kareflow', assignedTo: "Varun", status: "CLOSED", createdOn: "Feb 2 2024" },
    { id: 4, requester: "Manoj", subject: "Patient not assiged to karebuddy", platform:'Karebuddy', assignedTo: "Jithin", status: "CLOSED", createdOn: "Feb 2 2024" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
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
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.requester}
              </th>
              <td className="px-6 py-4">{item.subject}</td>
              <td className="px-6 py-4">{item.platform}</td>
              <td className="px-6 py-4">{item.assignedTo}</td>
              <td className="px-6 py-4">
                <Select
                  value={item.status}
                  bgColor={getStatusColor(item.status)}
                  onselect={(val) => {
                    handleStatusChange(item.id, val)
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
