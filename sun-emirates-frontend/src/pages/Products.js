import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="pageContainer">
      <div className="proHeader">
        <span className="PageHeader">Range of Products</span><br />
        <p>Supply and Installation of</p>
      </div>
      <div className="proContainer">
        <div className="proLeftPane">
          <div>
            <table cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td align="center" colSpan={2}>
                    <img 
                      src="/images/Common/productsbnr.png" 
                      alt="Range of Products" 
                      title="Range of Products"
                      align="absMiddle"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '20px' }}>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="osa">
            <div className="pspan1">Our Specialist areas,</div>
            <ul>
              <li>
                <Link to="/stainless-steel" title="Stainless Steel Works and Fabrications">
                  Stainless Steel Works and Fabrications
                </Link>
              </li>
              <li>
                <Link to="/mild-steel" title="Mild Steel Works and Fabrications">
                  Mild Steel Works and Fabrications
                </Link>
              </li>
              <li>
                <Link to="/machine-shop" title="Machine Shop">Machine Shop</Link>
              </li>
              <li>
                <Link to="/pre-fabrication" title="Pre Fabrication Activities">
                  Pre Fabrication Activities
                </Link>
              </li>
              <li>
                <Link to="/surface-treatment" title="Surface Treatment">Surface Treatment</Link>
              </li>
              <li>
                <Link to="/finishing-activities" title="Finishing Activities">
                  Finishing Activities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="proRightPane"></div>
      </div>
    </div>
  );
};

export default Products;
