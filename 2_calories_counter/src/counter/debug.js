import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';

const { div, label, input, pre, button } = hh(h);

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
        const elements = value.map((item, index) =>
            div(
                { className: 'ml4' },
                [
                    generateDebugForm(item, nestedValue => {
                        const updatedArray = [...value];
                        updatedArray[index] = nestedValue;
                        emit(updateModel(model, key, updatedArray));
                    }),
                    value.length > 1 ? button(
                        {
                            className: 'mb2',
                            onclick: () => {
                                const updatedArray = [...value];
                                updatedArray.splice(index, 1);
                                emit(updateModel(model, key, updatedArray));
                            }
                        },
                        'Remove'
                    ) : null,
                ],
            )
        );
        return div([
            addButton(model, key, emit),
            ...elements
        ]);
    }
}

function addButton(model, key, emit) {
    return button(
        {
            className: 'mb2',
            onclick: () => {
                console.log(key);
                emit(updateModel(model, key, [...model[key], model[key].at(-1)]));
            }
        },
        'Copy last'
    );
}

// Helper function to update the model with the new value
function updateModel(model, key, value) {
    return { ...model, [key]: value };
}

// Generate the debug form
function generateDebugForm(model, emit) {
    return Object.entries(model).map(([key, value]) =>
        div(
            { className: 'mw4 pb2' },
            [
                label({ for: key }, `${key}: `),
                inputWidget(model, key, value, emit)
            ]
        )
    );
}

function row(col1, col2) {
    return div(
        { className: 'w-100 flex pa4 ba bg-light-gray absolute bottom-0 overflow-scroll vh-50' },
        [
            div(
                { className: 'w-50' },
                col1,
            ),
            div(
                { className: 'w-50' },
                col2,
            ),
        ]
    );
}

function debugForm(model, emit) {
    return row(
        generateDebugForm(model, emit),
        pre(JSON.stringify(model, null, 2)),
    );
}

export default debugForm;