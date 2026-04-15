import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const getPageTitle = (path) => {
    const titles = {
      '': 'Home',
      'about': 'About Us',
      'products': 'Products',
      'services': 'Services',
      'clients': 'Clients',
      'equipments': 'Equipments',
      'contact': 'Contact Us',
      'feedback': 'Feedback',
      'sitemap': 'Sitemap',
      'locationmap': 'Location Map',
      'privacypolicy': 'Privacy Policy',
      'disclaimer': 'Disclaimer',
      'stainless-steel': 'Stainless Steel Works and Fabrications',
      'mild-steel': 'Mild Steel Works and Fabrications',
      'machine-shop': 'Machine Shop',
      'pre-fabrication': 'Pre Fabrication Activities',
      'surface-treatment': 'Surface Treatment',
      'finishing-activities': 'Finishing Activities'
    };
    return titles[path] || path;
  };

  return (
    <div className="breadcrumb" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
      gap: '8px',
      padding: '12px 20px',
      backgroundColor: '#f5f5f5',
      fontSize: '14px',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      minWidth: 'max-content'
    }}>
      <Link to="/" style={{
        color: '#555',
        textDecoration: 'none',
        whiteSpace: 'nowrap'
      }}>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <span style={{ color: '#1a3c6e', fontSize: '12px', whiteSpace: 'nowrap' }}>▶</span>
            {isLast ? (
              <span style={{ color: '#333', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {getPageTitle(name)}
              </span>
            ) : (
              <Link to={routeTo} style={{
                color: '#555',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}>
                {getPageTitle(name)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;