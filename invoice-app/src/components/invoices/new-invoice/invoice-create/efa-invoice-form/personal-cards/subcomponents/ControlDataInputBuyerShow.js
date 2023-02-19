import React from 'react';
import { AutocompleteInput, useChoicesContext,
    useCreate, useShowController, useGetOne, Loading, Error,
    useCreateSuggestionContext, Show,
    Record, ReferenceInput, useRecordContext, useCreateContext, TextInput, useRedirect, RecordContextProvider } from 'react-admin';
import { BuyerDetailShowLayout } from '../../../invoice-form/subcomponents/personal-cards/buyer/buyer-part-form/BuyerDetailShowLayout';

// import { PersonalDataCard } from '../../../../../../../../../custom/invoice/parsonal-cards/PersonalDataCard';
// import BuyerIcon from '@mui/icons-material/Person';
// import {FormControlLabel, Checkbox, hslToRgb} from '@mui/material';
// import { BuyerDataFromLayout } from '../BuyerDataFormLayout';
// import CreateNewBuyer from './CreateNewBuyer';
// import { BuyerPartInvoiceFormLayout } from './BuyerPartInvoiceFormLayout';
// import { BuyerDetailShowLayout } from '';
import { EfaBuyerDataFromLayout } from '../../../invoice-form/subcomponents/personal-cards/client/EfaBuyerDataFormLayout';
// import db_buyer from './db_empty_buyer';
// import { EfaBuyerDataFromLayout } from '../../client/EfaBuyerDataFormLayout';

// import { SellerDataShowLayout } from '../../seller/SellerDataShowLayout';




// https://marmelab.com/react-admin/Edit.html#queryoptions


// const BuyerIdShow = ({BuyerId}) => {
//     const controllerProps = useShowController({ resource: 'posts', id: BuyerId });
//     return <Show {...controllerProps} />;
// };


// note  const BookDetail = ({ id }) => {
// https://marmelab.com/react-admin/Upgrade.html#all-crud-views


//https://marmelab.com/react-admin/useGetIdentity.html

// const BuyerId = ({ id }) => {
//     const { data, error, isLoading } = useGetOne('books', { id });
    
//         if (isLoading) {
//             return <Loading />;
//         }
//         if (error) {
//             return <Error error={error} />;
//         }
//         if (!data) {
//             return null;
//         }
//         return (
//             <div>
//                 <h1>{data.book.title}</h1>
//                 <p>{data.book.author.name}</p>
//             </div>
//         );
//     };

// {/* <BuyerDataFromLayout /> */}
    // *see BuyerPArtFromItem
export const WrapperBuyerPartFormItem = ({ id, resource, children }) => {

    const { data, isLoading, error } = useGetOne(resource, { id });
    if (isLoading) return <p>Loading...</p>;
    if (error)  return (
                    <>
                        <p><b>DOPYTAĆ</b></p>
                        <EfaBuyerDataFromLayout />
                    </>
                );
    return (
        // <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle="Kupujący">
            <RecordContextProvider value={data}>
                {children}
            </RecordContextProvider>
        // </PersonalDataCard>
    );
};
export const ControlDataInputBuyerShow = ({resourceBuyer,  buyerId}) => {
    
    return(
        <WrapperBuyerPartFormItem resource={resourceBuyer} id={buyerId}>
            {/* <BuyerDataFromLayout /> */}
            <BuyerDetailShowLayout />
        </WrapperBuyerPartFormItem>
    )
};




















// // https://marmelab.com/react-admin/useChoicesContext.html

// export const BuerTESTInput = (props) => {
//     const { setFilters, displayedFilters } = useChoicesContext();

//     const handleCheckboxChange = (event, checked) => {
//         setFilters({ published: checked }, displayedFilters);
//     };
 
//     return (
//         <>
//             <AutocompleteInput   {...props}  />
//             <FormControlLabel
//                 control={<Checkbox defaultChecked />}
//                 label="Only published posts"
//                 onChange={handleCheckboxChange}
//             />
//         </>
//     );
// };







// const BuyerPartInvoiceForm = ({selectSourceName, headerTitle, children, ...props}) => {

    
//     const [open, setOpen] = React.useState(true);

//     const { save } = useCreateContext();
//     console.log("buyerContexSAwe", {...save});

//     const buyerrecord = useRecordContext();
//     console.log("buyerRecord", {...buyerrecord});
//     const BuyerLayout = ({ children }) => (
//         <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle={headerTitle? headerTitle : "Nabywca"}>
//             {children}
//             <BuyerDataFromLayout  />
//         </PersonalDataCard>
//     );
    
//     const OnCreateBuyerFn = () => {
//         const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//         const [value, setValue] = React.useState(filter || '');
//         const [create] = useCreate();
//         const redirect = useRedirect();
        
        
//         const newAuthorName = window.prompt(
//             'Enter a new author',
//             filter
//         );
    
    
//         create(
//             'buyers',
//             {
//                 data: {
//                     company: value,
//                     // buyer_id:       "",
//                     user_id:        "",
//                     kunde_nr:       "533",
//                     address:        "Ormahaugvegen 3",
//                     place:          "5347 Ågotnes",
//                     org_nr:         "997727541",
//                     mva:            "0",
//                     email:          "frode@brias.no",
//                     phone:          "47454595",
//                     fax:            "",
//                     main_kunde_nr:  "0",
//                     lang:           "",
//                     debt:           "0.00",
//                     remainder:      "0",
//                     inkasso:        "0",
//                     is_company:     "1",
//                     invoice_id:     ""
//                 },
//         },
//                     {
//                 onSuccess: ({ data }) => {
//                     setValue('');
//                     redirect("");
//                     onCreate(data);
//                 },
//             }
//             );

//             return {}
//     };
//     // source="author_id" choices={choices} optionText={optionRenderer}
//     // if(selectSourceName) return(
//     //     <BuyerLayout>
//     //         {/* <TradePartnerSelectInput company={selectSourceName} /> */}
//     //     </BuyerLayout>
//     // );
//     // https://marmelab.com/react-admin/AutocompleteInput.html

//     return(
//         <PersonalDataCard  variant="outlined" headerIcon={<BuyerIcon />} headerTitle={headerTitle? headerTitle : "Nabywca"} > 
//             <ReferenceInput source="buyer_id" reference="buyers"
//                 // enableGetChoices={({ q }) => q.length >= 2} 
//                 // sort={{ field: 'company', order: 'ASC' }}
//             >
//                 <BuerTESTInput sx={{ bgcolor: 'rgba(194, 161, 163, 0.3)' }}  optionText="company" onCreate={ () => OnCreateBuyerFn()  }   />
//             </ReferenceInput>

            
//             <ReferenceInput  source="buyer_id" reference="buyers">
//                 <AutocompleteInput 
//                     enableGetChoices={({ q }) => q.length >= 3} 
//                     create={<CreateNewBuyer dialogOpen={setOpen} isOpen={open} />} 
//                     optionText="company"
//                     // onCreate={filter => {
//                     onCreate={ () => {
//                         if(!open) {
//                             setOpen(true)
//                         };
//                         return OnCreateBuyerFn();
//                         }
//                     }
//                     fullWidth
//                     sx={{ bgcolor: 'rgba(37, 255, 0, 0.2)' }}
//                     // createLabel="Add"
//                     // createItemLabel="+++"
//                     // options={{ color: 'secondary', InputLabelProps: { shrink: true } }}
//                 />
//                 </ReferenceInput>
//             <BuyerPartInvoiceFormLayout />
//         </PersonalDataCard>
//     );
// } 
