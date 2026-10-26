import React from 'react';
import SpecialistAreas from '../components/SpecialistAreas';

const MildSteel = () => {
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
                      <span className="PageHeader">Mild Steel Works and Fabrications</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="ContentsView">
                      <p className="parp">
                        Oil field Skids, Steel Structures, Industrial sheds, Mezzanine floors, staircases,
                        handrails, platforms, Car park sheds, Lift Separator Beams, Canopies, Walk ways,
                        Gratings, Trench covers, ladders, Chequered plates, light poles, Anchor bolts,
                        brackets and other miscellaneous Steel items as per drawing and specifications.
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

export default MildSteel;
