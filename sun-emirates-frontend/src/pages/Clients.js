import React from "react";

const Clients = () => {

  const clients = [
    { name: "KHANSAHEB", logo: "/images/Clients/Clients1.png" },
    { name: "AL Basti & Muktha LLC", logo: "/images/Clients/Clients2.png" },
    { name: "ThyssenKrupp", logo: "/images/Clients/Clients3.png" },
    { name: "MEGARME", logo: "/images/Clients/Clients4.png" },
    { name: "New Trade Links LLC", logo: "/images/Clients/Clients5.png" },
    { name: "Ferrotech International Fze", logo: "/images/Clients/Clients6.png" },
    { name: "Al Ghandi Electronics", logo: "/images/Clients/Clients7.png" },
    { name: "Hi-Tec", logo: "/images/Clients/Clients8.png" },
    { name: "Somec-Sharaf", logo: "/images/Clients/Clients9.png" },
    { name: "STADLERS", logo: "/images/Clients/Clients10.png" },
    { name: "AL REYAMI", logo: "/images/Clients/Clients11.png" },
    { name: "Dutco Balfour Beatty LLC", logo: "/images/Clients/Clients12.png" },
    { name: "AL REYAMI INTERIORS", logo: "/images/Clients/Clients13.png" }
  ];

  return (
    <div className="pageContainer">

      <table cellPadding="0" border="0" cellSpacing="0" width="100%">
        <tbody>

          <tr>
            <td>
              <span className="PageHeader">Our Clients</span>
            </td>
          </tr>

          <tr>
            <td align="center">
              <img
                src="/images/Common/clientsbnr.png"
                alt="Our Clients"
                title="Our Clients"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </td>
          </tr>

          <tr>
            <td style={{ height: "20px" }}></td>
          </tr>

          <tr>
            <td>

              <table
                className="ClientGridView"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
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
                          style={{
                            maxWidth: "150px",
                            height: "auto"
                          }}
                        />
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
};

export default Clients;