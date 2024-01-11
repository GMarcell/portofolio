import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { All_Projects } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {All_Projects.map(
          (
            el: { image: string; title: string; description: string },
            index: number
          ) => {
            return (
              <ProjectCard
                key={index}
                src={el.image}
                title={el.title}
                description={el.description}
              />
            );
          }
        )}
        {/* <ProjectCard
          src="/NextWebsite.png"
          title="Modern NextJS Portofolio"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia obcaecati molestiae eligendi quis deserunt laudantium quo veritatis dolore sapiente, itaque officiis perspiciatis nam blanditiis laboriosam distinctio, at cumque suscipit!"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia obcaecati molestiae eligendi quis deserunt laudantium quo veritatis dolore sapiente, itaque officiis perspiciatis nam blanditiis laboriosam distinctio, at cumque suscipit!"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia obcaecati molestiae eligendi quis deserunt laudantium quo veritatis dolore sapiente, itaque officiis perspiciatis nam blanditiis laboriosam distinctio, at cumque suscipit!"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
