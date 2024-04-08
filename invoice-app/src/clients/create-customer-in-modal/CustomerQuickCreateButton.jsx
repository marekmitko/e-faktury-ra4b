import {
    SaveButton,
    Toolbar,
    Edit,
    SimpleForm,
    useNotify,
    useRedirect,
} from "react-admin";

const PostSaveButton = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const onSuccess = (data) => {
        data.preventDefault();
        notify(`Post "${data.title}" saved!`);
        redirect("/posts");
    };
    return <SaveButton type="button" mutationOptions={{ onSuccess }} />;
};
