import polyglotI18nProvider from 'ra-i18n-polyglot';
// import pl from 'ra-language-polish';
import { pl } from './pl';
import { no } from './no';
import en from 'ra-language-english';
// import no from 'ra-language-norwegian';
import norwegianMessages from 'ra-language-norwegian';
// https://github.com/jon-harald/ra-language-norwegian


// https://marmelab.com/react-admin/doc/4.3/TranslationSetup.html

// https://stackoverflow.com/questions/52605995/react-admin-tab-name-translate


const messages = {
    no: { component:{label:'test'},...norwegianMessages }
};


const translations = { pl, en, no };



export const i18nProvider = polyglotI18nProvider(locale => translations[locale], 'pl');



// in src/i18n/en.js
// import englishMessages from 'ra-language-english';

// export const en = {
//     ...englishMessages,
//     resources: {
//         shoe: {
//             name: 'Shoe |||| Shoes',
//             fields: {
//                 model: 'Model',
//                 stock: 'Nb in stock',
//                 color: 'Color',
//             },
//         },
//         customer: {
//             name: 'Customer |||| Customers',
//             fields: {
//                 first_name: 'First name',
//                 last_name: 'Last name',
//                 dob: 'Date of birth',
//             }
//         }
//     },
//     ...
// };