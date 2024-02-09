import React from "react";
import logo from "./logo.svg";
import "./globals.css";
import { CardWithForm } from "./test-components/CardWithForm";
import { Checkbox } from "./@/components/ui/checkbox";
import { CardWithNotifications } from "./test-components/CardWithNotifications";
import { CheckboxDemo } from "./test-components/CheckBoxDemo";
import { AccordionHeader } from "@radix-ui/react-accordion";
import { Accordion } from "@/components/ui/accordion";
import { AccordionDemo } from "./test-components/Accordion";
import { DatePicker } from "./test-components/DatePicker";

function App() {
  return (
    <div className="container">
      <CheckboxDemo />
      <CardWithForm />
      <CardWithNotifications />
      <DatePicker />
      <AccordionDemo />
    </div>
  );
}

export default App;
