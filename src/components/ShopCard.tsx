import { useState } from "react";
import { Input } from "./Input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./Button";

export function ShopCard() {
  const [inputValue, setInputValue] = useState("Input value here");
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");

  const onClick = () => {
    alert(`Submitted name: ${myName} a and email: ${email}`);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping card</CardTitle>
        <CardDescription>No dart here</CardDescription>
        <CardAction>
          <Button onClick={onClick} value={"Submit"} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Input value={myName} onChange={(e) => setMyName(e.target.value)} />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
