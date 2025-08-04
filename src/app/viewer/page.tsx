"use client";

import dynamic from "next/dynamic";
import React from "react";
import { PanoViewerNode } from "../components/ui/PanoViewer";

const PanoViewer = dynamic(() => import("../components/ui/PanoViewer"), {
  ssr: false,
});

export default function ViewerPage() {
  // Define your panoramic tour nodes
  const tourNodes: PanoViewerNode[] = [
    {
      id: "1",
      panorama: "/pano/room1.JPG",
      links: [{ nodeId: "2" }],
      gps: [-20.156479, 25.666725, 3] as [number, number, number],
      sphereCorrection: { pan: "0deg" },
    },
    {
      id: "2",
      panorama: "/pano/room2.JPG",
      links: [{ nodeId: "1" }],
      gps: [-80.156168, 25.666623, 3] as [number, number, number],
      sphereCorrection: { pan: "0deg" },
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">360° Virtual Tour</h1>
      <PanoViewer nodes={tourNodes} startNodeId="1" height="600px" />
    </div>
  );
}
