"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingShape from "../../ui/floating-shape";
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt } from "react-icons/fa";

const IntroContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-white">
      {/* Background gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.06),transparent_50%)]" />
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          delay={0}
          duration={14}
          className="top-10 left-10 md:w-48 md:h-48 w-28 h-28 rounded-full bg-amber-300/30 blur-3xl"
        />
        <FloatingShape
          delay={4}
          duration={18}
          className="bottom-20 right-12 md:w-56 md:h-56 w-32 h-32 rounded-full bg-rose-300/25 blur-3xl"
        />
        <FloatingShape
          delay={8}
          duration={22}
          className="top-1/3 right-1/4 md:w-40 md:h-40 w-24 h-24 rounded-3xl bg-orange-200/30 blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-24 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Hero Section with Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6"
                style={{ fontFamily: "DM Serif Text, serif" }}
              >
                Let's Create
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600">
                  Something Amazing
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ready to bring your vision to life? We're here to help you every step of the way. Reach out and let's start your project today.
              </p>
              <a
                href="mailto:hello@originskh.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full font-semibold hover:from-amber-400 hover:to-rose-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/25"
              >
                <FaEnvelope size={18} />
                <span>Start Your Project</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </a>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                <Image
                  src="/studiospace1.png"
                  alt="Origins Studios Space"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating accent image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/eventspace1.png"
                  alt="Event Space"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Social Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-amber-200 transition-all duration-500"
            >
              <div className="h-32 relative overflow-hidden">
                <Image
                  src="/ORS_WEB-HIRING1.jpg"
                  alt="Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center text-amber-600">
                    <FaTelegramPlane size={18} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Social</h3>
                <div className="space-y-2">
                  <a href="https://t.me/originskh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors text-sm">
                    <FaTelegramPlane size={14} />
                    <span>Telegram</span>
                  </a>
                  <a href="https://web.facebook.com/originskh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors text-sm">
                    <FaFacebookF size={14} />
                    <span>Facebook</span>
                  </a>
                  <a href="https://instagram.com/originskh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors text-sm">
                    <FaInstagram size={14} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-rose-200 transition-all duration-500"
            >
              <div className="h-32 relative overflow-hidden">
                <Image
                  src="/studiospace2.jpg"
                  alt="Studio Space"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center text-rose-600">
                    <FaMapMarkerAlt size={18} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  No. 109E0 Street 494, Phsar Daeum Thkov, Chamkar Mon, Phnom Penh
                </p>
                <a 
                  href="https://maps.app.goo.gl/y4c7bSJRXQinG9Cd8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-rose-500 hover:text-rose-600 transition-colors text-sm"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-purple-200 transition-all duration-500"
            >
              <div className="h-32 relative overflow-hidden">
                <Image
                  src="/ORS_WEB-HIRING2.jpg"
                  alt="Contact"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center text-purple-600">
                    <FaPhone size={16} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                <div className="space-y-2">
                  <a href="tel:+85598880312" className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors text-sm">
                    <FaPhone size={14} />
                    <span>(+855) 98 880 312</span>
                  </a>
                  <a href="mailto:hello@originskh.com" className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors text-sm">
                    <FaEnvelope size={14} />
                    <span>info@originskh.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-emerald-200 transition-all duration-500"
            >
              <div className="h-32 relative overflow-hidden">
                <Image
                  src="/eventspace2.png"
                  alt="Working Hours"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center text-emerald-600">
                    <FaClock size={16} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Mon - Fri</span>
                    <span className="text-gray-900 font-medium">9AM - 6PM</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Saturday</span>
                    <span className="text-gray-900 font-medium">9AM - 1PM</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Sunday</span>
                    <span className="text-rose-500">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "DM Serif Text, serif" }}>
              Our Creative Space
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <Image
                  src="/studiospace3.jpg"
                  alt="Studio Space 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <Image
                  src="/studiospace4.png"
                  alt="Studio Space 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <Image
                  src="/eventspace3.png"
                  alt="Event Space 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <Image
                  src="/eventspace4.png"
                  alt="Event Space 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Services */}
            <div className="rounded-2xl bg-amber-500 border border-amber-600 p-6">
              <h4 className="text-gray-100 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-50"></span>
                Our Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-100">
                <li>• Motion Graphics & Animation</li>
                <li>• Web Development</li>
                <li>• Brand Identity Design</li>
                <li>• Video Production</li>
                <li>• Digital Marketing</li>
              </ul>
            </div>

            {/* Quick Response */}
            <div className="rounded-2xl bg-rose-500 border border-rose-600 p-6">
              <h4 className="text-gray-100 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-50"></span>
                Quick Response
              </h4>
              <p className="text-sm text-gray-100 leading-relaxed">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>

            {/* Book a Meeting */}
            <div className="rounded-2xl bg-purple-500 border border-purple-600 p-6">
              <h4 className="text-gray-100 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-50"></span>
                Book a Meeting
              </h4>
              <p className="text-sm text-gray-100 leading-relaxed mb-4">
                Schedule a free consultation to discuss your project needs.
              </p>
              <button className="flex items-center gap-2 text-gray-100 transition-colors text-sm">
                <FaCalendarAlt size={14} />
                <span>Schedule Now</span>
              </button>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-4">Ready to start your project?</p>
            <a
              href="mailto:info@originskh.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaEnvelope size={18} />
              <span>Get in Touch</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

IntroContactSection.displayName = "IntroContactSection";

export default IntroContactSection;

