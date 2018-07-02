import React from 'react';
import { connect } from 'react-redux';
import { Panel, ListItem, ListHeader, CenteredContent, Button, colors, getUniqueID } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/lib/go';


let MultiSelectedChartsMenu = (props) => {
    return (
        <div>
            <br />
            <ListHeader>Charts Selected:</ListHeader>
            <CenteredContent>
                {props.items.map((item, i) => {
                    console.log(item);
                    let id = getUniqueID();
                    return (
                        <ListItem key={id}>
                            {item.input.name}
                            <Button small dark onClick={() => props.dispatch({
                                type: 'REMOVE_INPUT', index: i})}>
                                <GoTrashcan size={20} color={colors.dangerLight}/>
                            </Button>
                        </ListItem>
                    )
                })}
                <ListItem color={colors.primary}>Get Graphs</ListItem>
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
