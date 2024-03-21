import { useRef, useState } from "react";
import { TableContainer, useMediaQuery } from "@mui/material";
import JoyCssBaseline from "@mui/joy/CssBaseline";
import JoyGlobalStyles from "@mui/joy/GlobalStyles";
import { jsx, css } from "@emotion/react";
import { useTranslate } from "react-admin";
import {
    MQ_isMinimal,
    MQ_isXSmall,
} from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import SalesTableHeader from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/SalesTableHeader";
import JoyBox from "@mui/joy/Box";
import { productOptions } from "../../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import { lineLayout } from "../../efa-invoice-form/components/mobile/spanning-sales-table/mobile-form-iterator/styledLineLayout";
import {
    BorderLinebox,
    FlexboxContainer,
    FullwidthWraper,
    InnerLinebox,
} from "../../efa-invoice-form/components/layout/RowLineLayout";
import TotalCostCardV2 from "../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/TotalCostCardV2";
import { JoyNoteboxV2 } from "../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/JoyNoteboxV2";

export const nameSalesIteratorForm = "products";
const required = () => (value) =>
    value ? undefined : "myroot.validation.required";
// https://blog.logrocket.com/guide-mui-grid-system/

const sxTotalCard = {
    // flexDirection: { xs: 'row', md: 'column' },
    // minWidth: 'auto',
    gap: 1, //maxHeight : 'min-content'
};

export const globalArea = `"name type count tax price "`;

export const SalesInfoTableV6 = (props) => {
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra-large: 1536px

    const isMinimal = useMediaQuery(`${MQ_isMinimal}`);
    const isXSmall = useMediaQuery(`${MQ_isXSmall}`);

    const [entryPriceIsGross, setEntryPriceOnGross] = useState(false);

    const translate = useTranslate();
    return (
        <>
            <div>
                <JoyGlobalStyles
                    styles={{
                        ul: { margin: 0, padding: 0, listStyle: "none" },
                    }}
                />
                <JoyCssBaseline />
                <TableContainer
                    className="tableContainer"
                    sx={{ width: "100%" }}
                >
                    <FullwidthWraper>
                        <FlexboxContainer
                            component="tr"
                            sxCSS={{
                                //display: 'flex',
                                flexDirection: isXSmall ? "column" : "row",
                                bgcolor: "transparent",
                                borderRadius: 1, //sxItemRow
                            }}
                        >
                            <InnerLinebox sxCSS={{ order: 1 }}>
                                <JoyBox
                                    sx={{
                                        // boxShadow: 'none',
                                        bgcolor: "transparent",
                                        flexGrow: 1,
                                        boxShadow: "none",
                                        display: "flex",
                                        my: 1,
                                    }}
                                >
                                    <div style={{ width: "100%" }}>
                                        <div style={{ display: "flex" }}>
                                            <JoyBox
                                                sx={{
                                                    display: "grid",
                                                    gridTemplateColumns: {
                                                        xs: "1fr",
                                                        sm: "1fr",
                                                        md: "1fr 1fr",
                                                    },
                                                    // gap: 1,
                                                    rowGap: 1.5,
                                                    columnGap: {
                                                        xs: 0,
                                                        sm: 1,
                                                        md: 2,
                                                    },
                                                    gridTemplateRows: "auto",
                                                }}
                                            >
                                                <JoyBox
                                                    sx={{
                                                        flexBasis: "1 1 auto",
                                                    }}
                                                >
                                                    <JoyNoteboxV2
                                                        sxCSS={{
                                                            order: {
                                                                xs: 1,
                                                                sm: 1,
                                                                md: -1,
                                                                lg: -1,
                                                            },
                                                            boxShadow: 1,
                                                        }}
                                                    />
                                                </JoyBox>
                                                <TotalCostCardV2
                                                    sxCSS={{
                                                        ...sxTotalCard,
                                                        flex: "0 0 auto",
                                                        order: {
                                                            xs: -1,
                                                            sm: -1,
                                                            md: 1,
                                                            lg: 1,
                                                        },
                                                    }}
                                                />
                                            </JoyBox>
                                        </div>
                                    </div>
                                </JoyBox>
                            </InnerLinebox>
                        </FlexboxContainer>
                    </FullwidthWraper>
                </TableContainer>
                {/* </Container> */}
            </div>
            {/* // <...> bardzo spoko separator */}
            {/* <Divider sx={{ borderColor: 'red', py:0.15, mx: 0, mt: -0.5, pb: 0, mb: 0 }} / >  */}
        </>
    );
};
