const forms = [...document.querySelectorAll('form')];
const fillers = [
    window.__FORMFILLER__personFill,
    window.__FORMFILLER__loremFill,
];


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'formslist') {
        console.log('send', forms.map(form => form.getAttribute('id')));
        sendResponse(forms.map(form => form.getAttribute('id')));
    }

    if (message.action === 'fillform') {
        fillForm(message.formId, sendResponse);
    }
});

const fillForm = (formId, onComplete) => {
    const inputs = [...document.querySelectorAll(`#${formId} input, #${formId} textarea`)];
    inputs.forEach(input => {
        if (skipInput(input)) {
            return;
        }

        for (const filler of fillers) {
            const data = filler(input);

            if (data !== null) {
                console.log('put', data, 'into', input);
                if (isTextarea(input)) {
                    input.innerHTML = data;
                } else {
                    input.value = data;
                }
                break;
            }
        }
    });

    onComplete();
};

const skipInput = input => input.type === 'hidden';
const isTextarea = input => input.tagName === 'TEXTAREA';

window.__FORMFILLER__getRandom = list => {
    return list[Math.floor(Math.random() * list.length)];
};
