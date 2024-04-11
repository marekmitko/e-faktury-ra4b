import {
    Title, // useGetOne, useTranslate
} from "react-admin";
// import ArticleIcon from "@mui/icons-material/Article";

const CreateInvoiceFormPageTitle = ({ id }) => {
    // const { data, loading } = useGetOne('articles', { id });

    return (
        <>
            <Title
                // title={  <><ArticleIcon />{translate('myroot.custom_ra.page.createInvoiceFormPageTitle')}</>}
                title="myroot.custom_ra.page.createInvoiceFormPageTitle"
                // defaultTitle={<ArticleIcon />}
            />
            {/* {!loading && <div>{data.body}</div>} */}
        </>
    );
};

// https://marmelab.com/react-admin/Title.html

// const CreateInvoiceFormPageTitle = ({ id }) => {
//     const { data, loading } = useGetOne('articles', { id });
//     return (
//         <>
//             <Title
//                 title={data && <><ArticleIcon />{data.title}</>}
//                 defaultTitle={<ArticleIcon />}
//             />
//             {!loading && <div>{data.body}</div>}
//         </>
//     );
// };

export default CreateInvoiceFormPageTitle;
