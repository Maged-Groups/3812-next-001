"use client";

import Icon from "@c/atoms/Icon";
import Input from "@c/atoms/Input";
import Label from "@c/atoms/Label";
import Text from "@c/atoms/Text";

export default function Field({
  type = "text",
  labelText,
  placeholder,
  id,
  filedStyle = "",
  inputStyle = "",
  labelStyle = "",
  textStyle = "",
  iconStyle = "",
  msg = "",
  hasText = true,
  hasIcon = false,
  iconName = "",
  iconColor = "black",
  iconAction,
  inputRef,
  inputChange,
}) {
  return (
    <div
      className={`border max-w-md m-3 rounded flex flex-col px-2 ${filedStyle}`}
    >
      <Label extraCSS={labelStyle} text={labelText} htmlFor={id} />
      <div className="flex gap-2 items-center">
        <Input
          onChange={inputChange}
          ref={inputRef ?? (() => {})}
          extraCSS={inputStyle}
          type={type}
          id={id}
          placeholder={placeholder}
        />
        {hasIcon && (
          <Icon
            name={iconName}
            color={iconColor}
            extraCSS={`${iconStyle}`}
            iconAction={iconAction}
          />
        )}
      </div>
      {hasText && <Text msg={msg} extraCSS={textStyle} />}
    </div>
  );
}
