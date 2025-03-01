"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { io } from "socket.io-client";
import { redirect } from "next/navigation";
import { Editor } from "@monaco-editor/react";
import Sidebar from "@/components/Sidebar";
import ThemeSelector from "@/components/ThemeSelector";
import LanguageSelector from "@/components/ui/LanguageSelector";

const socket = io("http://localhost:5000");

const EditorPage = () => {
  const { user } = useUser();
  const { editorId } = useParams();
  const { isLoaded, userId } = useAuth();

  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    if (!userId) return;
    socket.emit("join-room", {
      roomId: editorId,
      userId,
      fullName: user.fullName,
    });

    socket.on("user-joined", (user) => {
      // setUsers((prevUsers) => [...prevUsers, user]); // Store entire user object
      setUsers(user);
    });

    return () => {
      socket.off("user-joined");
    };
  }, [editorId, userId]);

  if (isLoaded && !userId) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex-1 flex">
      <Sidebar users={users} setUsers={setUsers} />
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
