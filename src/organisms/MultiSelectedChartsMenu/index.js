import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListHeader, CenteredContent, Button, colors } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/lib/go';
import { buildHistoryGraph } from '../HistoricalGraphModal/utils/buildHistoryGraph';
import { removeInput } from './actions';


const BaseMultiSelectedChartsMenu = props => (
  <div>
    <br />
    <ListHeader>Charts Selected:</ListHeader>
    <CenteredContent>
      {props.chartInputs.map(chartInput => (
        <ListItem key={chartInput.source.id}>
          {chartInput.source.name}
          <Button
            size="small"
            color="dark"
            onClick={() => removeInput(chartInput.source.id)}
          >
            <GoTrashcan size={20} color={colors.dangerLight} />
          </Button>
        </ListItem>
      ))}
      <ListItem
        color="primary"
        onClick={() => buildHistoryGraph(props.chartInputs, {})(props.dispatch)}
      >
        Get Graphs
      </ListItem>
    </CenteredContent>
  </div>
);
BaseMultiSelectedChartsMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chartInputs: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.shape({
      id: PropTypes.string,
      inputname: PropTypes.string,
      unit: PropTypes.string,
    }),
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  })).isRequired,
};

const mapStateToProps = state => ({
  ...state.MultiSelectedChartsMenuReducer,
});

const MultiSelectedChartsMenu = connect(mapStateToProps, null)(BaseMultiSelectedChartsMenu);
export { MultiSelectedChartsMenu };
