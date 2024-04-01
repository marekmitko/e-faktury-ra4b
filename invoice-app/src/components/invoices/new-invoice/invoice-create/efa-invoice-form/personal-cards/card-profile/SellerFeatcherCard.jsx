import { memo, useState } from "react";
import { useGetOne, RecordContextProvider, useTranslate } from "react-admin";
import RecordFetcher from "./RecordFetcher";
import { SellerPersonalCard } from "./seller/SellerPersonalCard";
import { useMediaQuery } from "@mui/material";
import { MQ_isMedium } from "../../../components/efaV5/sales-form-iterator/useSalesFormIteratorStyles";
import { AddressDetailsBuyer } from "../../../../../../../reusable-components/wrapper/components/seller-personal-card/AddressDetailsBuyer";
import { ContactDetailsBuyer } from "../../../../../../../reusable-components/wrapper/components/seller-personal-card/ContactDetailsBuyer";

const SellerFeatcherCard = () => {
    const [expanded, setExpanded] = useState(false);
    const translate = useTranslate();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // const buyerId = userId;
    const defaultSort = { field: "company", order: "ASC" };

    const isMedium = useMediaQuery(`${MQ_isMedium}`);

    return (
        <RecordFetcher id="user2274" resource="profile">
            <SellerPersonalCard>
                <AddressDetailsBuyer
                    disabled
                    prefixFirstRow={`${translate(
                        "myroot.form.label.header.street_prefix"
                    )} `}
                    capitionLabel={translate(
                        "myroot.form.label.header.address"
                    )}
                />
                <ContactDetailsBuyer
                    disabled
                    capitionLabel={translate(
                        "myroot.form.label.header.contact"
                    )}
                />
            </SellerPersonalCard>
        </RecordFetcher>
    );
};

export default memo(SellerFeatcherCard);
