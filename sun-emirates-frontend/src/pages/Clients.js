import React from "react";

/* CLIENT LOGOS */
import client1 from "../images/Clients/Clients1.png";
import client2 from "../images/Clients/Clients2.png";
import client3 from "../images/Clients/Clients3.png";
import client4 from "../images/Clients/Clients4.png";
import client5 from "../images/Clients/Clients5.png";
import client6 from "../images/Clients/Clients6.png";
import client7 from "../images/Clients/Clients7.png";
import client8 from "../images/Clients/Clients8.png";
import client9 from "../images/Clients/Clients9.png";
import client10 from "../images/Clients/Clients10.png";
import client11 from "../images/Clients/Clients11.png";
import client12 from "../images/Clients/Clients12.png";
import client13 from "../images/Clients/Clients13.png";

/* PROJECT IMAGES */
import project1 from "../images/Clients/project1.jpeg";
import project2 from "../images/Clients/project2.jpeg";
import project3 from "../images/Clients/project3.jpeg";
import project4 from "../images/Clients/project4.jpeg";
import project5 from "../images/Clients/project5.jpeg";
import project6 from "../images/Clients/project6.jpeg";

/* BANNER IMAGE */
import banner from "../images/Clients/ourclientsbg.png";

const Clients = () => {

  const clients = [
    { name: "KHANSAHEB", logo: client1 },
    { name: "AL Basti & Muktha LLC", logo: client2 },
    { name: "ThyssenKrupp", logo: client3 },
    { name: "MEGARME", logo: client4 },
    { name: "New Trade Links LLC", logo: client5 },
    { name: "Ferrotech International Fze", logo: client6 },
    { name: "Al Ghandi Electronics", logo: client7 },
    { name: "Hi-Tec", logo: client8 },
    { name: "Somec-Sharaf", logo: client9 },
    { name: "STADLERS", logo: client10 },
    { name: "AL REYAMI", logo: client11 },
    { name: "Dutco Balfour Beatty LLC", logo: client12 },
    { name: "AL REYAMI INTERIORS", logo: client13 }
  ];

  const projects = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6
  ];

  return (
    <div className="pageContainer">

      {/* Page Header */}
      <h2 className="PageHeader">Our Clients</h2>

      {/* Banner */}
      <div style={{ textAlign: "center" }}>
        <img
          src={banner}
          alt="Clients Banner"
          style={{ maxWidth: "100%" }}
        />
      </div>

      {/* Clients Table */}
      <table
        className="ClientGridView"
        cellPadding="10"
        cellSpacing="0"
        border="1"
        width="100%"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Logo</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ width: "120px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      {/* Project Photos Section */}
      <h2 style={{ marginTop: "40px" }}>Our Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {projects.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="project"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px"
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default Clients;