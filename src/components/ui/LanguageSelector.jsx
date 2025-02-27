import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = ({ language, onLanguageChange }) => {
  const languages = [
    {
      value: "javascript",
      name: "JavaScript",
      code: `console.log("Hello world!");`,
    },
    {
      value: "typescript",
      name: "TypeScript",
      code: `console.log("Hello world!");`,
    },
    {
      value: "python",
      name: "Python",
      code: `print('hello')`,
    },
    {
      value: "java",
      name: "Java",
      code: `class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
    }
}`,
    },

    {
      value: "c",
      name: "C",
      code: `#include <stdio.h>

int main() {
    // Write C code here
    printf("Try programiz.pro");

    return 0;
}`,
    },
    {
      value: "cpp",
      name: "C++",
      code: `#include <iostream>
using namepsace std;

int main() {
    // Write C++ code here
    cout << "Hello World";

    return 0;
}`,
    },
    {
      value: "mysql",
      name: "MySQL",
      code: `SELECT 1+2;`,
    },
    {
      value: "json",
      name: "JSON",
      code: `{
   "name": "Umair Faheem"
  }`,
    },
    {
      value: "markdown",
      name: "Markdown",
      code: `### Hello World`,
    },
  ];

  return (
    <div className="mb-4 flex items-center">
      <label className="mr-2">Language:</label>
      <Select
        onValueChange={(value) => {
          const selectedLanguage = languages.find(
            (lang) => lang.value === value
          );
          onLanguageChange(selectedLanguage);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={language} />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
