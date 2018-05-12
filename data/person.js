window.__FORMFILLER__personFill = input => {
    const inputType = input.type;

    if (inputType !== 'text') {
        return null;
    }

    let value;

    if ((value = fillIfFirstName(input)) !== null) return value;
    if ((value = fillIfPhoneNumber(input)) !== null) return value;

    return null;
};

const fillIfFirstName = input => {
    const inputName = input.name.toLocaleLowerCase();

    const firstNameCommonNames = ['first_name', 'firstname', 'first-name'];
    const firstNameFound = firstNameCommonNames.filter(name => inputName.indexOf(name) !== -1);

    if (firstNameFound.length > 0) {
        return window.__FORMFILLER__getRandom(firstName);
    }

    return null;
};

const fillIfPhoneNumber = input => {
    const inputName = input.name.toLocaleLowerCase();
    const commonValues = ['phonenumber', 'phone_number', 'phone-number'];
    const found = commonValues.filter(name => inputName.indexOf(name) !== -1);
    if (found.length > 0) {
        return generatePhoneNumber();
    }

    return null;
};


window.__FORMFILLER__person = { data: {} };

const firstName = window.__FORMFILLER__person.data['firstName'] = [
    // male
    'David', 'Paul', 'Christopher', 'Thomas', 'John', 'Mark', 'James',
    'Stephen', 'Andrew', 'Jack', 'Michael', 'Daniel', 'Peter', 'Richard',
    'Matthew', 'Robert', 'Ryan', 'Joshua', 'Alan', 'Ian', 'Simon', 'Luke',
    'Samuel', 'Jordan', 'Anthony', 'Adam', 'Lee', 'Alexander', 'William',
    'Kevin', 'Darren', 'Benjamin', 'Philip', 'Gary', 'Joseph', 'Brian',
    'Steven', 'Liam', 'Keith', 'Martin', 'Jason', 'Jonathan', 'Jake',
    'Graham', 'Nicholas', 'Craig', 'George', 'Colin', 'Neil', 'Lewis',
    'Nigel', 'Oliver', 'Timothy', 'Stuart', 'Kenneth', 'Raymond', 'Jamie',
    'Nathan', 'Geoffrey', 'Connor', 'Terence', 'Trevor', 'Adrian', 'Harry',
    'Malcolm', 'Scott', 'Callum', 'Wayne', 'Aaron', 'Barry', 'Ashley',
    'Bradley', 'Patrick', 'Gareth', 'Jacob', 'Sean', 'Kieran', 'Derek',
    'Carl', 'Dean', 'Charles', 'Sam', 'Shaun', 'Ben', 'Roger', 'Mohammed',
    'Leslie', 'Ronald', 'Kyle', 'Clive', 'Edward', 'Antony', 'Jeremy',
    'Justin', 'Jeffrey', 'Christian', 'Roy', 'Karl', 'Alex', 'Gordon',
    'Dominic', 'Joe', 'Marc', 'Reece', 'Dennis', 'Russell', 'Gavin', 'Rhys',
    'Phillip', 'Allan', 'Robin', 'Charlie', 'Gerald', 'Ross', 'Francis',
    'Eric', 'Julian', 'Bernard', 'Dale', 'Donald', 'Damian', 'Frank',
    'Shane', 'Cameron', 'Norman', 'Duncan', 'Louis', 'Frederick', 'Tony',
    'Howard', 'Conor', 'Douglas', 'Garry', 'Elliot', 'Marcus', 'Arthur',
    'Vincent', 'Max', 'Mathew', 'Abdul', 'Henry', 'Martyn', 'Ricky',
    'Leonard', 'Lawrence', 'Glen', 'Mitchell', 'Gerard', 'Gregory', 'Iain',
    'Billy', 'Bryan', 'Joel', 'Clifford', 'Josh', 'Leon', 'Stewart',
    'Mohammad', 'Dylan', 'Graeme', 'Terry', 'Guy', 'Elliott', 'Stanley',
    'Danny', 'Brandon', 'Victor', 'Toby', 'Hugh', 'Mohamed', 'Brett',
    'Albert', 'Tom', 'Declan', 'Maurice', 'Glenn', 'Leigh', 'Denis',
    'Damien', 'Bruce', 'Jay', 'Owen',
    // female
    'Susan', 'Sarah', 'Rebecca', 'Linda', 'Julie', 'Claire', 'Laura',
    'Lauren', 'Christine', 'Karen', 'Nicola', 'Gemma', 'Jessica',
    'Margaret', 'Jacqueline', 'Emma', 'Charlotte', 'Janet', 'Deborah',
    'Lisa', 'Hannah', 'Patricia', 'Tracey', 'Joanne', 'Sophie', 'Carol',
    'Jane', 'Michelle', 'Victoria', 'Amy', 'Elizabeth', 'Helen', 'Samantha',
    'Emily', 'Mary', 'Diane', 'Rachel', 'Anne', 'Sharon', 'Ann', 'Tracy',
    'Amanda', 'Jennifer', 'Chloe', 'Angela', 'Louise', 'Katie', 'Lucy',
    'Barbara', 'Alison', 'Sandra', 'Caroline', 'Clare', 'Kelly', 'Bethany',
    'Gillian', 'Natalie', 'Jade', 'Pauline', 'Megan', 'Elaine', 'Alice',
    'Lesley', 'Catherine', 'Hayley', 'Pamela', 'Danielle', 'Holly', 'Wendy',
    'Abigail', 'Valerie', 'Olivia', 'Jean', 'Dawn', 'Donna', 'Stephanie',
    'Leanne', 'Kathleen', 'Natasha', 'Denise', 'Sally', 'Katherine',
    'Georgia', 'Maureen', 'Maria', 'Zoe', 'Judith', 'Kerry', 'Debra',
    'Melanie', 'Stacey', 'Eleanor', 'Paula', 'Shannon', 'Sheila', 'Joanna',
    'Paige', 'Janice', 'Lorraine', 'Georgina', 'Lynn', 'Andrea', 'Suzanne',
    'Nicole', 'Yvonne', 'Chelsea', 'Lynne', 'Anna', 'Kirsty', 'Shirley',
    'Alexandra', 'Marion', 'Beverley', 'Melissa', 'Rosemary', 'Kimberley',
    'Carole', 'Fiona', 'Kate', 'Joan', 'Marie', 'Jenna', 'Marilyn', 'Jodie',
    'June', 'Grace', 'Mandy', 'Rachael', 'Lynda', 'Tina', 'Kathryn',
    'Molly', 'Jayne', 'Amber', 'Marian', 'Jasmine', 'Brenda', 'Sara',
    'Kayleigh', 'Teresa', 'Harriet', 'Julia', 'Ashleigh', 'Heather', 'Kim',
    'Ruth', 'Jemma', 'Carly', 'Leah', 'Eileen', 'Francesca', 'Naomi',
    'Hilary', 'Abbie', 'Sylvia', 'Katy', 'Irene', 'Cheryl', 'Rosie',
    'Dorothy', 'Aimee', 'Vanessa', 'Ellie', 'Frances', 'Sian', 'Josephine',
    'Gail', 'Jill', 'Lydia', 'Joyce', 'Charlene', 'Hollie', 'Hazel',
    'Annette', 'Bethan', 'Amelia', 'Beth', 'Rita', 'Geraldine', 'Diana',
    'Lindsey', 'Carolyn'
];

