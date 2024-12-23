export type InputType = "text" | "date" | "select";

interface AbstractField {
  label: string;
  value?: string;
}

export type Field = TextField | SelectField | DateField;

interface SelectField extends AbstractField {
  type: "select";

  choices: string[];
}

interface TextField extends AbstractField {
  type: "text";
}

interface DateField extends AbstractField {
  type: "date";
}
