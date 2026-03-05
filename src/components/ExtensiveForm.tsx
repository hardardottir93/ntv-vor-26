import { useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./Button";

export function ExtensiveForm() {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const mobileRef = useRef("");
  const emailRef = useRef("");
  const serviceRef = useRef("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(
      `First name: ${firstNameRef.current}\n` +
        `Last name: ${lastNameRef.current}\n` +
        `Email: ${emailRef.current}\n` +
        `Mobile: ${mobileRef.current}\n` +
        `Service: ${serviceRef.current}\n`,
    );
  }

  const [resetKey, setResetKey] = useState(0);

  function handleEdit() {
    firstNameRef.current = "";
    lastNameRef.current = "";
    emailRef.current = "";
    mobileRef.current = "";
    serviceRef.current = "";
    setResetKey((k) => k + 1);
  }

  return (
    <Card className="bg-blue-950 text-white border border-white/10 shadow-xl">
      <CardContent className=" text-left">
        <form key={resetKey} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Input */}
            <p>{firstNameRef.current}</p>
            <Input
              onChange={(e) => (firstNameRef.current = e.target.value)}
              placeholder="First name"
            />
            <Input
              onChange={(e) => (lastNameRef.current = e.target.value)}
              placeholder="Last name"
            />
            <Input
              onChange={(e) => (emailRef.current = e.target.value)}
              placeholder="Email"
            />
            <Input
              onChange={(e) => (mobileRef.current = e.target.value)}
              placeholder="Mobile"
            />
          </div>

          {/* Select */}
          <div>
            <select
              onChange={(e) => (serviceRef.current = e.target.value)}
              className="h-9 w-full rounded-md bg-white px-3 py-1 text-slate-900 shadow-xs"
            >
              <option value="">Select...</option>
              <option value="consultation">Consultation</option>
              <option value="repair">Repair</option>
            </select>
          </div>

          {/* Buttons */}
          <div>
            <Button type="submit">SUBMIT</Button>
            <div className="flex items-center gap-4 my-2">
              <div className="h-px flex-1 bg-white/30" />
              <span className="text-white/70 text-sm font-semibold">or</span>
              <div className="h-px flex-1 bg-white/30" />
            </div>
            <Button type="button" variant="secondary" onClick={handleEdit}>
              EDIT
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
