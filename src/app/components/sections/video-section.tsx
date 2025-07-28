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
    const [hasPlayed, setHasPlayed] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState<number | null>(null);
    const [showControlsOverlay, setShowControlsOverlay] = useState(true);
    const [isMuted, setIsMuted] = useState(muted);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.volume = volume;
      }
    }, [volume]);

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
        setHasPlayed(true);
      }
      setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
      if (!videoRef.current) return;
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
      setVolume(newMuted ? 0 : 0.5);
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

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }, []);

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
          {thumbnailSrc && !hasPlayed && !isPlaying && (
            <div
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${thumbnailSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
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

                <div className="flex items-center justify-between text-white text-sm gap-2">
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

                  {/* YouTube-style volume */}
                  <div
                    className={`relative group inline-flex items-center ${
                      !isPlaying ? "pointer-events-none" : ""
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className={`p-1 hover:bg-gray-700 rounded ${
                        isPlaying ? "group-hover:bg-gray-700" : "opacity-50"
                      }`}
                      aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
                    >
                      {isMuted || volume === 0 ? (
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
                    <div
                      className={`absolute left-full ml-2 w-24 opacity-0 invisible ${
                        isPlaying
                          ? "group-hover:opacity-100 group-hover:visible"
                          : ""
                      } transition-all duration-300 z-10`}
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => {
                          const newVolume = parseFloat(e.target.value);
                          setVolume(newVolume);
                          if (videoRef.current) {
                            videoRef.current.muted = newVolume === 0;
                            setIsMuted(newVolume === 0);
                          }
                        }}
                        className="w-full h-1 accent-blue-500 cursor-pointer bg-gray-600 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullScreen();
                    }}
                    className="p-1 hover:bg-gray-700 rounded ml-2"
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

                  <span className="ml-2">
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
