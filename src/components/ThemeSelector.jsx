import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ThemeSelector = ({ theme, onThemeChange }) => {
  const themes = [
    { value: "vs", label: "Light" },
    { value: "vs-dark", label: "Dark" },
    { value: "hc-black", label: "High Contrast" },
  ];

  return (
    <div className="mb-4 flex items-center">
      <label className="mr-2">Theme:</label>
      <Select value={theme} onValueChange={onThemeChange}>
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelector;
