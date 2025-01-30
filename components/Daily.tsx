"use client";

import {
     Divider,
} from "@heroui/react";
import DailyRow from "@/components/Form/DailyList";

export default function Daily() {

    return (
        <>
            <div>
                <h1>Daily reporting</h1>
                <Divider className="my-4" />
            </div>
            <div>
                <DailyRow />
            </div>
        </>
    );
}
