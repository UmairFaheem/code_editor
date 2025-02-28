"use client";

import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { Editor } from "@monaco-editor/react";
import Sidebar from "@/components/Sidebar";
import ThemeSelector from "@/components/ThemeSelector";
import LanguageSelector from "@/components/ui/LanguageSelector";

const EditorPage = () => {
  const { isLoaded, userId } = useAuth();
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

  if (isLoaded && !userId) {
    redirect("/auth/sign-in");
  }

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
          className="flex-1 border-2 rounded-md overflow-hidden"
        />
      </main>
    </div>
  );
};

export default EditorPage;
