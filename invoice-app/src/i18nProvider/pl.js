
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
            required_field: 'Pole wymagane',
            mva_num_org: 'Podaj numer MVA',
            zipcode_regex: 'Użyj formatu: 0000',
            email_regex: 'Podaj poprawny adres email',
            num_org_minValue: 'Podaj poprawdną wartość',
        },
        custom_ra: {
            page: {
                createInvoiceFormPageTitle: 'Nowa faktura'
            },
            action: {
                tooltip: {  
                        addSalesItem: 'Dodaj kolejną pozycję sprzedaży',
                        removeSalesItem: 'Usuń pozycję',
                        editAndView: 'Podgląd i edycja faktury'
                        
                },
                button: {   addSalesItem: 'Dodaj przedmiot',
                            createInvoice: 'Utwórz',
                            invoicePreparation: ' Tworzenie'
                        }
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
            mobile: {
                salesTableHeaderTitle: 'Lista sprzedaży',
                salesItemTitle: 'Pozycja sprzedaży',
                itemCard: {
                    itemNetSum: 'Suma netto',
                    itemGrossSum: 'Suma brutto',
                    itemTaxSum: 'Wartość VAT',

                }
            },
            invoiceConfirmModal: {
                    paymentInfoShow: {
                        verticalCaption: "Razem",
                        horizontalCaption: "Do zapłaty:",
                        horizontalSubtitle: "(wartość brutto)",
                        totalCost: "Razem",
                        totalGrossCost: "Kwota brutto",
                        capitionVat: 'VAT:',
                        currencyName: 'PLN' //toDo przerobić do zmiennej niezależnej od i18n
                    },
                    buyerInfoShow: {
                        labelTaxpayerId: 'MVA'
                    },
                },
            placeholder: {
                notebox_invoice: 'Wprowadź własne adnotacje...',
            },
            label: {
                button: {
                    invoiceConfirmModal: {
                        issueConfirmedInvoice: "Wystaw",
                        issueConfirmedInvoiceAndAddNew: "Wystaw i dodaj",
                        cancelIssueInvoice: "Anuluj",
                        createInvoice: 'Utwórz',
                    }
                },
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
                    sumNetOutput: 'Suma netto:',
                    sumGrossOutput: 'Suma brutto:' 
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
                    customText: {
                        enterPrice: "Cena przedmiotu",
                        errorPrice: "Cena wymagana",
                    },
                    datePickerSelectinput: {
                        optionLabelName: 'dni'
                    },
                    data_sale: 'Data wystawienia',
                    date_payment: 'Termin płatności',
                    buyerAutocomplete: 'Kupujący',
                    invoice_no: 'Numer faktury',
                    created_at: 'Data wystawienia',
                    payment_due: 'Termin Płatności',
                    selectInputItemName: 'Wybierz pozycję z listy'
                },
                checkbox: {
                    send_invoice: 'Wyślij',
                    payment_invoice: 'Opcje płatności',
                    postmail: 'Tradycyjną pocztą',
                    inv_email: 'Na adres email',
                    transfer: 'Przelew',
                    cash: 'Gotówka',
                    ehf: 'Faktura EHF'
                },
                header: {
                    show: 'Pokaż',
                    buyerCardHeader_supporting_text: 'Podaj nabywcę',
                    newInvoice: 'Nowa faktura',
                    prefixInovoiceNo: 'nr:',
                    street_prefix: 'ul.',
                    seller: 'Wstawca',
                    buyer: 'Nabywca',
                    address: 'Adres',
                    contact: 'Kontakt',
                    additional_note: 'Uwagi do faktury',
                    optionbox_invoice: 'Opcje dodatkowe',
                    payment_channel: 'Forma i termin płatności',
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
                // addres_section: "Dane Adresowe",
                addres_section: "Adres",
                contact_section: "Dane kontaktowe"
            },
            show: {
                fields: {
                    company: 'Nazwa firmy',
                    surname: 'Imię',
                    forename: 'Nazwisko',
                    firstname: 'Imię',
                    lastname: 'Nazwisko',
                    org_nr: 'Numer organizacyjny',
                    address: 'Ulica',
                    zip_code: 'Kod pocztowy',
                    place: 'Miasto',
                    email: 'Adres email',
                    phone: 'Numer telefonu',
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
                company: 'Nazwa firmy',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                org_nr: 'Numer MVA',
                address: 'Ulica',
                zip_code: 'Kod pocztowy',
                place: 'Miasto',
                email: 'Adres email',
                phone: 'Numer telefonu',
                companyRepresentative: 'Przedstawiciel',
                is_company: 'Entreprenoren er et selskap?',
                mva: "MVA",
            }
        },
        invoicesEfaktury: {
            name: 'e-Faktura |||| e-Faktury',
            create: 'Nowa Faktura',
        },
        buyersEfaktury: {
            massage: {
                delete_record: {
                    title: 'Usuń nabywcę:'
                },
            },
            
            header: {
                create: 'Nowy nabywca',
                edit: 'Edytuj dane'
            },
            name: 'nabywcę |||| nabywców',
            create_menuItemLabel: 'Nowy nabywca',
            list_menuItemLabel: 'Lista nabywców',
            contact: "Kontakt",
            fields: {
                company: 'Nazwa firmy',
                surname: 'Imię',
                forename: 'Nazwisko',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                org_nr: 'Numer organizacyjny',
                address: 'Ulica',
                zip_code: 'Kod pocztowy',
                place: 'Miasto',
                email: 'Adres email',
                phone: 'Numer telefonu',
                companyRepresentative: 'Przedstawiciel',
                is_company: 'Entreprenoren er et selskap?',
                mva: "MVA",
            }
        },
        e_faktury: {
            name: 'faktura |||| faktur',
            create_menuItemLabel: 'Nowa faktura',
            list_menuItemLabel: 'Lista faktur',
            show: {
                header: {
                    invoice: "Faktura",
                    prefix_no: "nr:",
                    section_seller: "Sprzedawca",
                    section_buyer: "Nabywca",
                    sale_item_list: "Pozycje faktury",
                    payment_info: "Informacje o płatności",
                    payment_summary: "Podsumowanie",
                    invoice_notes: "Uwagi do faktury:",
                    create: "Nowy nabywca",

                    sales_table: {
                        item_name: "Nazwa przedmiotu",
                        quantity: "Ilość",
                        prefix_value: "Wartość:",
                        gross_value: "Brutto",
                        net_value: "Netto",
                        tax_value: "VAT"
                    },
                    sales_cost_table: {
                        sum: "Razem",
                        value: "Wartość",
                        net: "Netto",
                        gross: "Brutto",
                        tax: "VAT",
                        gross_value: "(kwota brutto)"
                    },
                    sales_info_table: {
                        date_of_issue: "Data wystawienia",
                        date_payment: "Termin płatności",
                        payment_method: "Metoda patności",
                        account_number: "numer rachunku bankowego:",
                        cash_payment: "Gotówka",
                        bank_transfer: "Przelew"
                    }
                },
            },
            fields: {
                buyer_company: "Nabywca",
                date_submit: 'Data wystawienia',
                date_payment: 'Termin płatności',
                company: 'Nazwa firmy',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                mva: 'MVA',
                org_nr: 'Numer MVA',
                address: 'Ulica',
                zip_code: 'Kod pocztowy',
                place: 'Miejscowość',
                email: 'Adres email',
                phone: 'Numer telefonu',
                payment_amount: 'Kwota',
                paid_amount: "Wpłacono",
                date_paid: 'w dniu',
                date_submit_gte: 'Wystawione od',
                date_submit_lte: 'Wystawione do',
                payment_amount_gte: 'Kwota minimalna',
                payment_amount_lte: 'Kwota maksymalna',
            }
        },
        issuedInvoices_list: {
            name: 'faktura |||| faktur',
            create_menuItemLabel: 'Nowa faktura',
            list_menuItemLabel: 'Lista faktur',
            show: {
                header: {
                    invoice: "Faktura",
                    prefix_no: "nr:",
                    section_seller: "Sprzedawca",
                    section_buyer: "Nabywca",
                    sale_item_list: "Pozycje faktury",
                    payment_info: "Informacje o płatności",
                    payment_summary: "Podsumowanie",
                    invoice_notes: "Uwagi do faktury:",
                    create: "Nowy nabywca",

                    sales_table: {
                        item_name: "Nazwa przedmiotu",
                        quantity: "Ilość",
                        prefix_value: "Wartość:",
                        gross_value: "Brutto",
                        net_value: "Netto",
                        tax_value: "VAT"
                    },
                    sales_cost_table: {
                        sum: "Razem",
                        value: "Wartość",
                        net: "Netto",
                        gross: "Brutto",
                        tax: "VAT",
                        gross_value: "(kwota brutto)"
                    },
                    sales_info_table: {
                        date_of_issue: "Data wystawienia",
                        date_payment: "Termin płatności",
                        payment_method: "Metoda patności",
                        account_number: "numer rachunku bankowego:",
                        cash_payment: "Gotówka",
                        bank_transfer: "Przelew"

                    }
                },
            },
            fields: {
                buyer_company: "Nabywca",
                date_submit: 'Data wystawienia',
                date_payment: 'Termin płatności',
                company: 'Nazwa firmy',
                firstname: 'Imię',
                lastname: 'Nazwisko',
                mva: 'MVA',
                org_nr: 'Numer MVA',
                address: 'Ulica',
                zip_code: 'Kod pocztowy',
                place: 'Miejscowość',
                email: 'Adres email',
                phone: 'Numer telefonu',
                payment_amount: 'Kwota',
                paid_amount: "Wpłacono",
                date_paid: 'w dniu',
                date_submit_gte: 'Wystawione od',
                date_submit_lte: 'Wystawione do',
                payment_amount_gte: 'Kwota minimalna',
                payment_amount_lte: 'Kwota maksymalna',
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