import React from "react";
import { useParams } from "react-router-dom";
import { mernStack } from "../projectData/ProjectData";

const ProjectsDetails = () => {
  const { id } = useParams();

  const project = mernStack.find((p) => p.id == id);

  if (!project) {
    return <p>not found</p>;
  }

  return (
    <div className="bg-[#2e424d] text-gray-300 p-5 min-h-screen">
      <h1 className="text-center font-bold my-5 underline">
        {project.name} Screens
      </h1>
      {!project.images && <p className="text-center">not found</p>}
      <div className="grid md:grid-cols-2 gap-2">
        {project.images?.map((img) => (
          <img className="rounded-md" src={img} alt="img" />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDetails;
