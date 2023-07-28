import * as React from "react";
import Select, {
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  components,
} from "react-select";

import Triangle from "./icons/Triangle";

interface Option {
  [key: string]: any;
}

interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  options?: Option[];
  defaultValue?: Option;
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="p-[8px]">
        <Triangle />
      </div>
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
  return <span style={{ backgroundColor: "transparent" }} {...innerProps} />;
};

const input = ({
  label,
  placeholder,
  className,
  type,
  options,
  defaultValue,
}: Props) => {
  const commonStyle =
    "border border-sandyAccent rounded-md placeholder-burgundy placeholder-opacity-[0.64]";

  if (type === "textarea") {
    return (
      <>
        <label htmlFor={label} className="sr-only">
          {label}
        </label>
        <textarea
          id={label}
          placeholder={placeholder}
          className={`${commonStyle} py-[9px] px-4 resize-none ${className}`}
          rows={3}
        />
      </>
    );
  }

  if (type === "select") {
    return (
      <>
        <label htmlFor={label} className="sr-only">
          {label}
        </label>
        <Select
          id={label}
          options={options}
          className={`text ${className}`}
          defaultValue={defaultValue}
          components={{ DropdownIndicator, IndicatorSeparator }}
          placeholder={placeholder}
          styles={{
            control: (base, state) => ({
              ...base,
              height: "48px",
              borderRadius: "6px",
              borderColor: "#F3D1BF",
            }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isSelected
                ? "#EF6D58"
                : isFocused
                ? "#FDF0E9"
                : undefined,
            }),
            singleValue: (base, props) => ({
              ...base,
              color: "rgba(0,0,0,0.64)",
            }),
          }}
        />
      </>
    );
  }

  return (
    <>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        id={label}
        type={type || "text"}
        placeholder={placeholder}
        className={`${commonStyle} h-12 px-4 pt-[9px] pb-[7px] ${className}`}
      />
    </>
  );
};

export default input;
