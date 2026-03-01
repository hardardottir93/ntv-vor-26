import { useState } from "react";
import { Input } from "./Input";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function ShopCard() {
    const [input, setInput] = useState('Input value here')
    return (
    <Card>
        <CardHeader>
            <CardTitle>Shopping card</CardTitle>
            <CardDescription>No dart here</CardDescription>
            <CardAction>Button?</CardAction>
        </CardHeader>
    <CardContent>
        <Input value={input} onChange={(e) => setInput(e.target.value)} type={""}/>
        <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <p>Card Footer</p>
    </CardFooter>
    </Card>
    );
}