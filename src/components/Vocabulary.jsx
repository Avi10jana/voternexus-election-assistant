import React from 'react';
import PropTypes from 'prop-types';
import { BookOpen } from 'lucide-react';

const Vocabulary = React.memo(({ data }) => {
  return (
    <section className="glass-panel" aria-labelledby="vocab-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <BookOpen size={24} color="#f59e0b" aria-hidden="true" />
        <h2 id="vocab-heading">Election Vocabulary</h2>
      </div>
      <div className="vocabulary-grid">
        {data.map((vocab) => (
          <div key={vocab.id} className="vocab-card" tabIndex="0">
            <h3 className="vocab-term">{vocab.term}</h3>
            <p className="vocab-definition">{vocab.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

Vocabulary.displayName = 'Vocabulary';

Vocabulary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    term: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
  })).isRequired,
};

export default Vocabulary;
