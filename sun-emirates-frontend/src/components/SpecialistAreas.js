import React from 'react';
import { Link } from 'react-router-dom';

const SpecialistAreas = () => {
  return (
    <div>
      <p className="pspan1">Our Specialist areas,</p>
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
          <Link to="/machine-shop" title="Machine Shop">
            Machine Shop
          </Link>
        </li>
        <li>
          <Link to="/pre-fabrication" title="Pre Fabrication Activities">
            Pre Fabrication Activities
          </Link>
        </li>
        <li>
          <Link to="/surface-treatment" title="Surface Treatment">
            Surface Treatment
          </Link>
        </li>
        <li>
          <Link to="/finishing-activities" title="Finishing Activities">
            Finishing Activities
          </Link>
        </li>
      </ul>
  
      </div>
    
  );
};

export default SpecialistAreas;
