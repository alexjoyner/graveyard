import PropTypes from 'prop-types';

export const Log = PropTypes.arrayOf(PropTypes.number);
export const Point = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  settings: PropTypes.shape({
    unit: PropTypes.string,
  }),
  data: PropTypes.arrayOf(Log),
});

export const Points = PropTypes.shape({
  [PropTypes.string]: Point,
});
