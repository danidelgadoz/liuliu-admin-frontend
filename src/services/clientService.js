import { throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import API from './apiService';

// const baseUrl = process.env.REACT_APP_API_BASE_URL;

const mockData = [
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "address": "123 Main St",
    "phone_number": "123456789",
    "email": "johndoe1@example.com",
    "birthday": "1990-01-01"
  },
  {
    "id": 2,
    "firstname": "Jane",
    "lastname": "Smith",
    "address": "456 Oak St",
    "phone_number": "987654321",
    "email": "janesmith@example.com",
    "birthday": "1992-02-02"
  },
  {
    "id": 3,
    "firstname": "Michael",
    "lastname": "Johnson",
    "address": "789 Pine St",
    "phone_number": "555123456",
    "email": "mjohnson@example.com",
    "birthday": "1988-03-15"
  },
  {
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "address": "101 Elm St",
    "phone_number": "555987654",
    "email": "edavis@example.com",
    "birthday": "1995-04-25"
  },
  {
    "id": 5,
    "firstname": "Chris",
    "lastname": "Brown",
    "address": "202 Maple St",
    "phone_number": "444123456",
    "email": "cbrown@example.com",
    "birthday": "1993-05-12"
  },
  {
    "id": 6,
    "firstname": "Jessica",
    "lastname": "Wilson",
    "address": "303 Cedar St",
    "phone_number": "444987654",
    "email": "jwilson@example.com",
    "birthday": "1991-06-18"
  },
  {
    "id": 7,
    "firstname": "David",
    "lastname": "Moore",
    "address": "404 Birch St",
    "phone_number": "333123456",
    "email": "dmoore@example.com",
    "birthday": "1989-07-22"
  },
  {
    "id": 8,
    "firstname": "Laura",
    "lastname": "Taylor",
    "address": "505 Willow St",
    "phone_number": "333987654",
    "email": "ltaylor@example.com",
    "birthday": "1994-08-30"
  },
  {
    "id": 9,
    "firstname": "Robert",
    "lastname": "Anderson",
    "address": "606 Spruce St",
    "phone_number": "222123456",
    "email": "randerson@example.com",
    "birthday": "1987-09-09"
  },
  {
    "id": 10,
    "firstname": "Megan",
    "lastname": "Thomas",
    "address": "707 Fir St",
    "phone_number": "222987654",
    "email": "mthomas@example.com",
    "birthday": "1996-10-10"
  },
  {
    "id": 11,
    "firstname": "Daniel",
    "lastname": "Jackson",
    "address": "808 Aspen St",
    "phone_number": "111123456",
    "email": "djackson@example.com",
    "birthday": "1985-11-20"
  },
  {
    "id": 12,
    "firstname": "Olivia",
    "lastname": "White",
    "address": "909 Redwood St",
    "phone_number": "111987654",
    "email": "owhite@example.com",
    "birthday": "1997-12-15"
  },
  {
    "id": 13,
    "firstname": "Jacob",
    "lastname": "Harris",
    "address": "1010 Poplar St",
    "phone_number": "666123456",
    "email": "jharris@example.com",
    "birthday": "1986-01-05"
  },
  {
    "id": 14,
    "firstname": "Sophia",
    "lastname": "Martin",
    "address": "1111 Sycamore St",
    "phone_number": "666987654",
    "email": "smartin@example.com",
    "birthday": "1998-02-22"
  },
  {
    "id": 15,
    "firstname": "James",
    "lastname": "Lee",
    "address": "1212 Chestnut St",
    "phone_number": "777123456",
    "email": "jlee@example.com",
    "birthday": "1990-03-11"
  },
  {
    "id": 16,
    "firstname": "Ava",
    "lastname": "Garcia",
    "address": "1313 Ash St",
    "phone_number": "777987654",
    "email": "agarcia@example.com",
    "birthday": "1991-04-01"
  },
  {
    "id": 17,
    "firstname": "William",
    "lastname": "Martinez",
    "address": "1414 Magnolia St",
    "phone_number": "888123456",
    "email": "wmartinez@example.com",
    "birthday": "1988-05-05"
  },
  {
    "id": 18,
    "firstname": "Isabella",
    "lastname": "Robinson",
    "address": "1515 Olive St",
    "phone_number": "888987654",
    "email": "irobinson@example.com",
    "birthday": "1994-06-10"
  },
  {
    "id": 19,
    "firstname": "Henry",
    "lastname": "Clark",
    "address": "1616 Pine St",
    "phone_number": "999123456",
    "email": "hclark@example.com",
    "birthday": "1983-07-15"
  },
  {
    "id": 20,
    "firstname": "Mia",
    "lastname": "Rodriguez",
    "address": "1717 Oak St",
    "phone_number": "999987654",
    "email": "mrodriguez@example.com",
    "birthday": "1992-08-20"
  }
];

export const getClients = () => {
  // return API.get(`/users`).pipe(map((response) => response.data));
  return API.get(`/clients`).pipe(map((response) => {
    console.log(response)
    return response.data.results;
  }));
  // return API.get(`/client-test`).pipe(map((response) => response.data));
  // return API.get(`/basic/items`).pipe(map((response) => response.data));
  // return API.get(`/basic/items`).pipe(map((response) => response.data));
  // return of(mockData)
};

export const getClientById = (id) => {
  return API.get(`/client/${id}`).pipe(map((response) => response.data));
};
