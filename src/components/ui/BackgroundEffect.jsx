"use client";

import { useEffect, useRef } from "react";

export const BackgroundEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Reduced particle system for smoother, ambient movement
        const particles = [];
        const numParticles = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.4 + 0.2;
                this.color = Math.random() > 0.5 ? '#8A2BE2' : '#00BFFF';

                // Gentle drift towards center
                this.targetX = width / 2 + (Math.random() - 0.5) * width * 0.6;
                this.targetY = height / 2 + (Math.random() - 0.5) * height * 0.6;
            }

            update() {
                // Very gentle drift towards target position
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;

                this.speedX += dx * 0.00005;
                this.speedY += dy * 0.00005;

                // Limit speed for smooth movement
                const maxSpeed = 0.5;
                const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
                if (speed > maxSpeed) {
                    this.speedX = (this.speedX / speed) * maxSpeed;
                    this.speedY = (this.speedY / speed) * maxSpeed;
                }

                // Regular movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                // Occasionally change target for natural movement
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

                // Subtle glow
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        // Gradient orbs for ambient background
        const orbs = [];
        const numOrbs = 3;

        class Orb {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 200 + 150;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.hue = Math.random() * 60 + 260;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
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

        // Animation loop
        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = 1;

            // Draw gradient orbs (background layer)
            orbs.forEach(orb => {
                orb.update();
                orb.draw();
            });

            // Draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw subtle connections between very close particles
            ctx.globalAlpha = 0.15;
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 80) {
                        ctx.beginPath();
                        ctx.strokeStyle = p1.color;
                        ctx.lineWidth = (80 - dist) / 80;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Update particle targets after resize
            particles.forEach(p => {
                p.targetX = width / 2 + (Math.random() - 0.5) * width * 0.6;
                p.targetY = height / 2 + (Math.random() - 0.5) * height * 0.6;
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
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
