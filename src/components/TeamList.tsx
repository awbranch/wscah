import React from "react";
import { TeamList as TeamListType } from "@/types/TeamList";
import { getTeam } from "@/utils/sanity";

type TeamListProps = Omit<TeamListType, "_type" | "_key">;

export default async function TeamList({
  blockPalette,
  team: teamRef,
}: TeamListProps) {
  if (!teamRef) {
    return <Error>Team Unspecified</Error>;
  }

  const team = teamRef._ref ? await getTeam(teamRef._ref) : null;

  if (!team) {
    return <Error>Unknown Team {teamRef._key}</Error>;
  }

  return (
    <>
      <div>Team {team.name}</div>
      {
        <ul>
          {team.members.map((member) => (
            <li key={member._key}>{member.name}</li>
          ))}
        </ul>
      }
    </>
  );
}

type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  return <div className={"text-5xl text-red-700"}>{children}</div>;
}
