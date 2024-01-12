import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] z-[50]">
      <Link href={url} target="_blank">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl md:text-xl font-semibold text-white">
            {title}
          </h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
