import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListHeader, CenteredContent, Button, colors } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/lib/go';
import { buildHistoryGraph } from '../HistoricalGraphModal/utils/buildHistoryGraph';
import { removePoint } from './actions';
import { Points } from '../../propTypes';


const BaseMultiSelectedChartsMenu = props => (
  <div>
    <br />
    <ListHeader>Charts Selected:</ListHeader>
    <CenteredContent>
      {Object.keys(props.multiSelectedPoints).map(pointID => (
        <ListItem key={pointID}>
          {props.multiSelectedPoints[pointID].name}
          <Button
            size="small"
            color="dark"
            onClick={() => props.removePoint(pointID)}
          >
            <GoTrashcan size={20} color={colors.dangerLight} />
          </Button>
        </ListItem>
      ))}
      <ListItem
        color="primary"
        onClick={() => buildHistoryGraph(props.multiSelectedPoints, {})}
      >
        Build Graph
      </ListItem>
    </CenteredContent>
  </div>
);
BaseMultiSelectedChartsMenu.propTypes = {
  removePoint: PropTypes.func.isRequired,
  multiSelectedPoints: Points.isRequired,
};

const mapStateToProps = state => ({
  ...state.MultiSelectedChartsMenuReducer,
});

const MultiSelectedChartsMenu = connect(mapStateToProps, {
  removePoint,
})(BaseMultiSelectedChartsMenu);
export { MultiSelectedChartsMenu };
