const tableBorderColor = 'red';
const borderRadius = 'red';
const invoiceMaxWidth = 'auto';
const totalContainer = {
    display: "flex",
    flexFlow:" row wrap",
    justifyContent: "space-between",
};


const valueTable = {
    margin: "0 0 0 auto",
    border: `1px solid ${tableBorderColor}`,
    borderRadius: `${borderRadius}`,
    overflow: "hidden",
    width: "100%",
    minWidth: `${invoiceMaxWidth / 3}`,
    maxWidth: `${invoiceMaxWidth / 3}`,
    '& > .row': {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        borderBottom: `1px solid ${tableBorderColor}`,
        ' &:last-of-type': {
            borderBottom: 'none',
        },
        '& > div': {
        padding: '10px',
        // padding: `${rhythm/2}`,
        },
        '& > .label': {
            justifyContent: 'flex-start',
            fontWeight: 'bold',
          // @extend %flex-center, //*edu //note
        }
    }
};

export const styles = { totalContainer, valueTable };