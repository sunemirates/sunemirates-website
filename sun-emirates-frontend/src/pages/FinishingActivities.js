import React from 'react';
import SpecialistAreas from '../components/SpecialistAreas';

const FinishingActivities = () => {
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
                      <span className="PageHeader">Finishing Activities</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ContentsView">
                      <p className="parp">
                        Anodizing, Etching & Engraving, Antique finish, Lacquering, Chrome, Nickel, Copper,
                        Brass, Cadmium, Silver & Gold plating and SS Mirror polishing / SS Matt / SS satin/SS
                        Hairline finish works.
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

export default FinishingActivities;
