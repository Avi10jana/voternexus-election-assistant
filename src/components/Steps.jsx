import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle2 } from 'lucide-react';

const Steps = React.memo(({ data }) => {
  return (
    <section className="glass-panel" aria-labelledby="steps-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <CheckCircle2 size={24} color="var(--accent)" aria-hidden="true" />
        <h2 id="steps-heading">Steps to Vote</h2>
      </div>
      <div className="steps-container" role="list">
        {data.map((step) => (
          <div key={step.id} className="step-card" role="listitem">
            <div className="step-number" aria-hidden="true">{step.id}</div>
            <div>
              <h3 style={{ marginBottom: '0.3rem' }}>{step.title}</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Steps.displayName = 'Steps';

Steps.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Steps;
