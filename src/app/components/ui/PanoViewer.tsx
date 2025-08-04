"use client";

import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";

export interface PanoViewerNode {
  id: string;
  panorama: string;
  thumbnail?: string;
  name?: string;
  caption?: string;
  links?: { nodeId: string }[];
  markers?: {
    id: string;
    image?: string;
    tooltip?: string;
    size?: { width: number; height: number };
    anchor?: string;
    gps?: [number, number, number];
  }[];
  gps?: [number, number, number];
  sphereCorrection?: { pan?: string; pitch?: number };
}

interface PanoViewerProps {
  nodes: PanoViewerNode[];
  startNodeId?: string;
  height?: string;
  width?: string;
}

export default function PanoViewer({
  nodes,
  startNodeId,
  height = "500px",
  width = "100%",
}: PanoViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!containerRef.current || !nodes || nodes.length === 0) return;

    const viewer = new Viewer({
      container: containerRef.current,
      touchmoveTwoFingers: true,
      defaultYaw: "270deg",
      navbar: ["zoom", "move", "fullscreen"],
      plugins: [
        MarkersPlugin,
        VirtualTourPlugin.withConfig({
          positionMode: "gps",
          renderMode: "3d",
          nodes: nodes,
          startNodeId: startNodeId || nodes[0].id,
        }),
      ],
    });

    viewerRef.current = viewer;

    return () => {
      viewer.destroy();
    };
  }, [nodes, startNodeId]);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
      }}
    />
  );
}
