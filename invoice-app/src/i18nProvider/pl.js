
import polishMessages from 'ra-language-polish';

// https://marmelab.com/react-admin/doc/4.3/TranslationTranslating.html#translating-custom-components

// note i18n_PL
// infO i18n_PL

export const pl = {
    ...polishMessages,
    myroot: {
        fullname: 'Przedstawiciel',
        issuer: 'Wystawca',
        form: {
            label: {
                input: {
                    buyerAutocomplete: 'Kupujący',
                },
                header: {
                    address: 'Adres',
                    contact: 'Kontakt'
                }
            }
        }

    },
    resources: {
        dbclientlist: {
            name: 'Kontrahent |||| Kontrahenci',
            fields: {
                company_name: 'Nazwa Firmy',
                fullname: {
                    surname: 'Imię',
                    forename: 'Nazwisko'
                },
                orgId: {
                    MVA: 'MVA',
                    orgNumber: 'Numer MVA'
                },
                address: {
                    street: 'Ulica',
                    ZIPCode: 'Kod Pocztowy',
                    city: 'Miasto'
                },
                contact: {
                    email: 'Adres Email',
                    phoneNumber: 'Numer Telefonu',
                    companyRepresentative: 'Przedstawiciel'
                }
            },
        },
        issuedInvoices_list: {
            name: 'Faktura |||| Faktury',
            fields: {
                company: 'Nazwa Firmy',
                fullname: {
                    surname: 'Imię',
                    forename: 'Nazwisko'
                },
                orgId: {
                    MVA: 'MVA',
                    orgNumber: 'Numer MVA'
                },
                address: {
                    street: 'Ulica',
                    ZIPCode: 'Kod Pocztowy',
                    city: 'Miasto'
                },
                contact: {
                    email: 'Adres Email',
                    phoneNumber: 'Numer telefonu',
                    companyRepresentative: 'Przedstawiciel'
                }
            },
        }
    }
};























// https://marmelab.com/react-admin/doc/4.3/TranslationTranslating.html#translating-custom-components




// https://marmelab.com/react-admin/doc/4.3/TranslationTranslating.html#translating-custom-components

// const i18nProvider = {
//     translate: key => key,
//     changeLocale: locale => Promise.resolve(),
//     getLocale: () => 'en',
// }




// https://marmelab.com/blog/2022/09/05/react-admin-septempter-2022-updates.html
// const i18nProvider = {
//     translate: (key, options) => { /* ... */},
//     changeLocale: locale => { /* ... */},
//     getLocale: () => { /* ... */},
//     getLocales: () => {
//         return [
//             { locale: 'en-US'; name: 'English' },
//             { locale: 'fr-FR'; name: 'Français' },
//         ]
//     };
// }