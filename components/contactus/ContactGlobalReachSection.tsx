"use client";

import React, { memo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const markers = [
    { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
    { markerOffset: -15, name: "California", coordinates: [-118.2437, 34.0522] },
    { markerOffset: -15, name: "London", coordinates: [-0.1276, 51.5074] },
    { markerOffset: -15, name: "Madrid", coordinates: [-3.7038, 40.4168] },
    { markerOffset: -15, name: "New Delhi", coordinates: [77.209, 28.6139] },
    { markerOffset: -15, name: "Sydney", coordinates: [151.2093, -33.8688] },
    { markerOffset: -15, name: "Dubai", coordinates: [55.2708, 25.2048] },
    { markerOffset: -15, name: "Brazil", coordinates: [-47.9292, -15.7801] },
];

const MapChart = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
            <ComposableMap
                projectionConfig={{
                    scale: 140,
                    center: [0, 20]
                }}
                width={800}
                height={400}
                style={{ width: "100%", height: "auto" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#D1D5DB"
                                stroke="#F3F4F6"
                                strokeWidth={0.5}
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none", fill: "#9CA3AF" },
                                    pressed: { outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>

                {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates as [number, number]}>
                        {/* The pulsing ring */}
                        <circle r={12} fill="#EC4899" opacity={0.3} className="animate-ping" style={{ transformOrigin: "center", animationDuration: "2s" }} />
                        {/* The outer static ring */}
                        <circle r={8} fill="#EC4899" opacity={0.4} />
                        {/* The inner solid dot */}
                        <circle r={3} fill="#BE185D" />
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

const MemoizedMapChart = memo(MapChart);

export function ContactGlobalReachSection() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 font-serif">
                        Customers We Serve Across the Globe
                    </h2>
                    <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
                        From North America to Europe and Asia, we are proud to provide voice AI services to innovative companies worldwide.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <MemoizedMapChart />
                </motion.div>
            </div>
        </section>
    );
}
