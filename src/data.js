"use strict";

const users = [
  {
    id: 1,
    full_name: "Granville Cardero",
    age: 51,
    email: "gcardero0@xing.com",
    country: "China",
    company: "Shuffletag",
  },
  {
    id: 2,
    full_name: "Fons Haccleton",
    age: 42,
    email: "fhaccleton1@pinterest.com",
    country: "Norway",
    company: "Quire",
  },
  {
    id: 3,
    full_name: "Cobb Revill",
    age: 37,
    email: "crevill2@craigslist.org",
    country: "Indonesia",
    company: "Fivechat",
  },
  {
    id: 4,
    full_name: "Hansiain Baythorp",
    age: 19,
    email: "hbaythorp3@weebly.com",
    country: "Brazil",
    company: "Tazzy",
  },
  {
    id: 5,
    full_name: "Michelle Lage",
    age: 54,
    email: "mlage4@google.com.au",
    country: "China",
    company: "Minyx",
  },
  {
    id: 6,
    full_name: "Mil Sheara",
    age: 61,
    email: "msheara5@cloudflare.com",
    country: "Lebanon",
    company: "Cogilith",
  },
  {
    id: 7,
    full_name: "Arden Woodroff",
    age: 24,
    email: "awoodroff6@homestead.com",
    country: "Philippines",
    company: "Thoughtstorm",
  },
  {
    id: 8,
    full_name: "Ella Jaksic",
    age: 33,
    email: "ejaksic7@comcast.net",
    country: "China",
    company: "Feedbug",
  },
  {
    id: 9,
    full_name: "Pryce Skelly",
    age: 17,
    email: "pskelly8@ucoz.com",
    country: "Poland",
    company: "Twimm",
  },
  {
    id: 10,
    full_name: "Leif Oganesian",
    age: 35,
    email: "loganesian9@comsenz.com",
    country: "Sweden",
    company: "Cogilith",
  },
];

function createUserRow(user) {
  const userRow = document.createElement("ul");
  userRow.className = "list-row";

  userRow.innerHTML += `<li>${user.id}</li>
    <li>${user.full_name}</li>
    <li>${user.age}</li>
    <li>${user.email}</li>
    <li>${user.country}</li>
    <li>${user.company}</li>`;

  return userRow;
}

export function renderUserList() {
  const userList = document.querySelector(".user-list");
  for (let user of users) {
    userList.appendChild(createUserRow(user));
  }
}
