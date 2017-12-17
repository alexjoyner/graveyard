export const basicDragCollect = (connect) => ({connectDragSource: connect.dragSource()});;
export const basicDragSpec = {
    beginDrag(props){
        return {type: props.type};
    }
};

export const basicDropCollect = (connect, monitor) => ({connectDropTarget: connect.dropTarget()});
export const basicDropSpec = {
    drop(props, monitor){
        props.onDrop(monitor.getItem());
    }
};