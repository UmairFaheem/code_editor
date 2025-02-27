"use client";

import { Editor } from "@monaco-editor/react";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import ThemeSelector from "@/components/ThemeSelector";
import LanguageSelector from "@/components/ui/LanguageSelector";

const EditorPage = () => {
  const [theme, setTheme] = useState("vs");
  const [language, setLanguage] = useState({
    value: "javascript",
    name: "JavaScript",
    code: `console.log("Hello world!");`,
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="flex-1 flex">
      <Sidebar />
      <main className="flex flex-col flex-1 p-4">
        <div className="flex justify-end items-center gap-4">
          <ThemeSelector theme={theme} onThemeChange={handleThemeChange} />
          <LanguageSelector
            language={language.name}
            onLanguageChange={handleLanguageChange}
          />
        </div>
        <Editor
          height="100%"
          defaultLanguage={language.value}
          defaultValue={language.code}
          value={language.code}
          theme={theme}
          className="flex-1"
        />
      </main>
    </div>
  );
};

export default EditorPage;
