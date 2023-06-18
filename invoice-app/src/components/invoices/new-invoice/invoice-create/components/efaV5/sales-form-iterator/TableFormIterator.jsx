import React, { Component } from "react";
import "./table-form-iterator/styleTableFormIterator.css";
import { data } from "./table-form-iterator/dataTableFormIterator";


const data_table = data;

const TableFormIterator = () => {


    return(
        <div class="container">
            <table>
            <thead>
                <tr>
                {data_table.fields
                    .filter(item => item.show)
                    .map(item => <th>{item.description}</th>)}
                </tr>
            </thead>
            <tbody>
                {data_table.items.map((item, index) => {
                return (
                    <tr key={index}>
                    {data_table.fields
                        .filter(field => field.show)
                        .map(field => (
                        <td data-th={field.description}>{item[field.id]}<input/></td>
                        ))}
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
    );
};

export default TableFormIterator;
