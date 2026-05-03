import React from 'react';
import PropTypes from 'prop-types';
import { CalendarDays } from 'lucide-react';

const Timeline = React.memo(({ data }) => {
  return (
    <section className="glass-panel timeline-section" aria-labelledby="timeline-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <CalendarDays size={24} color="var(--primary)" aria-hidden="true" />
        <h2 id="timeline-heading">Key Election Dates</h2>
      </div>
      <div className="timeline-container" role="list">
        {data.map((item) => (
          <div key={item.id} className="timeline-item" role="listitem">
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p style={{ color: '#cbd5e1', marginTop: '0.5rem', fontSize: '0.95rem' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

Timeline.displayName = 'Timeline';

Timeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Timeline;
