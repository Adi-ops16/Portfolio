"use client";

import { useEffect, useRef } from "react";

export const BackgroundEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Balancd particle count for beauty & performance
        const particles = [];
        const numParticles = 75; // Increased from 35 back to closer to 100

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.4 + 0.2;
                this.color = Math.random() > 0.5 ? '#8A2BE2' : '#00BFFF';

                this.targetX = width / 2 + (Math.random() - 0.5) * width * 0.6;
                this.targetY = height / 2 + (Math.random() - 0.5) * height * 0.6;
            }

            update() {
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;

                this.speedX += dx * 0.00005;
                this.speedY += dy * 0.00005;

                const maxSpeed = 0.5;
                const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
                if (speed > maxSpeed) {
                    this.speedX = (this.speedX / speed) * maxSpeed;
                    this.speedY = (this.speedY / speed) * maxSpeed;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                if (Math.random() < 0.001) {
                    this.targetX = width / 2 + (Math.random() - 0.5) * width * 0.6;
                    this.targetY = height / 2 + (Math.random() - 0.5) * height * 0.6;
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Restored glow effect so it looks beautiful like before
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        // Gradient orbs for ambient background
        const orbs = [];
        const numOrbs = 2;

        class Orb {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 200 + 150;
                this.speedX = (Math.random() - 0.5) * 0.15;
                this.speedY = (Math.random() - 0.5) * 0.15;
                this.hue = Math.random() * 60 + 260;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < -this.radius || this.x > width + this.radius) this.speedX *= -1;
                if (this.y < -this.radius || this.y > height + this.radius) this.speedY *= -1;
            }

            draw() {
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius
                );
                gradient.addColorStop(0, `hsla(${this.hue}, 80%, 60%, 0.08)`);
                gradient.addColorStop(1, `hsla(${this.hue}, 80%, 60%, 0)`);

                ctx.globalAlpha = 1;
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);
            }
        }

        for (let i = 0; i < numOrbs; i++) {
            orbs.push(new Orb());
        }

        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = 1;

            // Draw gradient orbs
            orbs.forEach(orb => {
                orb.update();
                orb.draw();
            });

            // Draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections using optimized squared distance math (fixes lag)
            ctx.globalAlpha = 0.15;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;

                    // Compare squared distance (6400 = 80px) to avoid computing Math.sqrt on every check
                    const sqDist = dx * dx + dy * dy;
                    if (sqDist < 6400) {
                        const dist = Math.sqrt(sqDist);
                        ctx.beginPath();
                        ctx.strokeStyle = p1.color;
                        ctx.lineWidth = (80 - dist) / 80;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        // Debounced resize handler
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;

                particles.forEach(p => {
                    p.targetX = width / 2 + (Math.random() - 0.5) * width * 0.6;
                    p.targetY = height / 2 + (Math.random() - 0.5) * height * 0.6;
                });
            }, 200);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{
                opacity: 0.5,
                mixBlendMode: "screen",
            }}
        />
    );
};
