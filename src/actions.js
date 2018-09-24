const initializeData = () => {
    return async (dispatch) => {
        try{
            console.log('Initializing');
        }
        catch (e) {
            console.error(e);
        }
    }
}

export {initializeData};