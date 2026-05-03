import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle } from 'lucide-react';

const DosAndDonts = React.memo(({ data }) => {
  return (
    <section className="glass-panel" aria-labelledby="rules-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <AlertTriangle size={24} color="#ef4444" aria-hidden="true" />
        <h2 id="rules-heading">Voting Do's and Don'ts</h2>
      </div>
      <div className="dos-donts-container">
        <div className="dos-list">
          <h3 style={{ color: '#10b981', marginBottom: '1rem' }} id="dos-heading">Do's</h3>
          <ul aria-labelledby="dos-heading">
            {data.dos.map((item, index) => (
              <li key={`do-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="donts-list">
          <h3 style={{ color: '#ef4444', marginBottom: '1rem' }} id="donts-heading">Don'ts</h3>
          <ul aria-labelledby="donts-heading">
            {data.donts.map((item, index) => (
              <li key={`dont-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

DosAndDonts.displayName = 'DosAndDonts';

DosAndDonts.propTypes = {
  data: PropTypes.shape({
    dos: PropTypes.arrayOf(PropTypes.string).isRequired,
    donts: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DosAndDonts;
