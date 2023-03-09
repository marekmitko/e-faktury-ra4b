import * as React from "react";












const TotalCostContainer = () => {

        // locale = "en-US";
        // currency = "INR";

    // state = {
    //     taxRate: 0.0,
    //     lineItems: [
    //         {
    //         id: "initial",
    //         name: "",
    //         CAdd: "",
    //         Cname: "",
    //         Cid: "",
    //         InId: "",
    //         date: "",
    //         description: "",
    //         quantity: 0,
    //         price: 0.0
    //         }
    //     ]
    // };

    // handleInvoiceChange = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    // };

    // handleLineItemChange = (elementIndex) => (event) => {
    // let lineItems = this.state.lineItems.map((item, i) => {
    //     if (elementIndex !== i) return item;
    //     return { ...item, [event.target.name]: event.target.value };
    // });
    // this.setState({ lineItems });
    // };

    handleAddLineItem = (event) => {
    this.setState({
        lineItems: this.state.lineItems.concat([
        { id: uuidv4(), name: "", description: "", quantity: 0, price: 0.0 }
        ])
    });
    };

    // handleRemoveLineItem = (elementIndex) => (event) => {
    // this.setState({
    //     lineItems: this.state.lineItems.filter((item, i) => {
    //     return elementIndex !== i;
    //     })
    // });
    // };

    // handleReorderLineItems = (newLineItems) => {
    // this.setState({
    //     lineItems: newLineItems
    // });
    // };

    // handleFocusSelect = (event) => {
    // event.target.select();
    // };

    // handlePayButtonClick = () => {
    // console.log(this.state);
    // alert("You Can Now Generate Your Bill");
    // this.props.invoiceData(this.state);
    // };

//TO POTRZEBA
    formatCurrency = (amount) => {
        return new Intl.NumberFormat(this.locale, {
            style: "currency",
            currency: this.currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };
// TO POTRZEBA
    calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100);
    };
// TO POTRZEBA
    calcLineItemsTotal = () => {
    return this.state.lineItems.reduce(
        (prev, cur) => prev + cur.quantity * cur.price,
        0
    );
    };
// TO POTRZEBA
    calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100);
    };
//TO POTRZEBA
    calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal();
    };




    return( 

        <div className={styles.totalContainer}>
                <form>
                <div className={styles.valueTable}>
                    <div className={styles.row}>
                    <div className={styles.label}>Tax Rate (%)</div>
                    <div className={styles.value}>
                        <input
                        name="taxRate"
                        type="number"
                        step="0.01"
                        value={this.state.taxRate}
                        onChange={this.handleInvoiceChange}
                        onFocus={this.handleFocusSelect}
                        />
                    </div>
                    </div>
                </div>
                </form>
                <form>
                <div className={styles.valueTable}>
                    <div className={styles.row}>
                    <div className={styles.label}>Subtotal</div>
                    <div className={`${styles.value} ${styles.currency}`}>
                        {this.formatCurrency(this.calcLineItemsTotal())}
                    </div>
                    </div>
                    <div className={styles.row}>
                    <div className={styles.label}>Tax ({this.state.taxRate}%)</div>
                    <div className={`${styles.value} ${styles.currency}`}>
                        {this.formatCurrency(this.calcTaxTotal())}
                    </div>
                    </div>
                    <div className={styles.row}>
                    <div className={styles.label}>Total Due</div>
                    <div className={`${styles.value} ${styles.currency}`}>
                        {this.formatCurrency(this.calcGrandTotal())}
                    </div>
                    </div>
                </div>
                </form>
                </div>
    );
};