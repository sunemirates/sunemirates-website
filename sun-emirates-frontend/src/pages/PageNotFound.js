import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="pageContainer">
      <table cellpadding="0" border="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td align="center">
              <div className="Error32" style={{ margin: '50px auto', maxWidth: '500px' }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <p>
                  <Link to="/" style={{ color: '#342a67' }}>Click here to go to Home Page</Link>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PageNotFound;
