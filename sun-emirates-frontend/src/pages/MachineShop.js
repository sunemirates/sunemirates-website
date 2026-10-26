import React from 'react';
import SpecialistAreas from '../components/SpecialistAreas';

const MachineShop = () => {
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
                      <span className="PageHeader">Machine Shop</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ContentsView">
                      <p className="parp">
                        We undertake the machining of Flanges, couplings, Anchors and all general machining products.
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

export default MachineShop;
