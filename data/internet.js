window.__FORMFILLER__internetFill = (input, form) => {
    const inputType = input.type;
    const inputName = input.name.toLocaleLowerCase();
    const autocomplete = input.autocomplete;

    if (inputType === 'email') {
        const randomFirstName = window.__FORMFILLER__getRandom(window.__FORMFILLER__person.data['firstName']).toLocaleLowerCase();
        const randomProvider = window.__FORMFILLER__getRandom(EMAIL_PROVIDERS);
        return `${randomFirstName}@${randomProvider}`;
    }

    let value = null;

    if ((value = fillIfSlug(input, form)) !== null) return value;

    return null;
};

const fillIfSlug = (input, form) => {
    if (input.type !== 'text' || input.name.toLocaleLowerCase() !== 'slug') {
        return null;
    }

    const djangoAutocompleteScript = document.querySelector('script[id="django-admin-prepopulated-fields-constants"]');

    /* try to understand if the following field is based on some other field (django) */
    console.log('djangoAutocompleteScript', djangoAutocompleteScript)
    if (djangoAutocompleteScript) {
        const autocompleteFields = JSON.parse(djangoAutocompleteScript.getAttribute('data-prepopulated-fields'));
        for (const field of autocompleteFields) {
            console.log('field id', field.id, 'input id', input.id)
            if (field.id.slice(1) !== input.id) {
                continue;
            }

            // todo: support for multiple dependencies
            const dependencyId = field.dependency_ids[0];
            const dependencyInput = form.querySelector(`input${dependencyId}`);
            return slugify(dependencyInput.value);
        }
    }

    let words = '';
    for (let i = 0; i < 5; i++) {
        const word = window.__FORMFILLER__getRandom(window.__FORMFILLER__lorem.data['words']);
        words = `${words} ${word}`;
    }

    return slugify(words);
};

const slugify = str => {
    // https://gist.github.com/codeguy/6684588
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}



const EMAIL_PROVIDERS = [
    '1033edge.com',
    '11mail.com',
    '123.com',
    '123box.net',
    '123india.com',
    '123mail.cl',
    '123qwe.co.uk',
    '150ml.com',
    '15meg4free.com',
    '163.com',
    '1coolplace.com',
    '1freeemail.com',
    '1funplace.com',
    '1internetdrive.com',
    '1mail.net',
    '1me.net',
    '1mum.com',
    '1musicrow.com',
    '1netdrive.com',
    '1nsyncfan.com',
    '1under.com',
    '1webave.com',
    '1webhighway.com',
    '212.com',
    '24horas.com',
    '2911.net',
    '2bmail.co.uk',
    '2d2i.com',
    '2die4.com',
    '3000.it',
    '321media.com',
    '37.com',
    '3ammagazine.com',
    '3dmail.com',
    '3email.com',
    '3xl.net',
    '444.net',
    '4email.com',
    '4email.net',
    '4mg.com',
    '4newyork.com',
    '4x4man.com',
    '5iron.com',
    '5star.com',
    '88.am',
    '8848.net',
    '888.nu',
    '97rock.com',
    'aaamail.zzn.com',
    'aamail.net',
    'aaronkwok.net',
    'abbeyroadlondon.co.uk',
    'abcflash.net',
    'abdulnour.com',
    'aberystwyth.com',
    'abolition-now.com',
    'about.com',
    'academycougars.com',
    'acceso.or.cr',
    'access4less.net',
    'accessgcc.com',
    'ace-of-base.com',
    'acmecity.com',
    'acmemail.net',
    'acninc.net',
    'adelphia.net',
    'adexec.com',
    'adfarrow.com',
    'adios.net',
    'ados.fr',
    'advalvas.be',
    'aeiou.pt',
    'aemail4u.com',
    'aeneasmail.com',
    'afreeinternet.com',
    'africamail.com',
    'agoodmail.com',
    'ahaa.dk',
    'aichi.com',
    'aim.com',
    'airforce.net',
    'airforceemail.com',
    'airpost.net',
    'ajacied.com',
    'ak47.hu',
    'aknet.kg',
    'albawaba.com',
    'alex4all.com',
    'alexandria.cc',
    'algeria.com',
    'alhilal.net',
    'alibaba.com',
    'alive.cz',
    'allmail.net',
    'alloymail.com',
    'allracing.com',
    'allsaintsfan.com',
    'alltel.net',
    'alskens.dk',
    'altavista.com',
    'altavista.net',
    'altavista.se',
    'alternativagratis.com',
    'alumnidirector.com',
    'alvilag.hu',
    'amele.com',
    'america.hm',
    'ameritech.net',
    'amnetsal.com',
    'amrer.net',
    'amuro.net',
    'amuromail.com',
    'ananzi.co.za',
    'ancestry.com',
    'andylau.net',
    'anfmail.com',
    'angelfan.com',
    'angelfire.com',
    'animal.net',
    'animalhouse.com',
    'animalwoman.net',
    'anjungcafe.com',
    'anote.com',
    'another.com',
    'anotherwin95.com',
    'anti-social.com',
    'antisocial.com',
    'antongijsen.com',
    'antwerpen.com',
    'anymoment.com',
    'anytimenow.com',
    'aol.com',
    'apexmail.com',
    'apmail.com',
    'apollo.lv',
    'approvers.net',
    'arabia.com',
    'arabtop.net',
    'arcademaster.com',
    'archaeologist.com',
    'arcor.de',
    'arcotronics.bg',
    'argentina.com',
    'aristotle.org',
    'army.net',
    'arnet.com.ar',
    'artlover.com',
    'artlover.com.au',
    'as-if.com',
    'asean-mail.com',
    'asheville.com',
    'asia-links.com',
    'asia.com',
    'asiafind.com',
    'asianavenue.com',
    'asiancityweb.com',
    'asiansonly.net',
    'asianwired.net',
    'asiapoint.net',
    'assala.com',
    'assamesemail.com',
    'astroboymail.com',
    'astrolover.com',
    'astrosfan.com',
    'astrosfan.net',
    'asurfer.com',
    'athenachu.net',
    'atina.cl',
    'atl.lv',
    'atlaswebmail.com',
    'atlink.com',
    'ato.check.com',
    'atozasia.com',
    'att.net',
    'attglobal.net',
    'attymail.com',
];
