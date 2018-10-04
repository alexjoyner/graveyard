import React from 'react';
import { connect } from 'react-redux';
import {  ListItem, ListHeader, CenteredContent, Button, colors, getUniqueID } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/lib/go';
import { buildNewHistoryGraph } from '../HistoricalGraphModal/actions';


let MultiSelectedChartsMenu = (props) => {
    return (
        <div>
            <br />
            <ListHeader>Charts Selected:</ListHeader>
            <CenteredContent>
                {props.chartInputs.map((chartInput) => {
                    return (
                        <ListItem key={chartInput.source.id}>
                            {chartInput.source.name}
                            <Button size="small" color="dark" onClick={() => props.dispatch({
                                type: 'REMOVE_INPUT', data: chartInput.source.id})}>
                                <GoTrashcan size={20} color={colors.dangerLight}/>
                            </Button>
                        </ListItem>
                    ) 
                })}
                <ListItem 
                    color="primary" 
                    onClick={() => buildNewHistoryGraph(props.chartInputs, {})(props.dispatch)}>
                    Get Graphs
                </ListItem>
            </CenteredContent>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.MultiSelectedChartsMenuReducer
    }
}

MultiSelectedChartsMenu = connect(mapStateToProps, null)(MultiSelectedChartsMenu);
export { MultiSelectedChartsMenu };
