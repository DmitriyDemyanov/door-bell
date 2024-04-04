import {WIDGETS_ACTION_TYPES} from "./widgets.types";

export const addWidget = (payload) => {
    return {
        payload,
        type: WIDGETS_ACTION_TYPES.SET_ADDED_WIDGETS
    };
};

export const deleteWidget = (payload) => {
    return {
        payload,
        type: WIDGETS_ACTION_TYPES.SET_ADDED_WIDGETS
    };
};


