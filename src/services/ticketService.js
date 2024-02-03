const url = 'http://localhost:4000/api/tickets';

export async function createTicket(ticketData) {
    return fetch(url+'/create/ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(responseData => {
      // Handle the successful response
      console.log('Ticket created successfully:', responseData);
      return responseData; // You can return the data if needed
    })
    .catch(error => {
      // Handle errors during the fetch
      console.error('Error creating ticket:', error);
      throw error; // You can throw the error for further handling if needed
    });
  }

  export async function getAllTickets() {
    return fetch(url+'/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(responseData => {
      // Handle the successful response
      console.log('Ticket fetched successfully:', responseData);
      return responseData; // You can return the data if needed
    })
    .catch(error => {
      // Handle errors during the fetch
      console.error('Error creating ticket:', error);
      throw error; // You can throw the error for further handling if needed
    });
  }

  export async function updateTicket(id,status) {
    return fetch(url+`/ticket/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({status:status})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(responseData => {
      // Handle the successful response
      console.log('Ticket updated successfully:', responseData);
      return responseData; // You can return the data if needed
    })
    .catch(error => {
      // Handle errors during the fetch
      console.error('Error creating ticket:', error);
      throw error; // You can throw the error for further handling if needed
    });
  }

  export async function deleteTicket(id) {
    return fetch(url+`/ticket/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(responseData => {
      // Handle the successful response
      console.log('Ticket deleted successfully:', responseData);
      return responseData; // You can return the data if needed
    })
    .catch(error => {
      // Handle errors during the fetch
      console.error('Error creating ticket:', error);
      throw error; // You can throw the error for further handling if needed
    });
  }

  

