import { useRecordContext } from "react-admin";
import RecordFetcher from "./RecordFetcher";
import { SellerPersonalCard } from "./seller/SellerPersonalCard";

const TestField = () => {
    const record = useRecordContext();
    console.log("💦TestField", record);
    return record && <span>{record.company}</span>;
};

export const TestSelerContext = () => {
    return (
        <RecordFetcher id="user2274" resource="profile">
            <SellerPersonalCard></SellerPersonalCard>
        </RecordFetcher>
    );
};
