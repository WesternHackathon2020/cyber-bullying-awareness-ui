const initialStateTeacherReducer = {
    students: [],
    classes: [],
    name: 'Teacher',
};

export default (state = initialStateTeacherReducer, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
