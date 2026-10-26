import React from 'react';
import SpecialistAreas from '../components/SpecialistAreas';

const PreFabrication = () => {
  return (
    <div className="pageContainer">
      <table cellpadding="0" border="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td width="70%">
              <table cellpadding="0" border="0" cellspacing="0" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <span className="PageHeader">Pre Fabrication Activities</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ContentsView">
                      <p className="parp">
                        We can offer the Pre-fabrication operations like sheet/ plate shearing and bending;
                        pipe bending, rolling and punching.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="30%" valign="top" className="osa">
              <SpecialistAreas />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PreFabrication;
