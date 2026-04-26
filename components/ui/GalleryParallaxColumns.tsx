"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryParallaxColumnsProps {
    images?: string[];
    backgroundColor?: string;
    columnCount?: number;
}

const GalleryParallaxColumns: React.FC<GalleryParallaxColumnsProps> = ({
    images = [
        // Column 1 — 8 images
        "https://images.unsplash.com/photo-1773332611476-6ec2ba68049f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774270905958-86e7eaeae23d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775563623211-4ecef6718f1f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775385015053-3e4aad001e22?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775419044790-98d1f54699db?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775214593108-5d577e88d219?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774847897731-ad86ff58390b?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775013394343-fdf658742ed0?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        // Column 2 — 8 images
        "https://plus.unsplash.com/premium_photo-1683129807314-95150b5c3fb1?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774538537377-9646fa0ec25a?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774966961772-c73ad3a60b10?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775533222841-095c4e19ceaf?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775348437069-0f2d58a180ee?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774444487684-a796af0c2841?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774876189300-5ec712826e33?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        // Column 3 — 8 images
        "https://images.unsplash.com/photo-1774637777045-e7390fc657e8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1765003291278-495489d2d7fe?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774725801222-51a94a1f4719?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774637184972-6a12518f12f0?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775544265981-9db0ea58687f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1775315721849-69c9e9926c85?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1774333406492-2806c117fe59?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1762743412345-a31d94cd5a88?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
    ],
    backgroundColor = "#f5f5f4",
    columnCount = 3,
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -320]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 280]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -240]);

    const imagesPerColumn = Math.ceil(images.length / columnCount);
    const columns = [
        images.slice(0, imagesPerColumn),
        images.slice(imagesPerColumn, imagesPerColumn * 2),
        images.slice(imagesPerColumn * 2, imagesPerColumn * 3),
    ];

    const transforms = [y1, y2, y3];

    const gridColsClass = {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
    }[columnCount] || "grid-cols-3";

    return (
        <div
            ref={containerRef}
            className="h-[200vh] overflow-hidden flex items-center justify-center min-h-screen"
            style={{ backgroundColor }}
        >
            <div className={`grid ${gridColsClass} gap-6 w-full max-w-7xl px-4 md:px-12 -mt-40`}>
                {columns.map((columnImages, colIndex) => (
                    <motion.div
                        key={colIndex}
                        style={{ y: transforms[colIndex] }}
                        className={`flex flex-col gap-6 ${colIndex === 1 ? "-mt-32" : ""}`}
                    >
                        {columnImages.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-[3/4] overflow-hidden rounded-sm group"
                            >
                                <img
                                    src={src}
                                    className="object-cover w-full h-full transition-all duration-700 scale-100 group-hover:scale-105"
                                    style={{ filter: "brightness(0.88)" }}
                                    alt=""
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
                                />
                                <div className="absolute bottom-4 left-4 text-white text-[11px] font-mono tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {String(colIndex + 1).padStart(2, "0")}.{String(i + 1).padStart(2, "0")}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default GalleryParallaxColumns;
