https://stackoverflow.com/questions/52605995/react-admin-tab-name-translate



import React from 'react';
import { Admin, Resource } from 'react-admin';
import frenchMessages from 'ra-language-french';
import englishMessages from 'ra-language-english';

const messages = {
    fr: { component:{label:'test'},...frenchMessages },
    en: { component:{label:'test'},...englishMessages },,
}
const i18nProvider = locale => messages[locale];

const App = () => (
    <Admin locale="en" i18nProvider={i18nProvider}>
        ...
    </Admin>
);

export default App;