https://react-admin-storybook-kfrs9egbf-marmelab.vercel.app/?path=/story/ra-ui-materialui-forms-simpleform--custom-layout


const Wrapper = ({ children }) => (
20    <AdminContext
21        i18nProvider={{
22            translate: (x, options) => options?._ ?? x,
23            changeLocale: () => Promise.resolve(),
24            getLocale: () => 'en',
25        }}
26        dataProvider={testDataProvider({
27            getOne: () => Promise.resolve({ data }),
28        })}
29    >
30        <ResourceContextProvider value="books">
31            <Edit id={1} sx={{ width: 600 }}>
32                {children}
33            </Edit>
34        </ResourceContextProvider>
35    </AdminContext>
36);