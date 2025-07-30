"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import React from "react";

interface VideoSectionProps {
  videoSrc: string;
  thumbnailSrc?: string;
  videoType?: string;
  id?: string;
  className?: string;
  sectionClassName?: string;
  videoClassName?: string;
  minHeight?: string;
  backgroundColor?: string;
  paddingTop?: string;
  marginBottom?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  showControls?: boolean;
  children?: React.ReactNode;
  showTopSpacer?: boolean;
  topSpacerClassName?: string;
}

const VideoSection = React.forwardRef<HTMLElement, VideoSectionProps>(
  (
    {
      videoSrc,
      thumbnailSrc,
      videoType = "video/mp4",
      id = "video-section",
      className = "",
      sectionClassName = "",
      videoClassName = "",
      minHeight = "min-h-[50vh]",
      backgroundColor = "bg-white",
      marginBottom = "mb-6 sm:mb-12 md:mb-8",
      autoPlay = false,
      loop = false,
      muted = false,
      playsInline = true,
      showControls = true,
      children,
      showTopSpacer = true,
      topSpacerClassName = "w-full flex justify-center items-center mb-8",
    },
    ref
  ) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false); // Track if video has ever played
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState<number | null>(null);
    const [showControlsOverlay, setShowControlsOverlay] = useState(true);
    const [isMuted, setIsMuted] = useState(muted);

    const formatTime = (time: number): string => {
      if (isNaN(time) || time < 0 || time === Infinity) return "0:00";
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${minutes}:${seconds}`;
    };

    const togglePlay = () => {
      if (!videoRef.current) return;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.error("Playback failed:", err));
        }
        setHasPlayed(true); // Mark that the video has started playing at least once
      }
      setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
      if (!videoRef.current) return;
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    };

    const toggleFullScreen = () => {
      const video = videoRef.current;
      if (!video) return;
      if (!document.fullscreenElement) {
        video.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!progressBarRef.current || !videoRef.current || duration === null)
        return;
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleLoadedMetadata = () => {
        if (!isNaN(video.duration)) {
          setDuration(video.duration);
        }
      };

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      let retryCount = 0;
      const retryLoad = setInterval(() => {
        if (!isNaN(video.duration) && video.duration > 0) {
          setDuration(video.duration);
          clearInterval(retryLoad);
        } else if (retryCount++ > 10) {
          console.warn("Failed to load duration after retries");
          clearInterval(retryLoad);
        }
      }, 1000);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        clearInterval(retryLoad);
      };
    }, []);

    useEffect(() => {
      const progressBar = progressBarRef.current;
      const video = videoRef.current;
      if (!progressBar || !video || duration === null) return;

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY;
        const timeChange = (delta / 100) * (duration / 100);
        const newTime = Math.min(
          Math.max(video.currentTime + timeChange, 0),
          duration
        );
        video.currentTime = newTime;
        setCurrentTime(newTime);
      };

      progressBar.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        progressBar.removeEventListener("wheel", handleWheel);
      };
    }, [duration]);

    return (
      <section
        ref={ref}
        id={id}
        className={`${minHeight} ${backgroundColor} m-0 p-0 ${sectionClassName} ${className}`}
      >
        {showTopSpacer && <div className={topSpacerClassName}></div>}
        <div
          className={`w-full relative group ${marginBottom}`}
          onMouseEnter={() => setShowControlsOverlay(true)}
          onMouseLeave={() => setShowControlsOverlay(false)}
        >
          {/* Thumbnail Overlay */}
          {thumbnailSrc && !hasPlayed && !isPlaying && (
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${thumbnailSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: isPlaying ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
                pointerEvents: "none",
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play"
              >
                <div className="bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-200">
                  <Play className="w-8 h-8" />
                </div>
              </button>
            </div>
          )}

          {/* Video Element */}
          <video
            ref={videoRef}
            className={`relative w-full h-auto object-cover cursor-pointer ${videoClassName}`}
            autoPlay={autoPlay}
            loop={loop}
            muted={isMuted}
            playsInline={playsInline}
            onClick={togglePlay}
            preload="auto"
            controlsList="nodownload noplaybackrate nofullscreen"
          >
            <source src={videoSrc} type={videoType} />
            Your browser does not support the video tag.
          </video>

          {showControls && (
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                showControlsOverlay ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Center Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-200"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                {/* Progress Bar */}
                <div
                  ref={progressBarRef}
                  className="h-1 bg-gray-600 rounded-lg mb-2 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-blue-500 rounded-lg"
                    style={{
                      width: `${
                        duration !== null && duration > 0
                          ? (currentTime / duration) * 100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>

                {/* Time Info & Buttons */}
                <div className="flex items-center justify-between text-white text-sm gap-2">
                  {/* Play Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="p-1 hover:bg-gray-700 rounded"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  {/* Mute Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="p-1 hover:bg-gray-700 rounded"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 9L15 15M15 9L9 15"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11 5L6 9H2v6h4l5 4V5z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullScreen();
                    }}
                    className="p-1 hover:bg-gray-700 rounded"
                    aria-label="Fullscreen"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m0 8v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3m0-8V5a2 2 0 0 0-2-2h-3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Time Info */}
                  <span className="ml-auto">
                    {formatTime(currentTime)} /{" "}
                    {duration !== null ? formatTime(duration) : "0:00"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {children}
        </div>
      </section>
    );
  }
);

VideoSection.displayName = "VideoSection";
export default VideoSection;
