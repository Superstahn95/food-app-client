import Container from "./Container";
import { team } from "../assets/data";
import MemberCard from "./MemberCard";

function Team() {
  return (
    <div className="py-4">
      <Container>
        <div className="flex flex-col items-center py-3 ">
          <div className="flex items-center space-x-1">
            <div className="w-[30px] h-[1px] bg-yellow-600" />
            <h2 className="text-yellow-600 font-niconne text-3xl">Team</h2>
            <div className="w-[30px] h-[1px] bg-yellow-600" />
          </div>
          <h1 className="text-5xl font-niconne text-slate-800 capitalize my-2">
            Our Founders
          </h1>
          <div className="flex items-center justify-center space-x-2 space-y-2 flex-wrap ">
            {team.map((member) => (
              <MemberCard
                key={member.id}
                imageAddress={member.imageAddress}
                name={member.name}
                socials={member.socials}
                post={member.post}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Team;
