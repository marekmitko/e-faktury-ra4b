



const client_form = () => ({
    company: "",
    is_company: false,  //Om? Czy to jest potrzebne
    org_nr: "",
    mva: false,  // Om? A co z tym i czy to dobry pomysł ? Start form -> false, transform input && onSubmit
    address: "",
    zip_code: "",
    place: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
});





const form = {
    client: client_form
};

export { client_form,  };

export default form;