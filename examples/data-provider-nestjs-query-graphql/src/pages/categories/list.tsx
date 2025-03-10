import { IResourceComponentsProps } from "@refinedev/core";

import {
    List,
    useTable,
    EditButton,
    DateField,
    getDefaultSortOrder,
} from "@refinedev/antd";

import { Table } from "antd";

import { ICategory } from "../../interfaces";

export const CategoryList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter } = useTable<ICategory>({
        initialSorter: [
            {
                field: "id",
                order: "asc",
            },
        ],
        metaData: {
            fields: ["id", "title", "createdAt"],
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="Title" />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                    sorter
                />
                <Table.Column<ICategory>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <EditButton
                            size="small"
                            hideText
                            recordItemId={record.id}
                        />
                    )}
                />
            </Table>
        </List>
    );
};
