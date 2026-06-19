"use client";

// used copilot/windsurf for the styling classes and button shadowing in all files to make my work easier and faster


import { useState, useMemo } from "react";
import TeamCard, { TeamMember } from "./TeamCard";
import { Search } from "lucide-react";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Bhavit Grover",
    role: "President",
    department: "Pro-Core",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "bhavit@gmail.com",
      discord : "thedoctor"
    }
  },
  {
    name: "Aarav Juneja",
    role: "Vice President",
    department: "Pro-Core",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "aarav@gmail.com",
      discord : ""
    }
  },
  {
    name: "Saksham Jain",
    role: "Secretary",
    department: "Pro-Core",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "saksham@gmail.com",
      discord : ""
    }
  },
  {
    name: "Kushagra Sethia",
    role: "Secretary",
    department: "Pro-Core",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "kushagra@gmail.com",
      discord : "",
    }
  },
  {
    name: "Ahaana Dhamija",
    role: "Core Member",
    department: "Core Members",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "ahaana@gmail.com",
      discord : ""
    }
  },
  {
    name: "Aarna Sethi",
    role: "Core Member",
    department: "Core Members",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "aarna@gmail.com",
      discord : ""  
    }
  },
  {
    name: "Kanishk Jain",
    role: "Core Member",
    department: "Core Members",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "kanishk@gmail.com",
      discord : ""
    }
  },
  {
    name: "Parag Verma",
    role: "Core Member",
    department: "Core Members",
    skills: ["~in progress~"],
    image: "/mainlogo.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "parag@gmail.com",
      discord : ""
    }
  }
];

const DEPARTMENTS = ["All", "Pro-Core", "Core Members"];

export default function TeamLayout() {
  const [activeRole, setactiveRole] = useState("All");
  const [searchN, setsearchN] = useState("");

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesDept = activeRole === "All" || member.department === activeRole;
      
      const query = searchN.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesDept && matchesSearch;
    });
  }, [activeRole, searchN]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
        
        <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
          {DEPARTMENTS.map((dept) => {
            const isActive = activeRole === dept;
            return (
              <button
                key={dept}
                onClick={() => setactiveRole(dept)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-transparent text-white/60 border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* search */}
        <div className="relative w-full md:w-80 order-1 md:order-2">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/40">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search member, skill, or role..."
            value={searchN}
            onChange={(e) => setsearchN(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-sm font-mono text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-200"
          />
          {searchN && (
            <button
              onClick={() => setsearchN("")}
              className="absolute inset-y-0 right-3 flex items-center text-xs font-mono text-white/40 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-2 text-xs font-mono text-white/40">
        <div className="flex items-center gap-2">
          <span>
            Members found: <span className="text-white font-bold">{filteredMembers.length}</span> / {TEAM_MEMBERS.length}
          </span>
        </div>
      </div>

      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 rounded-xl border border-dashed border-white/10 bg-white/[0.01]">
          <div className="font-mono text-sm text-white/40 mb-2">
            No matches found for: {searchN}
          </div>
          <p className="text-xs text-white/30 font-mono">
            Try adjusting filters or checking spelling.
          </p>
        </div>
      )}
    </div>
  );
}
