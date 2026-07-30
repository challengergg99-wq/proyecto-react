import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once at app startup to avoid plugin initialization order issues
gsap.registerPlugin(ScrollTrigger);

export default gsap;
