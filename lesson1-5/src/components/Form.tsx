import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup, FieldSet } from "./ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import useDebounce from "@/hooks/useDebounce";
import { Button } from "./Button";

type Mode = "landing" | "form";
type Flow = "create" | "load";

type FormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  selectedFruit: string;
  radioButton: string | null;
};

const emptyValues = (email: string): FormValuesType => ({
  firstName: "",
  lastName: "",
  email,
  mobileNumber: "",
  selectedFruit: "",
  radioButton: null,
});

export function Form() {
  // TODO: Remove ref data set, and only use state to keep track of realtime local data (written in input)
  // NOTE: You might want to detach the email from the data set (since it's used to index the localstorage)

  const [mode, setMode] = useState<Mode>("landing");
  const [flow, setFlow] = useState<Flow | null>(null);

  const [landingEmail, setLandingEmail] = useState("");
  const [values, setValues] = useState<FormValuesType>(emptyValues(""));

  const emailTrimmed = landingEmail.trim();

  const onInputChange = useCallback(
    (key: keyof FormValuesType, value: string) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const startCreateNew = () => {
    if (!emailTrimmed) return window.alert("Email is required");
    setFlow("create");
    setValues(emptyValues(emailTrimmed));
    setMode("form");
  };

  const startLoad = () => {
    if (!emailTrimmed) return window.alert("Email is required");

    const raw = localStorage.getItem(emailTrimmed);
    if (!raw) return window.alert("Email not found");

    try {
      const parsed = JSON.parse(raw) as FormValuesType;
      setFlow("load");
      setValues({
        ...emptyValues(emailTrimmed),
        ...parsed,
        email: emailTrimmed,
      });
      setMode("form");
    } catch {
      window.alert("Corrupted saved data for this email");
    }
  };

  const onSubmit = () => {
    if (!values.email) return window.alert("Please enter an email");
    localStorage.setItem(values.email, JSON.stringify(values));
    window.alert(`Hello ${values.firstName}; email address ${values.email}`);
  };

  // TODO: Use the correct state to connect to debounce state
  // Set delay time according to your needs
  // TODO: Write useEffect to repopulate the localstorage after debounce
  // NOTE: The email has to be present for this to work

  const debouncedJson = useDebounce(JSON.stringify(values), 1000);

  useEffect(() => {
    if (!values.email) return;
    localStorage.setItem(values.email, debouncedJson);
  }, [debouncedJson, values.email]);

  // TODO: If no email is provided, display only the email input, or some other alternative UX

  // LANDING VIEW
  if (mode === "landing") {
    return (
      <Card className="my-4">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="grow border h-0"></div>
            <CardTitle>Start</CardTitle>
            <div className="grow border h-0"></div>
          </div>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="p-6 space-y-4"
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <Input
                  className="bg-white"
                  type="email"
                  value={landingEmail}
                  onChange={(e) => setLandingEmail(e.target.value)}
                  placeholder="asdf@ntv.is"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <div className="flex gap-3">
            <Button
              value="Load"
              type="button"
              onClick={startLoad}
              className="bg-green-500 p-4 rounded text-black uppercase"
            />

            <Button
              value="Create new"
              type="button"
              onClick={startCreateNew}
              className="bg-blue-600 p-4 rounded text-black uppercase"
            />
          </div>
        </form>
      </Card>
    );
  }

  // FORM VIEW
  return (
    <Card className="w-3/4 max-w-7xl bg-blue-950">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="grow border h-0"></div>
          <CardTitle className="text-white">Example</CardTitle>
          <div className="grow border h-0"></div>
        </div>
      </CardHeader>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="w-full p-6"
      >
        <FieldSet>
          <FieldGroup>
            <Field>
              <Input
                className="bg-white"
                value={values.firstName}
                onChange={(e) => onInputChange("firstName", e.target.value)}
                placeholder="First name"
              />
            </Field>

            <Field>
              <Input
                className="bg-white"
                value={values.lastName}
                onChange={(e) => onInputChange("lastName", e.target.value)}
                placeholder="Last name"
              />
            </Field>

            <Field>
              <Input
                className="bg-white"
                type="email"
                disabled
                value={values.email}
                placeholder="Email"
              />
            </Field>

            <Field>
              <Input
                className="bg-white"
                value={values.mobileNumber}
                onChange={(e) => onInputChange("mobileNumber", e.target.value)}
                placeholder="Mobile number"
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Select
              value={values.selectedFruit}
              onValueChange={(v) => onInputChange("selectedFruit", v)}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FieldGroup>

          <FieldGroup>
            <RadioGroup
              value={values.radioButton ?? ""}
              onValueChange={(v) => onInputChange("radioButton", v)}
              className="w-fit flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label className="text-white" htmlFor="yes">
                  Yes
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="no" />
                <Label className="text-white" htmlFor="no">
                  No
                </Label>
              </div>
            </RadioGroup>
          </FieldGroup>
        </FieldSet>

        <div className="flex flex-col py-4 gap-4">
          <Button
            value="submit"
            type="submit"
            className="bg-blue-950 p-4 rounded text-black uppercase"
          />

          <Button
            value="Back"
            type="button"
            onClick={() => {
              setMode("landing");
              setFlow(null);
              setLandingEmail("");
              setValues(emptyValues("")); // reset
            }}
            className="bg-blue-950 p-4 rounded text-black uppercase border"
          />
        </div>
      </form>
    </Card>
  );
}
