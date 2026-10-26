import React from 'react';
import SpecialistAreas from '../components/SpecialistAreas';

const SurfaceTreatment = () => {
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
                      <span className="PageHeader">Surface Treatment</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ContentsView">
                      <p className="parp">
                        Sand/Shot blasting, galvanizing, Epoxy/Enamel painting, powder coating, and Electro-plating.
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

export default SurfaceTreatment;
