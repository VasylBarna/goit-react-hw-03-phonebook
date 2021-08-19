import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.find}>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
