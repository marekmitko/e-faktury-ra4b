import { Box, Typography } from "@mui/joy";
import { textAlign } from "@mui/system";
import * as React from "react";
import { useTranslate } from "react-admin";
import { formatCurrency } from "../../../total-cost-result-table/logic/getCostResult ";
import { CostCell, TotalCostCell } from "../../../total-cost-result-table/subcomponent/TotalCostCell";




const styleInit = {
    color: 'neutral.500'
};


export const SumItemOutputShow = (props) => {
    const { 
        label, 
        levelLabel="body2", 
        cssLabel, 
        fontWeightLabel="400", 
        textColorLabel, 
        textAlignLabel='left', 
        children, 
        textAlign='right',
        cssBox    
    } = props;
    const translate = useTranslate();
    return(
        <Box noWrap sx={{...styleInit, ...cssBox}}>
            <TotalCostCell fontWeight={fontWeightLabel} level={levelLabel} textColor={textColorLabel} textAlign={textAlignLabel}  sx={cssLabel}>{ label ? translate(label) : "" }</TotalCostCell>
            <Typography noWrap textAlign={textAlign} lineHeight="1"  sx={{ pl: 1}} {...props} >{ children ? children : "" }</Typography>
        </Box>
    );
};


