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
                id: "user2274",
                fullName: "",
                avatar: "",
            },
        });
    },

    updateUserProfile(params) {
        localStorage.setItem(
            "profile",
            JSON.stringify({ id: "user2274", ...params.data })
        );
        return Promise.resolve({ data: params.data });
    },
});

// **
//  * Convert a `File` object returned by the upload input into a base 64 string.
//  * That's not the most optimized way to store images in production, but it's
//  * enough to illustrate the idea of data provider decoration.
//  */
const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
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
