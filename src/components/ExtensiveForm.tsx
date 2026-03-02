import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./Button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function ExtensiveForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");

  const [service, setService] = useState("");
  const [contactYes, setContactYes] = useState<"yes" | "no" | "">("");

  const [newsletter, setNewsletter] = useState(true);
  const [promotions, setPromotions] = useState(false);

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);

  const [message, setMessage] = useState("");

  const [isEditing, setIsEditing] = useState(true);

  const incGuests = () => setGuests((g) => g + 1);
  const decGuests = () => setGuests((g) => Math.max(0, g - 1));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(
      `First name: ${firstName}\n` +
        `Last name: ${lastName}\n` +
        `Email: ${email}\n` +
        `Mobile: ${mobile}\n` +
        `Service: ${service}\n` +
        `Yes/No: ${contactYes}\n` +
        `Newsletter: ${newsletter ? "Yes" : "No"}\n` +
        `Promotions: ${promotions ? "Yes" : "No"}\n` +
        `Date: ${date}\n` +
        `Guests: ${guests}\n` +
        `Message: ${message}`,
    );
  }

  function handleEdit() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setService("");
    setContactYes("");
    setNewsletter(false);
    setPromotions(false);
    setDate("");
    setGuests(0);
    setMessage("");
    setIsEditing(true);
  }

  return (
    <Card className="bg-blue-950 text-white border border-white/10 shadow-xl">
      <CardContent className=" text-left">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Input */}
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile"
            />
          </div>

          {/* Select */}
          <div>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="h-9 w-full rounded-md bg-white px-3 py-1 text-slate-900 shadow-xs"
            >
              <option value="">Select...</option>
              <option value="consultation">Consultation</option>
              <option value="repair">Repair</option>
            </select>
          </div>

          {/* Radio */}

          <RadioGroup
            value={contactYes}
            onValueChange={(v) => setContactYes(v as "yes" | "no")}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <Label htmlFor="yes" className="text-white/90 font-semibold">
                Yes
              </Label>
              <RadioGroupItem id="yes" value="yes" className="bg-amber-50" />
            </div>

            <div className="flex items-center gap-2">
              <Label htmlFor="no" className="text-white/90 font-semibold">
                No
              </Label>
              <RadioGroupItem id="no" value="no" className="bg-amber-50" />
            </div>
          </RadioGroup>

          {/* Checkbox */}
          <div className="space-y-2">
            <p>Additional Preferences</p>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="newsletter"
                  checked={newsletter}
                  onCheckedChange={(v) => setNewsletter(!!v)}
                />
                <Label
                  htmlFor="newsletter"
                  className="text-white/90 font-semibold"
                >
                  Newsletter
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="promotions"
                  checked={promotions}
                  onCheckedChange={(v) => setPromotions(!!v)}
                />
                <Label
                  htmlFor="promotions"
                  className="text-white/90 font-semibold"
                >
                  Promotions
                </Label>
              </div>
            </div>
          </div>

          {/* Appointments/dates */}
          <div className="space-y-2">
            <p>Appointment</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-cente">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg bg-white px-4 py-3 text-slate-900"
              />

              <div className="flex items-center  text-white/90 justify-end">
                <button
                  type="button"
                  onClick={incGuests}
                  className="px-3 py-3 text-slate-900 bg-slate-100 border border-black rounded-l-xl rounded-r-none"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={decGuests}
                  className="px-3 py-3 text-slate-900 bg-slate-100 border border-black rounded-r-xl rounded-l-none"
                >
                  -
                </button>

                <span className="whitespace-nowrap">{guests} Guests</span>
              </div>
            </div>

            <div>
              <label>Leave a message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here..."
                className="w-full min-h-32 rounded-lg bg-white px-4 py-3 text-slate-900 "
              />
            </div>
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
