import { G_Path } from "../../../../../../../../constant";

// const translate_prefix = `resources.${G_Path.invoices}.create.sales_form_iterator.sales_table.header`;
// const translate_prefix_label = `resources.e_faktury.create.sales_form_iterator.sales_table.header`;

export const data2 = {
    columns: [
        {
            field: "id",
            label: "No",
        },
        {
            field: "item_name",
            label: "Name",
        },
        {
            field: "type",
            label: "Type",
        },
        {
            field: "qty",
            label: "Qty.",
        },
        {
            field: "tax",
            label: "Tax",
        },
        {
            field: "net_price",
            label: "Net",
        },
        {
            field: "gross_price",
            label: "Gross",
        },
        {
            field: "sum_net",
            label: "Sum net.",
        },
        {
            field: "sum_gross",
            label: "Sum gross.",
        },
    ],
    data: [
        {
            id: "1",
            item_name: "Gabriel",
            surname: "Garsin",
        },
        {
            id: "Mark",
            surname: "Garsin",
        },
        {
            id: "Mark",
            surname: "Garsin",
        },
        {
            name: "Gabriel",
            surname: "Betappi",
        },
        {
            name: "Gustav",
            surname: "Mahler",
        },
    ],
};

export const data = {
    fields: [
        {
            id: "id",
            description: "item_id",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_id",
            class: "td-id",
            show: false,
        },
        {
            id: "lp",
            description: "lp",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_no",
            class: "td-country",
            show: true,
        },
        {
            id: "sales-item-name",
            description: "item_name",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_name",
            class: "td-sales-item-name",
            show: true,
        },
        {
            id: "sales-item-type",
            description: "item_type",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_type",
            class: "td-sales-item-type",
            show: true,
        },
        {
            id: "sales-item-vat-tax",
            description: "item_tax",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_tax",
            class: "td-vat-tax",
            show: true,
        },
        {
            id: "sales-item-quantity",
            description: "item_qty",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_qty",
            class: "td-sales-item-qty",
            show: true,
        },
        {
            id: "sales-item-price",
            description: "item_price",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_price",
            class: "td-sales-item-price",
            show: true,
        },
        {
            id: "item-sum-net_price",
            description: "item_sum_net",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_sum_net",
            class: "td-sum-net",
            show: true,
        },
        {
            id: "item-sum-gross_price",
            description: "item_sum_gross",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_sum_gross",
            class: "td-sum-gross",
            show: true,
        },
        {
            id: "sales-item-remove",
            description: "",
            label: "resources.e_faktury.create.sales_form_iterator.sales_table.header.item_remove",
            class: "td-button-remove",
            show: true,
        },
    ],
    items: [
        {
            id: 1,
            first_name: "Matias",
            last_name: "Gauntlett",
            email: "mgauntlett0@mapquest.com",
            company: "Fivespan",
            ip_address: "39.139.197.152",
            net_price: "100.00",
            gross_price: "124.00",
            country_code: "CN",
        },
        {
            id: 2,
            first_name: "Laney",
            last_name: "Veque",
            email: "lveque1@census.gov",
            company: "Aimbu",
            ip_address: "77.0.37.83",
            net_price: "100.00",
            gross_price: "124.00",
            country_code: "ZM",
        },
        {
            id: 3,
            first_name: "Fielding",
            last_name: "Donson",
            email: "fdonson2@indiatimes.com",
            company: "Meevee",
            ip_address: "141.126.205.140",
            net_price: "100.00",
            gross_price: "124.00",
            country_code: "ID",
        },
        {
            id: 4,
            first_name: "Ferdinand",
            last_name: "Bessent",
            email: "fbessent3@chronoengine.com",
            company: "Riffpath",
            ip_address: "65.217.64.181",
            net_price: "100.00",
            gross_price: "124.00",
            country_code: "FR",
        },
    ],
};
