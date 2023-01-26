
import polishMessages from 'ra-language-polish';


// https://marmelab.com/react-admin/doc/4.3/TranslationTranslating.html#translating-custom-components

// note i18n_PL
// infO i18n_PL

export const pl = {
    ...polishMessages,
    myroot: {
        fullname: 'Przedstawiciel',
        issuer: 'Wystawca',
        sitebar : {
            main_menu: {
                header: {
                    section_create: 'Dodaj nowy',
                    section_list: 'Lista'
                }
            }
        },
        form: {
            placeholder: {
                notebox_invoice: 'Wprowadź własne adnotacje...',
            },
            label: {
                inputbox_itemrow:{
                    itemNameSelect: 'Wybierz produkt',
                    itemNameField: 'Nazwa produktu',
                    taxItem: 'VAT',
                    typeItem: 'Typ',
                    qtyItem: 'Ilość',
                    netItem: 'Cena netto',
                    grossItem: 'Cena brutto'

                },
                input: {
                    buyerAutocomplete: 'Kupujący',
                    invoice_no: 'Numer faktury',
                    created_at: 'Data Wystawienia',
                    payment_due: 'Termin Płatności',
                },
                checkbox: {
                    send_invoice: 'Wyślij',
                    payment_invoice: 'Forma płatności',
                },
                header: {
                    address: 'Adres',
                    contact: 'Kontakt',
                    additional_note: 'Uwagi do faktury',
                    optionbox_invoice: 'Opcje dodatkowe',
                    payment_channel: 'Forma płatności',
                    send_invoice: 'Prześlij dokument'
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