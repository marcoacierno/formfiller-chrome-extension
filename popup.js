let formsList = null;
let fillFormButton = null;


const getFormsList = forms => {
    console.log('forms', forms);
    for (const form of forms) {
        const option = document.createElement('option');
        option.value = form;
        option.innerText = form;
        formsList.appendChild(option);
    }
};

const onChangeSelectedForm = e => {
    console.log('selected');
};

const onFillComplete = () => {
    console.log('fill complete');
};

const onFillForm = e => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fillform', formId: 'producer_form' }, onFillComplete);
    });
};

window.addEventListener('DOMContentLoaded', function () {
    formsList = document.querySelector('#forms-list');
    fillFormButton = document.querySelector('#fillform');

    formsList.addEventListener('change', onChangeSelectedForm);
    fillFormButton.addEventListener('click', onFillForm);

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {action: 'formslist'},
            getFormsList,
        );
    });
});
