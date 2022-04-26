// in src/comments/PostInput.js
import { FormControlLabel, Checkbox} from '@mui/material';
import { AutocompleteInput, useChoicesContext, Create, ReferenceInput, SimpleForm, TextInput  } from 'react-admin';

export const PostInput = (props) => {
    const { setFilters, displayedFilters } = useChoicesContext();

    const handleCheckboxChange = (event, checked) => {
        setFilters({ published: checked }, displayedFilters);
    };

    return (
        <>
            <AutocompleteInput {...props} />
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Only published posts"
                onChange={handleCheckboxChange}
            />
        </>
    );
};

// in src/comments/CommentCreate.js

export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="comany" reference="dbclientlist">
                <PostInput />
            </ReferenceInput>
            <TextInput source="body" />
        </SimpleForm>
    </Create>
)