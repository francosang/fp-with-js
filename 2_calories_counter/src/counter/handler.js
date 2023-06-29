import Event from './event';

function showMealForm(model) {
    return { ...model, isAdding: true };
}

function closeMealForm(model) {
    return { ...model, isAdding: false };
}

function handler(event, model) {
    switch (event) {
        case Event.ShowMealForm:
            return showMealForm(model);
        case Event.CloseMealForm:
            return closeMealForm(model);
    }
    return model;
}

export default handler;