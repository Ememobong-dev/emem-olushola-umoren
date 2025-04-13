"use client";


import { useParams } from "next/navigation";
import React from "react";

const DataSinglePage = () => {
  const params = useParams();
  const slug = params?.slug;
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Project: {slug}</h1>
      <p className="mt-4">Detailed content for {slug} will go here.</p>
    </div>
  );
};

export default DataSinglePage;
