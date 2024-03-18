import { useRef, useState } from "react";
import {
  Container,
  GlobalStyles,
  Stack,
  TableContainer,
  TableFooter,
  TablePagination,
  TableCell,
  useMediaQuery,
  Grid,
} from "@mui/material";
import JoyCssBaseline from "@mui/joy/CssBaseline";
import JoyGlobalStyles from "@mui/joy/GlobalStyles";
import { Box, Card, Divider, Typography } from "@mui/joy";
import { jsx, css } from "@emotion/react";
import {
  ArrayInput,
  Create,
  NumberInput,
  Form,
  Title,
  useTranslate,
} from "react-admin";

import { CustomInputNumber } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/custom/CustomInputNumber";
import { InputTextSelected } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelected";
import { SelectInputItem } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItem";
import {
  MQ_isMinimal,
  MQ_isSmall,
  MQ_isMedium,
  MQ_isXSmall,
  MQ_isLarge,
} from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import SalesTableHeader from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/SalesTableHeader";
import JoyBox from "@mui/joy/Box";
import {
  productOptions,
  taxOptions,
  typeOptions,
} from "../../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import { lineLayout } from "../../efa-invoice-form/components/mobile/spanning-sales-table/mobile-form-iterator/styledLineLayout";
import {
  BorderLinebox,
  FlexboxContainer,
  FullwidthWraper,
  InnerLinebox,
} from "../../efa-invoice-form/components/layout/RowLineLayout";
import SwitchNetOrGross from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/components/SwitchNetOrGross";
import TotalCostCardV2 from "../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/TotalCostCardV2";
import { JoyNoteboxV2 } from "../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/JoyNoteboxV2";
import { ItemIndexChip } from "../../efa-invoice-form/components/index-item-row/ItemIndexChip";
import { SalesFormIteratorV5 } from "./sales-form-iterator/SalesFormIteratorV5";
import { StyledTableCellClasses } from "./sales-form-iterator/sales-item/mobile-view/styledHeaderCellClasses";
import { MobiInputTextSelected } from "./sales-form-iterator/sales-item/mobile-view/components/sales-item-row/MobiInputTextSelected";
import { MobiSelectInput } from "./sales-form-iterator/sales-item/mobile-view/components/sales-item-row/mobi-item-content/MobiSelectInput";
import MobiNumberInput from "./sales-form-iterator/sales-item/mobile-view/components/sales-item-row/mobi-item-content/MobiNumberInput";
import { MobiPriceInput } from "./sales-form-iterator/sales-item/mobile-view/components/sales-item-row/mobi-item-content/MobiPriceInput";
import { NewMobiSelectItemInput } from "./sales-form-iterator/sales-item/mobile-view/components/sales-item-row/mobi-item-content/NewMobiSelectItemInput";

export const nameSalesIteratorForm = "products";
const required = () => (value) =>
  value ? undefined : "myroot.validation.required";
// https://blog.logrocket.com/guide-mui-grid-system/

const areaMinimal = `"name name name name name name name name name"
                " type type type type type type type type type  "
                "tax tax tax tax tax tax tax tax tax"
                " count count count count count count count count count"
                " price price price price price price price price price"
                `;
// const areaXSmall =  `" name name name name name name name name"
//                 "  type type type type type type type type  "
//                 "  count count tax tax tax tax tax tax  "
//                 "  price price price price price price price price "`;

// const areaSmall =  `"name name name name name name name name name name name name name name name"
//                 "  tax type type type type type type type type type type type type type type  "
//                 "  count price price price price price price price price price price price price price price "`;
const areaSmall = `"name name name name name name name name name name name name name name name name"
                "  tax type type type type type type type type type type type type type type type  "
                "  count price price price price price price price price price price price price price price price "`;

// const areaMedium =  `"name name name name name name name name name type type"
//                         " count count tax tax tax tax tax tax tax price price "`;
const areaXSmall = areaSmall;
const areaMedium = areaSmall;

