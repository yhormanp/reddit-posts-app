export function test() {
    return async (dispatch) => {
        try {
            dispatch();

        } catch (error) {
            // dispatch(registerError)
        }
    }
}