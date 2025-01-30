import React, { useState, FC, ChangeEvent } from "react";
import { Card, CardBody, Input, Textarea } from "@heroui/react";
import { Button } from "@heroui/button";
import { MinusIcon, PlusIcon } from "@/components/Icons";

interface DailyRowData {
    name: string;
    yesterday: string;
    today: string;
}

const DailyList: FC = () => {
    const [rows, setRows] = useState<DailyRowData[]>([
        { name: "", yesterday: "", today: "" }
    ]);

    const handleAddRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            { name: "", yesterday: "", today: "" }
        ]);
    };

    const handleRemoveRow = (index: number) => {
        setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    };

    const handleChange = (
        index: number,
        field: keyof DailyRowData,
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { value } = event.target;
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            updatedRows[index][field] = value;
            return updatedRows;
        });
    };

    return (
        <div className="space-y-4">
            {rows.map((row, index) => (
                <Card key={index}>
                    <CardBody>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                label="Name"
                                labelPlacement="outside"
                                isClearable
                                type="text"
                                value={row.name}
                                onChange={(e) => handleChange(index, "name", e)}
                            />

                            <Textarea
                                className="max-w-sm"
                                label="Yesterday"
                                placeholder="Que s'est-il passé hier ?"
                                isClearable
                                maxRows={4}
                                value={row.yesterday}
                                onChange={(e) => handleChange(index, "yesterday", e)}
                            />

                            <Textarea
                                className="max-w-sm"
                                label="Today"
                                placeholder="Que va-t-il se passer aujourd'hui ?"
                                isClearable
                                maxRows={4}
                                value={row.today}
                                onChange={(e) => handleChange(index, "today", e)}
                            />

                            <div className="flex flex-col justify-between
">
                                <Button
                                    isIconOnly
                                    aria-label="Add Row"
                                    color="success"
                                    fullWidth={true}
                                    onClick={handleAddRow}
                                >
                                    <PlusIcon />
                                </Button>

                                <Button
                                    isIconOnly
                                    aria-label="Remove Row"
                                    color="danger"
                                    fullWidth={true}
                                    onClick={() => handleRemoveRow(index)}
                                >
                                    <MinusIcon />
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default DailyList;
