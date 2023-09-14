https://marmelab.com/react-admin/Fields.html#textalign

const BasketTotal = () => {
    const record = useRecordContext();
    if (!record) return null;
    const total = record.items.reduce((total, item) => total + item.price, 0);
    return <span>{total}</span>;
}
BasketTotal.defaultProps = {
    textAlign: 'right',
};