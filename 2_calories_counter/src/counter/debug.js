import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';

const { div, label, input, pre } = hh(h);

// Helper function to determine input type based on property type
function inputWidget(model, key, value, emit) {
    if (typeof value === 'boolean') {
        return input({
            type: 'checkbox',
            checked: value,
            onchange: event => {
                emit(updateModel(model, key, event.target.checked));
            }
        });
    } else if (typeof value === 'number') {
        return input({
            type: 'number',
            value,
            onchange: event => {
                emit(updateModel(model, key, Number(event.target.value)));
            }
        });
    } else if (typeof value === 'string') {
        return input({
            type: 'text',
            value,
            onchange: event => {
                emit(updateModel(model, key, event.target.value));
            }
        });
    } else if (typeof value === 'object' && !Array.isArray(value)) {
        return generateDebugForm(value, nestedValue => {
            emit(updateModel(model, key, nestedValue));
        });
    } else if (Array.isArray(value)) {
        return value.map((item, index) =>
            div(
                { className: 'ml4' },
                generateDebugForm(item, nestedValue => {
                    const updatedArray = [...value];
                    updatedArray[index] = nestedValue;
                    emit(updateModel(model, key, updatedArray));
                })
            )
        );
    }
}

// Helper function to update the model with the new value
function updateModel(model, key, value) {
    return { ...model, [key]: value };
}

// Generate the debug form
function generateDebugForm(model, emit) {
    return Object.entries(model).map(([key, value]) =>
        div(
            { className: 'mv2 mw3' },
            [
                label({ for: key }, `${key}: `),
                inputWidget(model, key, value, emit)
            ]
        )
    );
}

function debugForm(model, emit) {
    return div(
        { className: 'ba bg-light-gray cf' },
        [
            div(
                { className: 'fl w-100 w-50-ns pa2' },
                generateDebugForm(model, emit)
            ),
            div(
                { className: 'fl w-100 w-50-ns pa2' },
                pre(JSON.stringify(model, null, 2)),
            ),
        ]
    );
}

export default debugForm;