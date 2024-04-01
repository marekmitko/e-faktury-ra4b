import { memo } from "react";
import { RecordContextProvider, useChoicesContext } from "react-admin";

const SelectedChoiceContext = ({ children }) => {
    // const ChoicesContext = useChoicesContext();
    const { selectedChoices } = useChoicesContext();
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    const dataChoice = selectedChoices[0];
    return (
        <RecordContextProvider value={{ ...dataChoice }}>
            {children}
        </RecordContextProvider>
    );
};

export default memo(SelectedChoiceContext);
