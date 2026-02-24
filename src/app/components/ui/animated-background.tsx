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
  onHoverChange?: (newHoveredId: string | null) => void;
  externalHoveredId?: string | null;
  className?: string;
  hoverClassName?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export default function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  onHoverChange,
  externalHoveredId,
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
    if (onHoverChange) {
      onHoverChange(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    if (onHoverChange) {
      onHoverChange(null);
    }
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effectiveHoveredId = externalHoveredId ?? hoveredId;
  const hasHover = effectiveHoveredId !== null;

  return Children.map(children, (child: ReactElement<any>, index) => {
    const id = child.props["data-id"];
    const isActive = activeId === id;
    const isHovered = effectiveHoveredId === id;

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleMouseEnter(id),
          onMouseLeave: handleMouseLeave,
          onClick: () => handleSetActiveId(id),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    const currentBackgroundId = effectiveHoveredId || activeId;
    const backgroundClass = effectiveHoveredId
      ? hoverClassName || "bg-orange-400"
      : className;

    return cloneElement(
      child,
      {
        key: index,
        className: cn(
          "relative inline-flex rounded-full bg-white/75 backdrop-blur-md border border-white/60 shadow-sm",
          child.props.className
        ),
        "data-active": isActive ? "true" : "false",
        "data-hovered": isHovered ? "true" : "false",
        "data-any-hovered": hasHover ? "true" : "false",
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
