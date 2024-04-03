import {WIDGETS_ACTION_TYPES} from "./widgets.types";

export const setAddedWidgets = (payload) => {
    return {
        payload,
        type: WIDGETS_ACTION_TYPES.SET_ADDED_WIDGETS
    };
};


