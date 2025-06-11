"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect"
import Title from "./Title"
import { SiReact, SiJavascript, SiPython, SiLinux, SiPostgresql, SiMongodb, SiPrisma, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiMysql, SiFastapi, SiRedis, SiFlask, SiDjango } from "react-icons/si";



const Skills = () => {

    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "JavaScript",
            Icon: SiJavascript
        },
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Linux",
            Icon: SiLinux
        },
        {
            text: "Postgres",
            Icon: SiPostgresql
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        },



        {
            text: "Tailwind CSS",
            Icon: SiTailwindcss
        },
        {
            text: "HTML5",
            Icon: SiHtml5
        },
        {
            text: "CSS",
            Icon: SiCss3
        },
        {
            text: "MySQL",
            Icon: SiMysql
        },
        {
            text: "FastAPI",
            Icon: SiFastapi
        },
        {
            text: "Redis",
            Icon: SiRedis
        },
        {
            text: "Flask",
            Icon: SiFlask
        },
        {
            text: "Django",
            Icon: SiDjango
        }
    ]
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Skills 🏅" className="flex flex-col items-center justify-center -rotate-6" />

            <HoverEffect items={skills} />
        </div>
    )
}

export default Skills