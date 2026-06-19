"use client";
//using copilot for tailwind classes and styles
import Image from "next/image";
import { Mail  } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  skills: string[];
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
    discord?: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group relative w-full rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md p-6 overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1  flex flex-col justify-between min-h-[350px]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
          {"// "}{member.department}
        </span>
      </div>

      {/* menber image & info */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative flex-shrink-0 w-14 h-14 rounded-lg bg-white/[0.04] border border-white/10 overflow-hidden group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
          <Image src={member.image} alt={`${member.name}'s image`} fill sizes="56px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" priority={false}/>
        </div>
        <div>
          <h3 className="text-lg font-bold text-#f8fafc ">
            {member.name}
          </h3>
          <p className="text-sm text-white/60 font-mono">{member.role}</p>
        </div>
      </div>

      {/* skills */}

      <div className="mb-6">
        <div className="text-[10px] font-mono text-white/40 mb-2 uppercase tracking-wider">
          {"// Skills:"}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.skills.map((skill, index) => (
            <span key={index} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-white/80 select-none">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* socials */}


      <div className="pt-4 border-t border-white/5 flex items-center justify-end">
        <div className="flex items-center gap-3">
          {member.socials.github && (
            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200" aria-label={`${member.name}'s GitHub`}>
              <FaGithub />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200" aria-label={`${member.name}'s LinkedIn`}>
              <FaLinkedin />
            </a>
          )}

          {member.socials.discord && (
            <a href={member.socials.discord} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200" aria-label={`${member.name}'s Discord`}>
              <FaDiscord className="w-4 h-4" />
            </a>
          )}
          {member.socials.email && (
            <a href={`mailto:${member.socials.email}`} className="text-white/60 hover:text-white transition-colors duration-200" aria-label={`Email ${member.name}`}>
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
