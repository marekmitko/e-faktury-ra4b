
import polishMessages from 'ra-language-polish';


 // note Omówić różnice  "orgId.orgNumber" "orgId.MVA"
// "org_nr": "12345698",
// "mva": "1",

// Oki  "email": "",
// Oki "phone": "",
// BUG "fax": "",
// ?? "main_kunde_nr": "0",
// ?? "lang": "",
// ?? "debt": "126188.10",
// ??"remainder": "0",
// ??"inkasso": "0",
// ?? // note "is_company": "1

















// https://marmelab.com/react-admin/doc/4.3/TranslationTranslating.html#translating-custom-components

// note i18n_PL
// infO i18n_PL

export const pl = {
    ...polishMessages,

    myroot: {
        validation: {
            required: 'Pole wymagane'
        },
        custom_ra: {
            action: {
                tooltip: { addSalesItem: 'Dodaj kolejną pozycję sprzedaży' },
                button: { addSalesItem: 'Dodaj przedmiot' }
            }
        },
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
                header_salesTable: {
                    itemName: 'Przedmiot sprzedaży',
                    itemType: 'Typ',
                    itemQty: 'Ilość',
                    itemTax: 'VAT',
                    itemPrice: 'Cena',
                    priceNet: 'BRUTTO',
                    priceGross: 'NETTO',
                    itemGrossPrice: 'Cena brutto',
                    itemNetPrice: 'Cena netto',
                    sumNetPrice: 'netto',
                    sumGrossPrice: 'brutto',
                    sumPrice: 'Suma',
                    sumNetOutput: 'Wartość netto:',
                    sumGrossOutput: 'Wartość brutto:' 
                },
                header_totalResultTable: {
                    totalNetCost: 'Razem netto',
                    totalTaxCost: 'Podatek VAT',
                    totalGrossCost: 'Razem brutto',
                    totalCost: 'Razem'
                },
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
                    selectInputItemName: 'Wybierz pozycję z listy'
                },
                checkbox: {
                    send_invoice: 'Wyślij',
                    payment_invoice: 'Forma płatności',
                    postmail: 'Tradycyjną pocztą',
                    inv_email: 'Na adres email',
                    transfer: 'Przelew',
                    cash: 'Gotówka',
                    ehf: 'Faktura EHF'
                },
                header: {
                    seller: 'Wstawca',
                    buyer: 'Nabywca',
                    address: 'Adres',
                    contact: 'Kontakt',
                    additional_note: 'Uwagi do faktury',
                    optionbox_invoice: 'Opcje dodatkowe',
                    payment_channel: 'Forma płatności',
                    send_invoice: 'Dodatkowe opcje wysyłki',
                    efa: 'Wystaw fakturę EHF'
                },
                title: {
                    street: 'Ulica',
                    place: 'Miejscowość',
                    mva: 'MVA'
                }
            }
        },
        myBuyersEfaktury: {
            header: {
                addres_section: "Dane Adresowe",
                contact_section: "Dane Kontaktowe"
            },
            show: {
                fields: {
                    company: 'Nazwa Firmy',
                    surname: 'Imię',
                    forename: 'Nazwisko',
                    firstname: 'Imię',
                    lastname: 'Nazwisko',
                    org_nr: 'Numer organizacyjny',
                    address: 'Ulica',
                    zip_code: 'Kod Pocztowy',
                    place: 'Miasto',
                    email: 'Adres Email',
                    phone: 'Numer Telefonu',
                    companyRepresentative: 'Przedstawiciel'
                }
            }

        }

    
    },
    resources: {
        dbclientlist: {
            name: 'Kontrahent |||| Kontrahenci',
            contact: "Kontakt",
            fields: {
                company: 'Nazwa Firmy',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                org_nr: 'Numer organizacyjny',
                address: 'Ulica',
                zip_code: 'Kod Pocztowy',
                place: 'Miasto',
                email: 'Adres Email',
                phone: 'Numer Telefonu',
                companyRepresentative: 'Przedstawiciel',
                is_company: 'Entreprenoren er et selskap?',
                mva: "MVA",
            }
        },
        buyersEfaktury: {
            name: 'e-Kontrahent |||| e-Kontrahenci',
            contact: "Kontakt",
            fields: {
                company: 'Nazwa Firmy',
                surname: 'Imię',
                forename: 'Nazwisko',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                org_nr: 'Numer organizacyjny',
                address: 'Ulica',
                zip_code: 'Kod Pocztowy',
                place: 'Miasto',
                email: 'Adres Email',
                phone: 'Numer Telefonu',
                companyRepresentative: 'Przedstawiciel',
                is_company: 'Entreprenoren er et selskap?',
                mva: "MVA",
            }
        },
        issuedInvoices_list: {
            name: 'Faktura |||| Faktury',
            fields: {
                buyer_company: "Nabywca",
                date_submit: 'Data wystawienia',
                date_payment: 'Termin płatności',
                company: 'Nazwa Firmy',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                mva: 'MVA',
                org_nr: 'Numer MVA',
                address: 'Ulica',
                zip_code: 'Kod Pocztowy',
                place: 'Miejscowość',
                email: 'Adres Email',
                phone: 'Numer telefonu',
                payment_amount: 'Kwota',
                date_paid: "Wpłacono"
            }
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