const sxTotalCard = {
  // flexDirection: { xs: 'row', md: 'column' },
  // minWidth: 'auto',
  gap: 1, //maxHeight : 'min-content'
};

// export const globalArea = `" name name name type type count tax price price "`;
export const globalArea = `"name type count tax price "`;

const vumberInputValidation = [required()];

const OptionRecord = { choice_product_list: productOptions };

const configGridBox_itemRow = {
  display: "grid",
  // gridTemplateColumns: 'minmax(550px, 1fr) minmax(auto, 300px) ',
  // gridTemplateColumns: '500px  minmax(auto-fill, 300px)',
  gridTemplateAreas: `"rowInput rowOutput"`,
  gridAutoFlow: "row",
  // gap: 1,
  // rowGap: 0.75,
  columnGap: 0.5,
  gridTemplateRows: "auto",
};

const configGridBox_inputItemBox = {
  display: "grid",
  // gridTemplateColumns: '3fr repeat(7, 1fr) minmax(10px, auto)',
  gridTemplateColumns: "31fr 17fr 9fr 11fr 16fr",
  gap: 1,
  rowGap: 0.75,
  columnGap: 0.5,
  gridTemplateRows: "auto",
};

const MobileHeaderDivider = (
  <Divider
    spacing={2}
    orientation="vertical"
    sx={{ px: 0.09, mr: 2, mt: -0.5, bgcolor: "neutral.400" }}
  />
);

const MobileSalesTableHeader = ({ children, title }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="stretch"
    // divider={MobileHeaderDivider}
    sx={{ width: "100%", px: 1 }}
  >
    <Typography
      textColor="neutral.50"
      fontWeight="500"
      sx={{ textTransform: "uppercase", paddingTop: 0, mt: 0 }}
    >
      <StyledTableCellClasses
        sx={{ m: 0, p: 0, pb: 0.5, border: "none", textAlign: "right" }}
      >
        {title ? title : ""}
      </StyledTableCellClasses>
    </Typography>
    <Box sx={{ mt: 0.17, mr: 0, ml: "auto", pl: 1 }}>
      {children ? children : ""}
    </Box>
  </Stack>
);

const Separator = () => <Box pt="1em" />;

export const SalesTableV6 = (props) => {
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px

  const isMinimal = useMediaQuery(`${MQ_isMinimal}`);
  const isXSmall = useMediaQuery(`${MQ_isXSmall}`);
  const isSmall = useMediaQuery(`${MQ_isSmall}`);
  const isMedium = useMediaQuery(`${MQ_isMedium}`);
  const isLarge = useMediaQuery(`${MQ_isLarge}`);
  const is650px = useMediaQuery("(max-width:650px)");

  const [entryPriceIsGross, setEntryPriceOnGross] = useState(false);

  const translate = useTranslate();
  return (
    <>
      <div>
        <JoyGlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <JoyCssBaseline />
        {/* <Container
                        maxWidth="xl"
                        component="main"
                    > */}
        {/* <small> main container - component: TableContainer </small> */}
        <TableContainer className="tableContainer" sx={{ width: "100%" }}>
          <FullwidthWraper // bgcolor: isLarge ? 'background.paper' : 'transparent',    // borderRadius: 1, flexDirection: 'column'
          >
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
                          columnGap: { xs: 0, sm: 1, md: 2 },
                          gridTemplateRows: "auto",
                        }}
                      >
                        <JoyBox sx={{ flexBasis: "1 1 auto" }}>
                          <JoyNoteboxV2
                            sxCSS={{
                              order: { xs: 1, sm: 1, md: -1, lg: -1 },
                              boxShadow: 1,
                            }}
                          />
                        </JoyBox>
                        <TotalCostCardV2
                          sxCSS={{
                            ...sxTotalCard,
                            flex: "0 0 auto",
                            order: { xs: -1, sm: -1, md: 1, lg: 1 },
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
