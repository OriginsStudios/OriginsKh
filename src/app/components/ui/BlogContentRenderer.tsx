"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentBlock, ImageBlock, VideoBlock } from "../../../data/blogs";
import BlogMediaSlideshow from "./BlogMediaSlideshow";

interface BlogContentRendererProps {
  content: ContentBlock[];
}

export default function BlogContentRenderer({
  content,
}: BlogContentRendererProps) {
  const isMediaBlock = (
    block: ContentBlock
  ): block is ImageBlock | VideoBlock =>
    block.type === "image" || block.type === "video";

  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "text":
        return (
          <p key={index} className="text-gray-800 leading-relaxed mb-6">
            {block.content}
          </p>
        );

      case "heading":
        const headingClasses = {
          2: "text-2xl font-bold text-gray-900 mt-12 mb-6",
          3: "text-xl font-bold text-gray-900 mt-8 mb-4",
          4: "text-lg font-bold text-gray-900 mt-6 mb-3",
        };

        if (block.level === 2) {
          return (
            <h2
              key={index}
              id={block.id}
              className={headingClasses[block.level]}
            >
              {block.content}
            </h2>
          );
        } else if (block.level === 3) {
          return (
            <h3
              key={index}
              id={block.id}
              className={headingClasses[block.level]}
            >
              {block.content}
            </h3>
          );
        } else {
          return (
            <h4
              key={index}
              id={block.id}
              className={headingClasses[block.level]}
            >
              {block.content}
            </h4>
          );
        }

      case "video":
        return (
          <div key={index} className="my-8">
            <video
              controls
              poster={block.poster}
              className="w-full rounded-lg shadow-lg"
            >
              <source src={block.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {block.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {block.caption}
              </p>
            )}
          </div>
        );

      case "image":
        return (
          <div key={index} className="my-8">
            <div
              className={`relative w-full ${
                block.className || "aspect-video"
              } rounded-lg overflow-hidden shadow-lg`}
            >
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            {block.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {block.caption}
              </p>
            )}
          </div>
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className={`${
              block.className ||
              "border-l-4 border-teal-400 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg"
            }`}
          >
            <p className="text-lg italic text-gray-700">{block.content}</p>
            {block.author && (
              <cite className="block text-sm text-gray-600 mt-2">
                — {block.author}
              </cite>
            )}
          </blockquote>
        );

      case "list":
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag key={index} className="space-y-3 my-6">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                {item.icon && (
                  <span className="flex-shrink-0 w-6 h-6 mr-3 mt-0.5 text-lg">
                    {item.icon}
                  </span>
                )}
                <div>
                  {item.title && (
                    <strong className="text-gray-900">{item.title}: </strong>
                  )}
                  <span className="text-gray-700">{item.content}</span>
                </div>
              </li>
            ))}
          </ListTag>
        );

      case "grid":
        const gridCols = {
          2: "grid-cols-1 md:grid-cols-2",
          3: "grid-cols-1 md:grid-cols-3",
          4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        };

        return (
          <div
            key={index}
            className={`grid ${gridCols[block.columns || 3]} gap-6 my-8`}
          >
            {block.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`p-6 rounded-lg border ${
                  item.className || "bg-gray-50 border-gray-200"
                }`}
              >
                {item.icon && <div className="text-2xl mb-3">{item.icon}</div>}
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        );

      case "callout":
        const calloutStyles = {
          info: "bg-blue-50 border-blue-200 text-blue-800",
          warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
          success: "bg-green-50 border-green-200 text-green-800",
          error: "bg-red-50 border-red-200 text-red-800",
        };

        return (
          <div
            key={index}
            className={`border-l-4 p-6 my-8 rounded-r-lg ${
              calloutStyles[block.variant || "info"]
            }`}
          >
            <h4 className="font-semibold mb-2">{block.title}</h4>
            <div className="whitespace-pre-line">{block.content}</div>
          </div>
        );

      case "steps":
        return (
          <div key={index} className="my-8">
            {block.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="flex items-start mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-700">{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "cta":
        return (
          <div
            key={index}
            className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 my-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {block.title}
            </h3>
            <p className="text-gray-700 mb-6">{block.content}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {block.buttons.map((button, buttonIndex) => (
                <Link
                  key={buttonIndex}
                  href={button.href}
                  className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors duration-200 ${
                    button.variant === "primary"
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {(() => {
        const renderedBlocks: ReactNode[] = [];

        for (let i = 0; i < content.length; i += 1) {
          const block = content[i];

          if (isMediaBlock(block)) {
            const slides: Array<ImageBlock | VideoBlock> = [];
            let cursor = i;

            while (cursor < content.length && isMediaBlock(content[cursor])) {
              slides.push(content[cursor] as ImageBlock | VideoBlock);
              cursor += 1;
            }

            if (slides.length > 1) {
              const containerClassName =
                slides.find(
                  (slide): slide is ImageBlock =>
                    slide.type === "image" && Boolean(slide.className)
                )?.className || undefined;

              renderedBlocks.push(
                <BlogMediaSlideshow
                  key={`slideshow-${i}`}
                  slides={slides}
                  containerClassName={containerClassName}
                />
              );
            } else {
              renderedBlocks.push(renderBlock(slides[0], i));
            }

            i = cursor - 1;
            continue;
          }

          renderedBlocks.push(renderBlock(block, i));
        }

        return renderedBlocks;
      })()}
    </div>
  );
}
