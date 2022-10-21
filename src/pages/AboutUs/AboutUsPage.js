import React from "react";
import UserCard from "../../components/UserCard/UserCard";

const AboutUsPage = () => {
  return (
    <div className="mt-24 mb-20 flex flex-row justify-evenly items-center min-h-[54vh]">
      <UserCard
        name="Imran Zukorlic"
        place="Novi Pazar, Serbia"
        description="Imran is student of Medresa, and he work's in centar NIT"
        git="https://github.com/imranzukorlic"
        gitimage="https://avatars.githubusercontent.com/u/100434307?v=4"
      />
    </div>
  );
};

export default AboutUsPage;
