import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import ListView from "../components/MainBody/ListView";
import Modal from "../components/Modal";
import useToggle from "../hooks/useToogler";
import {
  deleteTicket,
  getAllTickets,
  updateTicket,
} from "../services/ticketService";
import { Drawer } from "../components/Drawer/Drawer";

export default function Home() {
  const { on, toggler } = useToggle();

  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [department, setDepartment] = useState('Select Department');

  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setOpen(true);
    setItem(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTickets = async () => {
    const data = await getAllTickets().then((response) =>
      response.map((val) => ({
        id: val._id,
        requester: val.userName,
        subject: val.subject,
        platform: val.platform,
        description: val.description,
        assignedTo: val.assignedTo,
        status: val.status,
        createdOn: val.createdAt,
        comments: val.comments,
      }))
    );
    setData(data);
  };

  const getAllFiteredData = async (assignedTo) => {
    const data = await getAllTickets(assignedTo).then((response) =>
      response.map((val) => ({
        id: val._id,
        requester: val.userName,
        subject: val.subject,
        platform: val.platform,
        description: val.description,
        assignedTo: val.assignedTo,
        status: val.status,
        createdOn: val.createdAt,
        comments: val.comments,
      }))
    );
    setData(data);
  };

  useEffect(() => {
    if (!on && !open) {
      if (department == "Select Department") {
         getTickets();
       } else {
         getAllFiteredData(department);
       }
    }
  }, [on, open,department]);

  const updateStatus = async (id, status) => {
    updateTicket(id, { status: status })
      .then((response) => {
        // Handle the response if needed
        console.log("Ticket updated successfully:", response);
        setData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: status } : item
          )
        );
        // Optionally, you can reset the form or close the modal here
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("Error creating ticket:", error);
      });
  };

  const deleteTickets = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete?");
    if (userConfirmed) {
      // User clicked "OK"
      deleteTicket(id).then((res) => {
        console.log("delted");
        alert("Delete confirmed");
        getTickets();
        setDepartment('Select Department')
      });
    } else {
      // User clicked "Cancel"
      alert("Delete canceled");
    }
  };

  return (
    <div className="w-full lg:h-[100vh] relative p-5 bg-white">
      <Header
        department={department}
        handleChange={(e) => {
          console.log(e.target.value)
          setDepartment(e.target.value)
        }}
        toggler={toggler}
      />
      <ListView
        handleOpen={handleOpen}
        data={data}
        handleStatusChange={updateStatus}
        onDelete={deleteTickets}
      />
      {on && <Modal toggler={toggler} />}
      <Drawer
        handleStatusChange={updateStatus}
        item={item}
        anchor="right"
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
