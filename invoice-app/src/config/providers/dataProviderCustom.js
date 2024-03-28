import jsonServerProvider from "ra-data-json-server";
import httpClient from "./httpClient";
// https://codesandbox.io/p/sandbox/flamboyant-sky-86nxn2?file=%2Fsrc%2Findex.js

// https://codesandbox.io/p/sandbox/react-admin-v3-advanced-recipes-managing-user-profile-qcql4?file=%2Fsrc%2Fprofile.js%3A14%2C12

// https://codesandbox.io/p/sandbox/react-admin-v3-advanced-recipes-managing-user-profile-qcql4?file=%2Fsrc%2FdataProvider.js%3A2%2C1

// To jest najnowsze ❤❤❤
// https://stackblitz.com/github/marmelab/react-admin/tree/master/examples/simple?file=package-lock.json

// A function decorating a dataProvider for handling user profiles
const addUserProfileOverrides = (dataProvider) => ({
    ...dataProvider,
    getUserProfile(params) {
        const storedProfile = localStorage.getItem("profile");

        if (storedProfile) {
            return Promise.resolve({
                data: JSON.parse(storedProfile),
            });
        }

        // No profile yet, return a default one
        return Promise.resolve({
            data: {
                // As we are only storing this information in the localstorage, we don't really care about this id
                id: "unique-id",
                fullName: "",
                avatar: "",
            },
        });
    },

    updateUserProfile(params) {
        localStorage.setItem(
            "profile",
            JSON.stringify({ id: "unique-id", ...params.data })
        );
        return Promise.resolve({ data: params.data });
    },
});

const hostname = window.location.hostname;
// *see const dataProvider
// const dataProvider = simpleRestProvider('http://localhost:5000', fetchJson );
const customJsonProvider = jsonServerProvider(
    "http://" + hostname + ":5000",
    httpClient
);

export default addUserProfileOverrides(
    jsonServerProvider("http://" + hostname + ":5000", httpClient)
);