// taken from
// https://github.com/joke2k/faker/blob/3073917302e4cec670871e5e9621ea46ab6489ee/faker/providers/phone_number/en_GB/__init__.py
const phoneFormats = [
    '07700 900 ###', '07700 900###', '07700900###', '(07700) 900 ###', '(07700) 900###', '(07700)900###',
    '+447700 900 ###', '+447700 900###', '+447700900###', '+44(0)7700 900 ###', '+44(0)7700 900###', '+44(0)7700900###',
    '0113 496 0###', '0113 4960###', '01134960###', '(0113) 496 0###', '(0113) 4960###', '(0113)4960###',
    '+44113 496 0###', '+44113 4960###', '+441134960###', '+44(0)113 496 0###', '+44(0)113 4960###', '+44(0)1134960###',
    '0114 496 0###', '0114 4960###', '01144960###', '(0114) 496 0###', '(0114) 4960###', '(0114)4960###', '+44114 496 0###',
    '+44114 4960###', '+441144960###', '+44(0)114 496 0###', '+44(0)114 4960###', '+44(0)1144960###', '0115 496 0###',
    '0115 4960###', '01154960###', '(0115) 496 0###', '(0115) 4960###', '(0115)4960###', '+44115 496 0###',
    '+44115 4960###', '+441154960###', '+44(0)115 496 0###', '+44(0)115 4960###', '+44(0)1154960###',
    '0116 496 0###', '0116 4960###', '01164960###', '(0116) 496 0###', '(0116) 4960###', '(0116)4960###',
    '+44116 496 0###', '+44116 4960###', '+441164960###', '+44(0)116 496 0###', '+44(0)116 4960###', '+44(0)1164960###',
    '0117 496 0###', '0117 4960###', '01174960###', '(0117) 496 0###','(0117) 4960###','(0117)4960###','+44117 496 0###',
    '+44117 4960###','+441174960###','+44(0)117 496 0###','+44(0)117 4960###','+44(0)1174960###','0118 496 0###',
    '0118 4960###','01184960###','(0118) 496 0###','(0118) 4960###','(0118)4960###','+44118 496 0###','+44118 4960###',
    '+441184960###','+44(0)118 496 0###','+44(0)118 4960###','+44(0)1184960###','0121 496 0###','0121 4960###','01214960###',
    '(0121) 496 0###','(0121) 4960###','(0121)4960###','+44121 496 0###','+44121 4960###','+441214960###','+44(0)121 496 0###',
    '+44(0)121 4960###','+44(0)1214960###','0131 496 0###','0131 4960###','01314960###','(0131) 496 0###','(0131) 4960###',
    '(0131)4960###','+44131 496 0###','+44131 4960###','+441314960###','+44(0)131 496 0###','+44(0)131 4960###',
    '+44(0)1314960###','0141 496 0###','0141 4960###','01414960###','(0141) 496 0###','(0141) 4960###','(0141)4960###',
    '+44141 496 0###','+44141 4960###','+441414960###','+44(0)141 496 0###','+44(0)141 4960###','+44(0)1414960###',
    '0151 496 0###','0151 4960###','01514960###','(0151) 496 0###','(0151) 4960###','(0151)4960###','+44151 496 0###',
    '+44151 4960###','+441514960###','+44(0)151 496 0###', '+44(0)151 4960###', '+44(0)1514960###', '0161 496 0###',
    '0161 4960###', '01614960###', '(0161) 496 0###', '(0161) 4960###', '(0161)4960###', '+44161 496 0###', '+44161 4960###',
    '+441614960###', '+44(0)161 496 0###', '+44(0)161 4960###', '+44(0)1614960###', '0191 498 0###', '0191 4960###',
    '01914960###', '(0191) 496 0###', '(0191) 4960###', '(0191)4960###','+44191 496 0###','+44191 4960###',
    '+441914960###','+44(0)191 496 0###','+44(0)191 4960###','+44(0)1914960###','020 7946 0###','020 74960###',
    '02074960###','(020) 7496 0###','(020) 74960###','(020)74960###','+4420 7496 0###','+4420 74960###','+442074960###',
    '+44(0)20 7496 0###','+44(0)20 74960###','+44(0)2074960###','028 9018 0###','028 9018###','0289018###','(028) 9018 0###',
    '(028) 9018###', '(028)9018###', '+4428 9018 0###', '+4428 9018###', '+44289018###', '+44(0)28 9018 0###',
    '+44(0)28 9018###', '+44(0)289018###', '029 2018 0###', '029 2018###', '0292018###', '(029) 2018 0###',
    '(029) 2018###', '(029)2018###', '+4429 2018 0###', '+4429 2018###', '+44292018###', '+44(0)29 2018 0###',
    '+44(0)29 2018###', '+44(0)292018###', '01632 960 ###', '01632 960###', '01632960###', '(01632) 960 ###',
    '(01632) 960###', '(01632)960###', '+441632 960 ###', '+441632 960###', '+441632960###', '+44(0)1632 960 ###',
];

const generatePhoneNumber = () => {
    const phone = window.__FORMFILLER__getRandom(phoneFormats);
    return phone.replace(/#/g, (match, p1, offset, string) => Math.floor(Math.random() * 9));
};
