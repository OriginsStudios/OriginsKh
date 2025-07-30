"use client";
/**
 * Enhanced VideoSection Component with Improved Autoplay
 * 
 * Features:
 * - Programmatic autoplay with proper error handling
 * - Intersection Observer for autoplay on visible
 * - Automatic muting for autoplay compliance
 * - User preference detection
 * - Graceful fallback when autoplay fails
 * 
 * Usage:
 * - autoPlay: Basic autoplay on component mount
 * - autoplayOnVisible: Autoplay when video comes into view
 * - autoplayThreshold: Control when autoplay triggers (0-1)
 */
import { useRef, useState, useEffect, useCallback } from "react";
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
  autoplayOnVisible?: boolean; // New prop for intersection observer autoplay
  autoplayThreshold?: number; // Threshold for when to trigger autoplay (0-1)
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
      autoplayOnVisible = false,
      autoplayThreshold = 0.5,
    },
    ref
  ) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false); // Track if video has ever played
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState<number | null>(null);
    const [showControlsOverlay, setShowControlsOverlay] = useState(true);
    const [isMuted, setIsMuted] = useState(muted);
    const [volume, setVolume] = useState(muted ? 0 : 0.5);
    const [autoplayAttempted, setAutoplayAttempted] = useState(false);

    // Programmatic autoplay function
    const attemptAutoplay = useCallback(async () => {
      if (!videoRef.current || autoplayAttempted) return;
      
      setAutoplayAttempted(true);
      
      try {
        const video = videoRef.current;
        
        // Ensure video is muted for autoplay (browser requirement)
        if (!muted) {
          video.muted = true;
          setIsMuted(true);
        }
        
        video.playsInline = true;
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          setHasPlayed(true);
          
          // If user wanted unmuted, try to unmute after a short delay
          if (!muted) {
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.muted = false;
                setIsMuted(false);
                videoRef.current.volume = 0.5;
                setVolume(0.5);
              }
            }, 100);
          }
        }
      } catch (error) {
        console.error("Autoplay failed:", error);
        setIsPlaying(false);
      }
    }, [muted, autoplayAttempted]);

    // Intersection Observer for autoplay on visible
    useEffect(() => {
      if (!autoplayOnVisible || !sectionRef.current) return;

      const currentSectionRef = sectionRef.current; // Capture ref value

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= autoplayThreshold) {
              if (!isPlaying && !autoplayAttempted) {
                attemptAutoplay();
              }
            } else {
              // Optionally pause when not visible
              if (isPlaying && videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }
          });
        },
        {
          threshold: autoplayThreshold,
          rootMargin: "0px 0px -10% 0px", // Start autoplay slightly before fully visible
        }
      );

      observer.observe(currentSectionRef);

      return () => {
        observer.unobserve(currentSectionRef);
      };
    }, [autoplayOnVisible, autoplayThreshold, isPlaying, autoplayAttempted, attemptAutoplay]);

    // Handle initial autoplay
    useEffect(() => {
      if (autoPlay && !autoplayAttempted) {
        // Small delay to ensure video is loaded
        const timer = setTimeout(() => {
          attemptAutoplay();
        }, 100);
        
        return () => clearTimeout(timer);
      }
    }, [autoPlay, autoplayAttempted, attemptAutoplay]);

    
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
        // Only set volume to 0.5 if not muted
        if (!muted) {
          videoRef.current.volume = 0.5;
          setVolume(0.5);
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
      console.log("Progress click, pos:", pos, "duration:", duration);
      const newTime = pos * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      // Set initial volume based on muted prop
      if (muted) {
        video.volume = 0;
        setVolume(0);
        video.muted = true;
      } else {
        video.volume = 0.5;
        setVolume(0.5);
      }

      const handleLoadedMetadata = () => {
        if (!isNaN(video.duration)) {
          setDuration(video.duration);
          console.log("Loaded data, duration:", video.duration);
        }
      };

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        console.log("Time update, currentTime:", video.currentTime);
      };

      const handlePlay = () => {
        setIsPlaying(true);
        // Only ensure volume is 0.5 when playing if not muted
        if (!muted) {
          video.volume = 0.5;
          setVolume(0.5);
        }
      };
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
    }, [muted]);

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
        ref={sectionRef}
        id={id}
        className={`${minHeight} ${backgroundColor} m-0 p-0 ${sectionClassName} ${className}`}
      >
        {showTopSpacer && <div className={topSpacerClassName}></div>}
        <div
          ref={ref as React.Ref<HTMLDivElement>}
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
                showControlsOverlay || !isPlaying ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Center Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="bg-black/60 hover:bg-black/80 text-white rounded-full p-4 shadow-lg backdrop-blur-md transition-all duration-200"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-8 pb-4">
                <div className="flex flex-col gap-3">
                  {/* Progress Bar on Top */}
                  <div
                    ref={progressBarRef}
                    className="h-1 bg-gray-700 rounded-full cursor-pointer relative"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="absolute inset-y-0 left-0 h-full bg-blue-500 rounded-full"
                      style={{
                        width: duration ? `${(currentTime / duration) * 100}%` : "0%",
                      }}
                    />
                  </div>

                  {/* Control Row Below */}
                  <div className="flex items-center justify-between text-white text-sm">
                    {/* Left Controls */}
                    <div className="flex items-center gap-4">
                      {/* Play/Pause */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        className="p-1 rounded hover:bg-white/10"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </button>

                      {/* Volume Icon */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        className="p-1 rounded hover:bg-white/10"
                        aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
                      >
                        {isMuted || volume === 0 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707a1 1 0 011.707.707v14a1 1 0 01-1.707.707L5.586 15zM12 12L18 6M6 6l12 12"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Volume Slider */}
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => {
                          e.stopPropagation();
                          const newVolume = parseFloat(e.target.value);
                          setVolume(newVolume);
                          if (videoRef.current) {
                            videoRef.current.volume = newVolume;
                            const newMuted = newVolume === 0;
                            videoRef.current.muted = newMuted;
                            setIsMuted(newMuted);
                          }
                        }}
                        className="w-24 h-1 accent-blue-500 bg-gray-400 rounded-full cursor-pointer"
                      />

                      {/* Timestamp */}
                      <div className="text-xs opacity-80">
                        {formatTime(currentTime)} / {formatTime(duration || 0)}
                      </div>
                    </div>

                    {/* Fullscreen */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullScreen();
                      }}
                      className="p-1 rounded hover:bg-white/10"
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
                  </div>
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
