window.__FORMFILLER__loremFill = input => {
    const inputType = input.type;
    const inputName = input.name.toLocaleLowerCase();
    const autocomplete = input.autocomplete;

    if (inputType !== 'text' && input.tagName !== 'TEXTAREA') {
        console.log('NTFOR LOREM', input)
        return null;
    }

    const commonLoremFields = [
        'description',
    ];

    const found = commonLoremFields.filter(name => inputName.indexOf(name) !== -1);

    if (found.length > 0) {
        return window.__FORMFILLER__getRandom(loremIpsum).trim();
    }

    return null;
};


const loremIpsum = [
    `Eligo pluvia vitae ora galea impera galea culpa trivia commodi, et impera neque dolor, negotium,
    gratia amet lege commodi galea lacuna benevolentia ipsum sed ergo, ventum iudex divide galea officia,
    trivia lacuna commodi caelum consetetur commodi dulcis, legio. Trivia. Oblivio vitae paratus ora amet modestus
    abundantia officia gratia legio quis caelum galea dolor juvenis insula ipsum. Sit lorem probitas medius labora.`,
    `Lacrima minim ora elit amet ipsum ipsum canvallis impera virtus. In abundantia ipsum, sed sum, quis, culpa,
    labora minim quis. Oblivio, dolor medius oblivio cogito minim cogito gratia lacuna dulcis commodi ipsum dulcis
    infantia ergo lege probitas, ventum virtus infantia dolor elit divide ora neque.`,
];