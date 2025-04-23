//import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Adrenaline",
    description: "A tactical shooter on the Roblox platform.",
    tech: ["Roblox", "Luau", "Physics", "Frontend", "Backend", "Networking"],
    game: "https://www.roblox.com/games/86637970729468/Adrenaline-Testing-Place",
  },
  {
    title: "Stellar Blast",
    description:
      "A Roblox game with dynamic progression, pet systems, and rebirth mechanics.",
    tech: ["Roblox", "Luau", "Physics", "Frontend", "Backend"],
    //github: "https://github.com/yourname/ice-cream-lick-simulator",
    game: "https://www.roblox.com/games/16803725747/Stellar-Blast-Beta-Hyper-Jump-Update",
  },
  {
    title: "Thief Simulator",
    description: "A Roblox simulator game.",
    tech: ["Roblox", "Luau", "Frontend", "Backend"],
    game: "https://www.roblox.com/games/8232438881/Thief-Simulator",
    //github: "https://github.com/yourname/goap-plugin",
  },
  {
    title: "Squid Game Ultimate",
    description:
      "A Roblox game based on the popular Squid Games series on Netflix™️",
    tech: ["Roblox", "Luau", "Backend"],
    game: "https://www.roblox.com/games/8082354013/Squid-Game-Ultimate-STORY",
  },
  {
    title: "Z0KTAR: FNAF games",
    description: "Worked on their Roblox FNAF game (UNRELEASED).",
    tech: ["Roblox", "Luau", "Backend"],
    game: "https://www.roblox.com/communities/11473956/Z0KTARs-Community-Group#!/about"
  },
  {
    title: "BossStudios OPM",
    description: "A Roblox game based around the One Punch Man series, the project was abandoned",
    tech: ["Roblox", "Luau", "Anime", "Networking"],
    game: "https://www.roblox.com/communities/7591879/Ro-Punch-Man-Roblox-OPM-Game#!/about"
  },
  {
    title: "Lionhearts Crusade",
    description: "A Roblox game based in the crusade times.",
    tech: ["Roblox", "Luau", "Frontend", "Backend", "MySQL"],
    game: "https://www.roblox.com/games/1383356634/Lionhearts-Crusade",
  },
  {
    title: "Island 2",
    description: "A Roblox game that is based on The Forest.",
    tech: ["Roblox", "Luau", "Frontend", "Backend"],
    game: "https://www.roblox.com/games/1462994259",
  },
  {
    title: "Monster Legends",
    description:
      "A Roblox simulator game where you fight monsters to progress.",
    tech: ["Roblox", "Luau", "Frontend", "Backend"],
    game: "https://www.roblox.com/games/3372516655",
  },
];

export default function Devfolio() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-12 max-w-5xl mx-auto">
      <Helmet>
        <title>Veltrix</title>
        <meta
          name="description"
          content="Veltrix, showcasing Roblox creations and projects."
        />
      </Helmet>
      <div className="flex items-center justify-center mb-6">
        {/* Profile image placeholder */}
        <div className="w-[50px] h-[50px] rounded-full bg-gray-200 mr-4">
          <img
            src="https://cdn.discordapp.com/avatars/261167188193443841/a_294d38d10550753f37fbfeb00179d0a5.png"
            alt="Profile picture"
            className="w-[50px] h-[50px] rounded-full bg-gray-200 mr-4"
          ></img>
        </div>
        <h1 className="text-4xl font-bold">Veltrix // Portfolio</h1>
      </div>

      <p className="text-center text-gray-600 mb-4">
        Bold | Inspired | Creating
      </p>

      {/* Tech Stack Logos */}
      <div className="flex justify-center gap-4 mb-12">
        <img
          src="https://rojo.space/img/logo.png"
          alt="Rojo"
          className="h-8 w-auto"
        />
        <img
          src="https://luau.org/assets/images/luau-88.png"
          alt="Luau"
          className="h-8 w-auto"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png"
          alt="VSCode"
          className="h-8 w-auto"
        />
        <img
          src="https://johnnymorganz.gallerycdn.vsassets.io/extensions/johnnymorganz/stylua/1.7.1/1731863847381/Microsoft.VisualStudio.Services.Icons.Default"
          alt="StyLUA"
          className="h-8 w-auto"
        />
        <img
          src="https://us.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_MySQL_600x400%402x-1.png"
          alt="MySQL"
          className="h-8 w-auto"
        />
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                    {project.tech.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 bg-gray-100 rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.game && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.game}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" /> Game
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
