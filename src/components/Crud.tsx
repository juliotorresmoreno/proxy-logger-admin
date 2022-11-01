
import React from "react";
import { Button, Input, Table } from "reactstrap";
import config from "../config";
import { Column, Schema } from "../schemas/schema";

type CrudProps = {
    schema: Schema
};

const Crud: React.FC<CrudProps> = ({ schema }) => {
    const columns: Column[] = schema.columns.map(column => {
        if (typeof column !== 'string') return column;
        return {
            displayName: column,
            name: column
        }
    });
    const api = `${config.apiUrl}/${schema.endpoint}`;
    fetch(api, {
        mode: 'cors',
        credentials: 'include',
        method: 'GET'
    })
        .then(console.log)
        .catch(console.log);
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: 50 }}></th>
                        {columns.map((column, key) => (
                            <th key={key} style={column.style}>
                                {column.displayName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ cursor: 'pointer' }}>
                        <th>
                            <Input type="checkbox" />
                        </th>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
            <Button color="primary">+</Button>
        </>
    );
}

export default Crud;
