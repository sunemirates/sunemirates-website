import React from 'react';

const Services = () => {
  const services = [
    'Sheet/ Plate Shearing and Bending',
    'Cutting of Plates',
    'Rolling of Cones',
    'Shuttering & Manholes',
    'Bending of Pipes',
    'Blasting and Painting',
    'Onshore and offshore services'
  ];

  return (
    <div className="pgeCntWrapper">
      <table cellpadding="0" border="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td width="70%" align="left">
              <table cellpadding="2" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <span className="PageHeader">Services</span>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <img 
                        src="/images/Common/Servicesbnr.png" 
                        alt="Services" 
                        title="Services"
                        align="absMiddle"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ height: '20px' }}>
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td className="servicetd">
                      <div className="titldv">
                        We are specialized in the following services:
                      </div>
                      <div className="desdv">
                        <ul>
                          {services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="30%"></td>
          </tr>
          <tr>
            <td style={{ height: '25px' }} colSpan={2}>
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Services;
