import React from 'react';
import SpecialistAreas from '../components/SpecialistAreas';

const StainlessSteel = () => {
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
                      <span className="PageHeader">Stainless Steel Works and Fabrications</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ContentsView">
                      <p className="parp">
                        Handrails, Balustrades, Cladding, Panels, Spacer Fittings, Foot Rails, Handles,
                        Cabinets, Tables, inserts, inlays, Tanks, Pipings, Lift Entrance Jambs with Transom
                        and all kind of Decorative products & Architectural SS works for Joinery & Interior
                        decoration.
                      </p>
                      <br />
                      <p className="parp">
                        <strong>Projects Handled / Services Offered in Interiors (Stainless Steel)</strong>
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

export default StainlessSteel;
