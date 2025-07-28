"use client";
import { cn } from "../utils/utils";
import { AnimatePresence, Transition, motion } from "framer-motion";
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
} from "react";

type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ "data-id": string }>[]
    | ReactElement<{ "data-id": string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  hoverClassName?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export default function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  hoverClassName,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Children.map(children, (child: ReactElement<any>, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleMouseEnter(id),
          onMouseLeave: handleMouseLeave,
          onClick: () => handleSetActiveId(id),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    const currentBackgroundId = hoveredId || activeId;
    const backgroundClass = hoveredId
      ? hoverClassName || "bg-orange-400"
      : className;

    return cloneElement(
      child,
      {
        key: index,
        className: cn(
          "relative inline-flex bg-gray-200 rounded-full",
          child.props.className
        ),
        ...interactionProps,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      <>
        <AnimatePresence initial={false}>
          {currentBackgroundId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0 rounded-full", backgroundClass)}
              transition={transition}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <span className="z-10">{child.props.children}</span>
      </>
    );
  });
}
