import PropTypes from 'prop-types';

export const PointSource = PropTypes.shape({
  id: PropTypes.string,
  inputname: PropTypes.string,
  unit: PropTypes.string,
});
export const Log = PropTypes.arrayOf(PropTypes.number);
export const Point = PropTypes.shape({
  source: PointSource,
  data: PropTypes.arrayOf(Log),
});
