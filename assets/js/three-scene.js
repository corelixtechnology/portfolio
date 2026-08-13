/**
 * Three.js 3D Interactive WebGL Engine for Keerthivasan Portfolio
 * Features:
 * - 3D Universe Background (Infinite Cyber Grid, Nebula Starfield, Floating Tech Polyhedra)
 * - Interactive 3D Hero Model (Hologram Cyber Terminal, Floating Core, Orbiting Tech Rings)
 * - Scroll-driven 3D Camera Waypoint Choreography
 * - Free Orbit / 360° Inspection Mode
 * - 3D Themes: Cyber Neon, Matrix Emerald, Deep Cosmos, Solar Sunset
 * - Explode / Deconstruct 3D Model Mode
 * - Wireframe Mode Toggle
 * - Spatial Web Audio Synthesizer (Zero-file sound FX)
 */

class Portfolio3DUniverse {
    constructor() {
        this.container = document.getElementById('bg-canvas');
        if (!this.container) return;

        // Configuration & State
        this.state = {
            theme: 'spiderman', // 'spiderman' | 'venom' | 'ironspider' | 'cyber' | 'matrix' | 'cosmos'
            wireframe: false,
            freeOrbit: false,
            exploded: false,
            soundEnabled: true,
            isDark: !document.body.classList.contains('light-theme'),
            mouseX: 0,
            mouseY: 0,
            targetMouseX: 0,
            targetMouseY: 0,
            scrollProgress: 0,
            isDragging: false,
            previousMousePosition: { x: 0, y: 0 }
        };

        // High-Impact Theme Palettes (Spider-Verse & Cyber Suite)
        this.themes = {
            spiderman: {
                primary: 0xff0038,   // Spider Scarlet Crimson Red
                secondary: 0x0066ff, // Spider Suit Web Blue
                accent: 0xffd700,    // Spider-Sense Gold
                grid: 0x550011,      // Deep Spider Crimson Grid
                ambient: 0x080307,   // Deep Spider Stealth Ambient
                glow: 0xff0038
            },
            venom: {
                primary: 0x9900ff,   // Symbiote Purple
                secondary: 0xff007f, // Plasma Magenta
                accent: 0x00ffff,    // Electric Cyan
                grid: 0x3a005c,
                ambient: 0x05010a,
                glow: 0x9900ff
            },
            ironspider: {
                primary: 0xee0000,   // Stark Metallic Red
                secondary: 0xffb700, // Stark Gold
                accent: 0x00d4ff,    // Arc Reactor Blue
                grid: 0x660000,
                ambient: 0x0c0202,
                glow: 0xffb700
            },
            cyber: {
                primary: 0x6366f1,   // Cyber Indigo
                secondary: 0x00f2fe, // Neon Cyan
                accent: 0xec4899,    // Neon Pink
                grid: 0x223068,
                ambient: 0x050814,
                glow: 0x00f2fe
            },
            matrix: {
                primary: 0x10b981,   // Emerald Green
                secondary: 0x00ff88, // Neon Cyber Green
                accent: 0x34d399,    // Mint
                grid: 0x064e3b,
                ambient: 0x021a12,
                glow: 0x00ff88
            },
            cosmos: {
                primary: 0x8a2be2,   // Deep Violet
                secondary: 0xf43f5e, // Nebula Rose
                accent: 0xc084fc,    // Purple Glow
                grid: 0x3b0764,
                ambient: 0x0f041c,
                glow: 0xf43f5e
            }
        };

        // Camera Waypoints for Each Section
        this.waypoints = [
            { id: 'home',          pos: { x: 0, y: 0, z: 28 },      rot: { x: 0.05, y: 0, z: 0 } },
            { id: 'about',         pos: { x: -8, y: -4, z: 22 },    rot: { x: 0.1, y: 0.35, z: -0.05 } },
            { id: 'skills',        pos: { x: 9, y: -8, z: 24 },     rot: { x: -0.1, y: -0.4, z: 0.08 } },
            { id: 'qualification', pos: { x: -6, y: -13, z: 20 },   rot: { x: 0.15, y: 0.25, z: -0.05 } },
            { id: 'services',      pos: { x: 8, y: -18, z: 22 },    rot: { x: -0.12, y: -0.3, z: 0.05 } },
            { id: 'work',          pos: { x: 0, y: -24, z: 18 },    rot: { x: 0.2, y: 0, z: 0 } },
            { id: 'testimonials',  pos: { x: -7, y: -30, z: 23 },   rot: { x: 0.08, y: 0.3, z: -0.06 } },
            { id: 'contact',       pos: { x: 0, y: -36, z: 25 },    rot: { x: 0.05, y: 0, z: 0 } }
        ];

        this.init();
    }

    init() {
        this.initThree();
        this.createEnvironment();
        this.createFloatingGeometries();
        this.createHero3DModel();
        this.createWebConstellation();
        this.createStarfield();
        this.initAudioSynthesizer();
        this.setupEvents();
        this.setupHUDControls();
        this.setTheme('spiderman');
        this.animate();
    }

    /*================ THREE.JS SETUP ================*/
    initThree() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(this.themes[this.state.theme].ambient, 0.018);

        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 28);
        this.targetCameraPos = new THREE.Vector3(0, 0, 28);
        this.targetCameraRot = new THREE.Euler(0.05, 0, 0);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.container,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;

        // Lighting System
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(this.ambientLight);

        this.dirLight1 = new THREE.DirectionalLight(this.themes[this.state.theme].primary, 2.2);
        this.dirLight1.position.set(15, 20, 15);
        this.scene.add(this.dirLight1);

        this.dirLight2 = new THREE.DirectionalLight(this.themes[this.state.theme].secondary, 1.8);
        this.dirLight2.position.set(-15, -10, 10);
        this.scene.add(this.dirLight2);

        this.pointLightHero = new THREE.PointLight(this.themes[this.state.theme].accent, 3, 30);
        this.pointLightHero.position.set(0, 2, 8);
        this.scene.add(this.pointLightHero);
    }

    /*================ 3D CYBER GRID & ENVIRONMENT ================*/
    createEnvironment() {
        this.envGroup = new THREE.Group();

        // Infinite 3D Cyber Grid Floor
        const gridHelper = new THREE.GridHelper(180, 70, this.themes[this.state.theme].secondary, this.themes[this.state.theme].grid);
        gridHelper.position.y = -18;
        gridHelper.material.opacity = 0.45;
        gridHelper.material.transparent = true;
        this.gridFloor = gridHelper;
        this.envGroup.add(gridHelper);

        // Ceiling Cyber Grid (Subtle inverted canopy)
        const ceilingGrid = new THREE.GridHelper(180, 70, this.themes[this.state.theme].primary, this.themes[this.state.theme].grid);
        ceilingGrid.position.y = 26;
        ceilingGrid.material.opacity = 0.2;
        ceilingGrid.material.transparent = true;
        this.ceilingGrid = ceilingGrid;
        this.envGroup.add(ceilingGrid);

        // Horizon Glowing Energy Ring
        const ringGeo = new THREE.TorusGeometry(55, 0.4, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({
            color: this.themes[this.state.theme].secondary,
            transparent: true,
            opacity: 0.35,
            wireframe: true
        });
        this.horizonRing = new THREE.Mesh(ringGeo, ringMat);
        this.horizonRing.rotation.x = Math.PI / 2;
        this.horizonRing.position.y = -17.5;
        this.envGroup.add(this.horizonRing);

        this.scene.add(this.envGroup);
    }

    /*================ DYNAMIC 3D SPIDER WEB CONSTELLATION ================*/
    createWebConstellation() {
        this.webGroup = new THREE.Group();
        const nodeCount = 45;
        this.webNodes = [];
        const theme = this.themes[this.state.theme];

        // Create 3D Web Node Points distributed down the page
        const geo = new THREE.SphereGeometry(0.12, 8, 8);
        const mat = new THREE.MeshBasicMaterial({
            color: theme.secondary,
            transparent: true,
            opacity: 0.95
        });

        for (let i = 0; i < nodeCount; i++) {
            const mesh = new THREE.Mesh(geo, mat.clone());
            mesh.position.set(
                (Math.random() - 0.5) * 40,
                15 - (i * 1.1) + (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 22
            );
            this.webGroup.add(mesh);
            this.webNodes.push({
                mesh: mesh,
                velocity: new THREE.Vector3((Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.015),
                basePos: mesh.position.clone()
            });
        }

        // Web Line Connections
        const maxLines = 100;
        const lineGeo = new THREE.BufferGeometry();
        const linePositions = new Float32Array(maxLines * 6);
        lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

        this.webLinesMat = new THREE.LineBasicMaterial({
            color: theme.secondary,
            transparent: true,
            opacity: 0.45,
            linewidth: 1.5
        });

        this.webLinesMesh = new THREE.LineSegments(lineGeo, this.webLinesMat);
        this.webGroup.add(this.webLinesMesh);

        this.scene.add(this.webGroup);
    }

    /*================ FLOATING 3D TECH POLYHEDRA ================*/
    createFloatingGeometries() {
        this.floatingGroup = new THREE.Group();
        this.floatingObjects = [];

        const geometries = [
            new THREE.IcosahedronGeometry(1.4, 0),
            new THREE.OctahedronGeometry(1.2, 0),
            new THREE.TetrahedronGeometry(1.3, 0),
            new THREE.TorusGeometry(1.1, 0.35, 12, 28),
            new THREE.DodecahedronGeometry(1.2, 0),
            new THREE.TorusKnotGeometry(0.9, 0.28, 64, 12)
        ];

        const theme = this.themes[this.state.theme];
        const colors = [theme.primary, theme.secondary, theme.accent];

        // Create 28 floating tech objects distributed in 3D depth across the website scroll path
        for (let i = 0; i < 28; i++) {
            const geo = geometries[i % geometries.length];
            const color = colors[i % colors.length];

            const mat = new THREE.MeshStandardMaterial({
                color: color,
                wireframe: (i % 2 === 0),
                roughness: 0.2,
                metalness: 0.85,
                emissive: color,
                emissiveIntensity: 0.35,
                transparent: true,
                opacity: 0.85
            });

            const mesh = new THREE.Mesh(geo, mat);

            // Spread vertically across y = 10 to -45 (matching page scroll depth)
            mesh.position.x = (Math.random() - 0.5) * 45;
            mesh.position.y = 12 - (i * 2.2) + (Math.random() - 0.5) * 5;
            mesh.position.z = (Math.random() - 0.5) * 25 - 2;

            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;

            const scale = 0.5 + Math.random() * 0.9;
            mesh.scale.set(scale, scale, scale);

            const speed = {
                rotX: (Math.random() - 0.5) * 0.02,
                rotY: (Math.random() - 0.5) * 0.02,
                rotZ: (Math.random() - 0.5) * 0.01,
                floatSpeed: 0.5 + Math.random() * 1.5,
                floatOffset: Math.random() * Math.PI * 2,
                initialY: mesh.position.y
            };

            this.floatingObjects.push({ mesh, speed, mat });
            this.floatingGroup.add(mesh);
        }

        this.scene.add(this.floatingGroup);
    }

    /*================ INTERACTIVE 3D SPIDER EMBLEM & HERO MODEL ================*/
    createHero3DModel() {
        this.heroModelGroup = new THREE.Group();
        this.heroModelGroup.position.set(0, 0, 6);
        this.heroParts = [];

        const theme = this.themes[this.state.theme];

        // 1. Futuristic Holographic Base Pedestal
        const baseGeo = new THREE.CylinderGeometry(3.5, 4.2, 0.4, 32);
        const baseMat = new THREE.MeshStandardMaterial({
            color: theme.primary,
            metalness: 0.9,
            roughness: 0.2,
            wireframe: this.state.wireframe,
            emissive: theme.primary,
            emissiveIntensity: 0.4
        });
        const baseMesh = new THREE.Mesh(baseGeo, baseMat);
        baseMesh.position.y = -3;
        this.heroModelGroup.add(baseMesh);
        this.heroParts.push({ mesh: baseMesh, defaultPos: new THREE.Vector3(0, -3, 0), explodeDir: new THREE.Vector3(0, -3, 0) });

        // 2. Glowing Base Neon Rings
        const neonRingGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 64);
        const neonRingMat = new THREE.MeshBasicMaterial({ color: theme.secondary });
        const neonRing = new THREE.Mesh(neonRingGeo, neonRingMat);
        neonRing.rotation.x = Math.PI / 2;
        neonRing.position.y = -2.75;
        this.heroModelGroup.add(neonRing);
        this.heroParts.push({ mesh: neonRing, defaultPos: new THREE.Vector3(0, -2.75, 0), explodeDir: new THREE.Vector3(0, -3.5, 0) });

        // 3. Central 3D SPIDER EMBLEM CORE (Metallic Spider Body + Glowing Eyes)
        this.spiderCoreGroup = new THREE.Group();

        // Spider Thorax
        const spiderThoraxGeo = new THREE.OctahedronGeometry(1.4, 2);
        const spiderThoraxMat = new THREE.MeshStandardMaterial({
            color: theme.primary,
            metalness: 0.95,
            roughness: 0.1,
            wireframe: true,
            emissive: theme.primary,
            emissiveIntensity: 0.7
        });
        this.quantumCore = new THREE.Mesh(spiderThoraxGeo, spiderThoraxMat);
        this.spiderCoreGroup.add(this.quantumCore);

        // Inner Glowing Spider Arc Reactor
        const spiderCoreGeo = new THREE.IcosahedronGeometry(0.8, 1);
        const spiderCoreMat = new THREE.MeshStandardMaterial({
            color: theme.secondary,
            metalness: 0.8,
            roughness: 0.2,
            emissive: theme.secondary,
            emissiveIntensity: 1.2
        });
        this.innerCrystal = new THREE.Mesh(spiderCoreGeo, spiderCoreMat);
        this.spiderCoreGroup.add(this.innerCrystal);

        // Spider Glowing Eye Visors (Left & Right)
        const eyeGeo = new THREE.ConeGeometry(0.25, 0.6, 4);
        const eyeMat = new THREE.MeshBasicMaterial({ color: theme.accent });

        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.rotation.z = -Math.PI / 3;
        leftEye.position.set(-0.5, 0.4, 0.9);
        this.spiderCoreGroup.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.rotation.z = Math.PI / 3;
        rightEye.position.set(0.5, 0.4, 0.9);
        this.spiderCoreGroup.add(rightEye);

        // 8 Holographic Cyber Spider Legs
        this.spiderLegs = [];
        for (let i = 0; i < 8; i++) {
            const legGroup = new THREE.Group();
            const side = i < 4 ? -1 : 1;
            const indexOnSide = i % 4;

            const legMat = new THREE.MeshStandardMaterial({
                color: theme.secondary,
                emissive: theme.secondary,
                emissiveIntensity: 0.6,
                wireframe: true
            });

            // Leg Segment 1
            const seg1Geo = new THREE.CylinderGeometry(0.05, 0.03, 1.3, 8);
            const seg1 = new THREE.Mesh(seg1Geo, legMat);
            seg1.position.y = 0.65;
            seg1.rotation.z = side * (0.4 + indexOnSide * 0.2);
            legGroup.add(seg1);

            // Leg Segment 2 (Knee angle)
            const seg2Geo = new THREE.CylinderGeometry(0.03, 0.015, 1.1, 8);
            const seg2 = new THREE.Mesh(seg2Geo, legMat);
            seg2.position.set(side * 0.5, 1.2, 0);
            seg2.rotation.z = side * (-0.7 - indexOnSide * 0.15);
            legGroup.add(seg2);

            legGroup.position.set(side * 0.7, (indexOnSide - 1.5) * 0.35, 0);
            legGroup.rotation.y = (indexOnSide - 1.5) * 0.25;
            this.spiderCoreGroup.add(legGroup);
            this.spiderLegs.push(legGroup);
        }

        this.heroModelGroup.add(this.spiderCoreGroup);
        this.heroParts.push({ mesh: this.spiderCoreGroup, defaultPos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(0, 2.5, 0) });

        // 4. Orbiting Stark Tech Web Rings
        this.ring1 = this.createOrbitRing(2.8, 0.05, theme.primary, 0.4);
        this.ring1.rotation.x = 0.5;
        this.heroModelGroup.add(this.ring1);
        this.heroParts.push({ mesh: this.ring1, defaultPos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(2.5, 1.5, 1.5) });

        this.ring2 = this.createOrbitRing(3.4, 0.05, theme.secondary, -0.6);
        this.ring2.rotation.y = 0.7;
        this.heroModelGroup.add(this.ring2);
        this.heroParts.push({ mesh: this.ring2, defaultPos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(-2.5, -1.5, 1.5) });

        this.ring3 = this.createOrbitRing(4.0, 0.06, theme.accent, 0.8);
        this.ring3.rotation.z = 0.3;
        this.heroModelGroup.add(this.ring3);
        this.heroParts.push({ mesh: this.ring3, defaultPos: new THREE.Vector3(0, 0, 0), explodeDir: new THREE.Vector3(0, 2.5, -2) });

        // 5. Tech Satellites / Web Shooter Nodes (Full-Stack, React, Java, UI/UX)
        this.satellites = [];
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const satGroup = new THREE.Group();

            const satGeo = new THREE.OctahedronGeometry(0.45, 0);
            const satMat = new THREE.MeshStandardMaterial({
                color: (i % 2 === 0) ? theme.secondary : theme.primary,
                wireframe: (i % 2 === 1),
                metalness: 0.9,
                roughness: 0.2,
                emissive: (i % 2 === 0) ? theme.secondary : theme.primary,
                emissiveIntensity: 0.7
            });
            const satMesh = new THREE.Mesh(satGeo, satMat);
            satGroup.add(satMesh);

            satGroup.position.set(Math.cos(angle) * 3.6, Math.sin(angle) * 0.8, Math.sin(angle) * 3.6);
            this.heroModelGroup.add(satGroup);
            this.satellites.push({ group: satGroup, baseAngle: angle, speed: 0.015 * (i % 2 === 0 ? 1 : -1) });
            this.heroParts.push({ mesh: satGroup, defaultPos: satGroup.position.clone(), explodeDir: satGroup.position.clone().normalize().multiplyScalar(3.5) });
        }

        // 6. Holographic Floating Web Screen Panels
        this.screens = [];
        for (let i = 0; i < 3; i++) {
            const screenGeo = new THREE.PlaneGeometry(1.6, 1.0);
            const screenMat = new THREE.MeshBasicMaterial({
                color: theme.secondary,
                wireframe: true,
                transparent: true,
                opacity: 0.7,
                side: THREE.DoubleSide
            });
            const screen = new THREE.Mesh(screenGeo, screenMat);
            const angle = (i / 3) * Math.PI * 2;
            screen.position.set(Math.cos(angle) * 2.8, 1.8, Math.sin(angle) * 2.8);
            screen.lookAt(0, 1.8, 0);
            screen.rotation.y += Math.PI;
            this.heroModelGroup.add(screen);
            this.screens.push(screen);
            this.heroParts.push({ mesh: screen, defaultPos: screen.position.clone(), explodeDir: screen.position.clone().normalize().multiplyScalar(3.0) });
        }

        this.scene.add(this.heroModelGroup);
    }

    createOrbitRing(radius, tube, color, rotSpeed) {
        const geo = new THREE.TorusGeometry(radius, tube, 16, 80);
        const mat = new THREE.MeshStandardMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.4,
            wireframe: this.state.wireframe,
            metalness: 0.85,
            roughness: 0.2
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.userData = { rotSpeed: rotSpeed };
        return mesh;
    }

    /*================ 3D STARFIELD / NEBULA PARTICLES ================*/
    createStarfield() {
        const starGeo = new THREE.BufferGeometry();
        const starCount = 1200;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);

        const theme = this.themes[this.state.theme];
        const c1 = new THREE.Color(theme.primary);
        const c2 = new THREE.Color(theme.secondary);
        const c3 = new THREE.Color(theme.accent);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 160;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

            const chosenColor = (i % 3 === 0) ? c1 : (i % 3 === 1 ? c2 : c3);
            colors[i * 3] = chosenColor.r;
            colors[i * 3 + 1] = chosenColor.g;
            colors[i * 3 + 2] = chosenColor.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const starMat = new THREE.PointsMaterial({
            size: 0.45,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
        });

        this.starfield = new THREE.Points(starGeo, starMat);
        this.scene.add(this.starfield);
    }

    /*================ PROCEDURAL WEB AUDIO SYNTHESIZER ================*/
    initAudioSynthesizer() {
        this.audioCtx = null;
    }

    ensureAudioContext() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.08) {
        if (!this.state.soundEnabled) return;
        try {
            this.ensureAudioContext();
            if (!this.audioCtx) return;

            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.audioCtx.currentTime + duration);

            gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            // Audio policy fallback
        }
    }

    playSweep(freqStart, freqEnd, duration = 0.25) {
        if (!this.state.soundEnabled) return;
        try {
            this.ensureAudioContext();
            if (!this.audioCtx) return;

            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freqStart, this.audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freqEnd, this.audioCtx.currentTime + duration);

            gain.gain.setValueAtTime(0.07, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            // Audio policy fallback
        }
    }

    /*================ EVENT LISTENERS ================*/
    setupEvents() {
        // Window Resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Mouse Move for Parallax
        window.addEventListener('mousemove', (e) => {
            this.state.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            this.state.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;

            if (this.state.isDragging && this.state.freeOrbit) {
                const deltaX = e.clientX - this.state.previousMousePosition.x;
                const deltaY = e.clientY - this.state.previousMousePosition.y;

                this.scene.rotation.y += deltaX * 0.005;
                this.scene.rotation.x += deltaY * 0.005;

                this.state.previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        // Mouse Drag on Canvas for 360 rotation
        this.container.addEventListener('mousedown', (e) => {
            this.state.isDragging = true;
            this.state.previousMousePosition = { x: e.clientX, y: e.clientY };
            this.playTone(440, 'sine', 0.1, 0.04);
        });

        window.addEventListener('mouseup', () => {
            this.state.isDragging = false;
        });

        // Touch Interaction for Mobile 3D Drag
        this.container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.state.isDragging = true;
                this.state.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (this.state.isDragging && e.touches.length === 1) {
                const touch = e.touches[0];
                const deltaX = touch.clientX - this.state.previousMousePosition.x;
                const deltaY = touch.clientY - this.state.previousMousePosition.y;

                if (this.heroModelGroup) {
                    this.heroModelGroup.rotation.y += deltaX * 0.008;
                    this.heroModelGroup.rotation.x += deltaY * 0.008;
                }

                this.state.previousMousePosition = { x: touch.clientX, y: touch.clientY };
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.state.isDragging = false;
        });

        // Scroll Integration with 3D Spatial Waypoints
        window.addEventListener('scroll', () => {
            this.updateScrollCamera();
        }, { passive: true });

        // Synchronize with Light/Dark Theme toggle button
        const themeBtn = document.getElementById('theme-button');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                setTimeout(() => {
                    this.state.isDark = !document.body.classList.contains('light-theme');
                    this.updateThemeLighting();
                }, 50);
            });
        }
    }

    /*================ SCROLL-DRIVEN CAMERA CHOREOGRAPHY ================*/
    updateScrollCamera() {
        if (this.state.freeOrbit) return;

        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, scrollY / (maxScroll || 1)));
        this.state.scrollProgress = progress;

        // Calculate which section waypoint is active
        const sections = this.waypoints.map(wp => {
            const el = document.getElementById(wp.id);
            if (!el) return { ...wp, top: 0, height: 0 };
            const rect = el.getBoundingClientRect();
            const top = rect.top + scrollY;
            return { ...wp, top, height: el.offsetHeight };
        });

        // Find current section interval
        let activeIdx = 0;
        for (let i = 0; i < sections.length; i++) {
            if (scrollY >= sections[i].top - window.innerHeight * 0.4) {
                activeIdx = i;
            }
        }

        const nextIdx = Math.min(sections.length - 1, activeIdx + 1);
        const currentSec = sections[activeIdx];
        const nextSec = sections[nextIdx];

        let localProgress = 0;
        if (nextIdx > activeIdx && nextSec.top > currentSec.top) {
            localProgress = Math.max(0, Math.min(1, (scrollY - currentSec.top) / (nextSec.top - currentSec.top)));
        }

        // Interpolate Camera Position & Rotation smoothly
        const curWp = this.waypoints[activeIdx];
        const nxtWp = this.waypoints[nextIdx];

        this.targetCameraPos.x = THREE.MathUtils.lerp(curWp.pos.x, nxtWp.pos.x, localProgress);
        this.targetCameraPos.y = THREE.MathUtils.lerp(curWp.pos.y, nxtWp.pos.y, localProgress);
        this.targetCameraPos.z = THREE.MathUtils.lerp(curWp.pos.z, nxtWp.pos.z, localProgress);

        this.targetCameraRot.x = THREE.MathUtils.lerp(curWp.rot.x, nxtWp.rot.x, localProgress);
        this.targetCameraRot.y = THREE.MathUtils.lerp(curWp.rot.y, nxtWp.rot.y, localProgress);
        this.targetCameraRot.z = THREE.MathUtils.lerp(curWp.rot.z, nxtWp.rot.z, localProgress);
    }

    /*================ 3D HUD CONTROLS & INTERACTIVE MODES ================*/
    setupHUDControls() {
        // Theme Selector Buttons
        const themeBtns = document.querySelectorAll('[data-3d-theme]');
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const themeName = btn.dataset['3dTheme'];
                this.setTheme(themeName);
                themeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.playSweep(300, 800, 0.2);
            });
        });

        // Wireframe Toggle
        const wireframeBtn = document.getElementById('toggle-wireframe');
        if (wireframeBtn) {
            wireframeBtn.addEventListener('click', () => {
                this.state.wireframe = !this.state.wireframe;
                wireframeBtn.classList.toggle('active', this.state.wireframe);
                this.toggleWireframe(this.state.wireframe);
                this.playTone(this.state.wireframe ? 700 : 400, 'sine', 0.15);
            });
        }

        // Free Orbit Mode Toggle
        const orbitBtn = document.getElementById('toggle-orbit');
        if (orbitBtn) {
            orbitBtn.addEventListener('click', () => {
                this.state.freeOrbit = !this.state.freeOrbit;
                orbitBtn.classList.toggle('active', this.state.freeOrbit);
                if (!this.state.freeOrbit) {
                    this.scene.rotation.set(0, 0, 0);
                    this.updateScrollCamera();
                }
                this.playTone(this.state.freeOrbit ? 880 : 330, 'triangle', 0.2);
            });
        }

        // Explode / Deconstruct Model Mode Toggle
        const explodeBtn = document.getElementById('toggle-explode');
        if (explodeBtn) {
            explodeBtn.addEventListener('click', () => {
                this.state.exploded = !this.state.exploded;
                explodeBtn.classList.toggle('active', this.state.exploded);
                this.toggleExplode(this.state.exploded);
                this.playSweep(this.state.exploded ? 200 : 900, this.state.exploded ? 900 : 200, 0.35);
            });
        }

        // Sound Toggle
        const soundBtn = document.getElementById('toggle-sound');
        if (soundBtn) {
            soundBtn.addEventListener('click', () => {
                this.state.soundEnabled = !this.state.soundEnabled;
                soundBtn.classList.toggle('active', this.state.soundEnabled);
                const icon = soundBtn.querySelector('i');
                if (icon) {
                    icon.className = this.state.soundEnabled ? 'bx bx-volume-full' : 'bx bx-volume-mute';
                }
                if (this.state.soundEnabled) {
                    this.playSweep(440, 880, 0.25);
                }
            });
        }

        // Reset 3D View Button
        const resetBtn = document.getElementById('reset-3d-view');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.state.freeOrbit = false;
                if (orbitBtn) orbitBtn.classList.remove('active');
                this.scene.rotation.set(0, 0, 0);
                if (this.heroModelGroup) this.heroModelGroup.rotation.set(0, 0, 0);
                this.camera.position.set(0, 0, 28);
                this.updateScrollCamera();
                this.playSweep(600, 300, 0.2);
            });
        }
    }

    /*================ THEME & SHADER SWITCHING ================*/
    setTheme(themeName) {
        if (!this.themes[themeName]) return;
        this.state.theme = themeName;
        const theme = this.themes[themeName];

        // Update body class for CSS theme targeting
        document.body.classList.remove('theme-spiderman', 'theme-venom', 'theme-ironspider', 'theme-cyber', 'theme-matrix', 'theme-cosmos');
        document.body.classList.add(`theme-${themeName}`);

        // Update Fog & Ambient
        this.scene.fog.color.setHex(theme.ambient);

        // Update Directional Lights
        this.dirLight1.color.setHex(theme.primary);
        this.dirLight2.color.setHex(theme.secondary);
        this.pointLightHero.color.setHex(theme.accent);

        // Update Grids
        if (this.gridFloor) {
            this.gridFloor.material.color.setHex(theme.secondary);
        }
        if (this.ceilingGrid) {
            this.ceilingGrid.material.color.setHex(theme.primary);
        }
        if (this.horizonRing) {
            this.horizonRing.material.color.setHex(theme.secondary);
        }

        // Update Spider Core & Model Parts
        if (this.quantumCore) {
            this.quantumCore.material.color.setHex(theme.primary);
            this.quantumCore.material.emissive.setHex(theme.primary);
        }
        if (this.innerCrystal) {
            this.innerCrystal.material.color.setHex(theme.secondary);
            this.innerCrystal.material.emissive.setHex(theme.secondary);
        }
        if (this.ring1) {
            this.ring1.material.color.setHex(theme.primary);
            this.ring1.material.emissive.setHex(theme.primary);
        }
        if (this.ring2) {
            this.ring2.material.color.setHex(theme.secondary);
            this.ring2.material.emissive.setHex(theme.secondary);
        }
        if (this.ring3) {
            this.ring3.material.color.setHex(theme.accent);
            this.ring3.material.emissive.setHex(theme.accent);
        }

        // Update Web Constellation Lines
        if (this.webLinesMat) {
            this.webLinesMat.color.setHex(theme.secondary);
        }

        // Update Floating Polyhedra
        const colors = [theme.primary, theme.secondary, theme.accent];
        this.floatingObjects.forEach((obj, idx) => {
            const c = colors[idx % colors.length];
            obj.mat.color.setHex(c);
            obj.mat.emissive.setHex(c);
        });

        // Update Starfield Colors
        if (this.starfield && this.starfield.geometry.attributes.color) {
            const colorsAttr = this.starfield.geometry.attributes.color;
            const c1 = new THREE.Color(theme.primary);
            const c2 = new THREE.Color(theme.secondary);
            const c3 = new THREE.Color(theme.accent);
            const count = colorsAttr.count;

            for (let i = 0; i < count; i++) {
                const chosen = (i % 3 === 0) ? c1 : (i % 3 === 1 ? c2 : c3);
                colorsAttr.setXYZ(i, chosen.r, chosen.g, chosen.b);
            }
            colorsAttr.needsUpdate = true;
        }

        // Update CSS Variables to mirror 3D Theme
        const root = document.documentElement;
        if (themeName === 'spiderman') {
            root.style.setProperty('--primary', '#ff0038');
            root.style.setProperty('--primary-rgb', '255, 0, 56');
            root.style.setProperty('--secondary', '#0066ff');
            root.style.setProperty('--secondary-rgb', '0, 102, 255');
            root.style.setProperty('--accent', '#ffd700');
            root.style.setProperty('--accent-rgb', '255, 215, 0');
            root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #ff0038 0%, #d60029 45%, #0066ff 100%)');
            root.style.setProperty('--gradient-cyber', 'linear-gradient(135deg, #ff0038 0%, #ff5e3a 50%, #ffd700 100%)');
        } else if (themeName === 'venom') {
            root.style.setProperty('--primary', '#9900ff');
            root.style.setProperty('--primary-rgb', '153, 0, 255');
            root.style.setProperty('--secondary', '#ff007f');
            root.style.setProperty('--secondary-rgb', '255, 0, 127');
            root.style.setProperty('--accent', '#00ffff');
            root.style.setProperty('--accent-rgb', '0, 255, 255');
            root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #9900ff 0%, #7700cc 50%, #ff007f 100%)');
            root.style.setProperty('--gradient-cyber', 'linear-gradient(135deg, #ff007f 0%, #9900ff 100%)');
        } else if (themeName === 'ironspider') {
            root.style.setProperty('--primary', '#ee0000');
            root.style.setProperty('--primary-rgb', '238, 0, 0');
            root.style.setProperty('--secondary', '#ffb700');
            root.style.setProperty('--secondary-rgb', '255, 183, 0');
            root.style.setProperty('--accent', '#00d4ff');
            root.style.setProperty('--accent-rgb', '0, 212, 255');
            root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #ee0000 0%, #ffb700 50%, #00d4ff 100%)');
            root.style.setProperty('--gradient-cyber', 'linear-gradient(135deg, #ffb700 0%, #ee0000 100%)');
        } else if (themeName === 'matrix') {
            root.style.setProperty('--primary', '#10b981');
            root.style.setProperty('--primary-rgb', '16, 185, 129');
            root.style.setProperty('--secondary', '#00ff88');
            root.style.setProperty('--secondary-rgb', '0, 255, 136');
            root.style.setProperty('--accent', '#34d399');
            root.style.setProperty('--accent-rgb', '52, 211, 153');
            root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #10b981 0%, #059669 50%, #00ff88 100%)');
            root.style.setProperty('--gradient-cyber', 'linear-gradient(135deg, #00ff88 0%, #10b981 100%)');
        } else if (themeName === 'cosmos') {
            root.style.setProperty('--primary', '#8a2be2');
            root.style.setProperty('--primary-rgb', '138, 43, 226');
            root.style.setProperty('--secondary', '#f43f5e');
            root.style.setProperty('--secondary-rgb', '244, 63, 94');
            root.style.setProperty('--accent', '#c084fc');
            root.style.setProperty('--accent-rgb', '192, 132, 252');
            root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #8a2be2 0%, #c084fc 50%, #f43f5e 100%)');
            root.style.setProperty('--gradient-cyber', 'linear-gradient(135deg, #f43f5e 0%, #8a2be2 100%)');
        } else {
            // Default Cyber Neon
            root.style.setProperty('--primary', '#6366f1');
            root.style.setProperty('--primary-rgb', '99, 102, 241');
            root.style.setProperty('--secondary', '#00f2fe');
            root.style.setProperty('--secondary-rgb', '0, 242, 254');
            root.style.setProperty('--accent', '#ec4899');
            root.style.setProperty('--accent-rgb', '236, 72, 153');
            root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)');
            root.style.setProperty('--gradient-cyber', 'linear-gradient(135deg, #00f2fe 0%, #6366f1 100%)');
        }
    }

    toggleWireframe(isWireframe) {
        this.scene.traverse((child) => {
            if (child.isMesh && child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.wireframe = isWireframe);
                } else {
                    child.material.wireframe = isWireframe;
                }
            }
        });
    }

    toggleExplode(isExploded) {
        if (typeof gsap !== 'undefined') {
            this.heroParts.forEach(part => {
                const target = isExploded ? part.defaultPos.clone().add(part.explodeDir) : part.defaultPos;
                gsap.to(part.mesh.position, {
                    x: target.x,
                    y: target.y,
                    z: target.z,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });
        } else {
            this.heroParts.forEach(part => {
                const target = isExploded ? part.defaultPos.clone().add(part.explodeDir) : part.defaultPos;
                part.mesh.position.copy(target);
            });
        }
    }

    updateThemeLighting() {
        if (this.state.isDark) {
            this.ambientLight.intensity = 0.7;
            this.renderer.toneMappingExposure = 1.2;
            this.scene.fog.density = 0.018;
        } else {
            this.ambientLight.intensity = 1.6;
            this.renderer.toneMappingExposure = 1.0;
            this.scene.fog.density = 0.008;
        }
    }

    /*================ ANIMATION LOOP ================*/
    animate() {
        requestAnimationFrame(() => this.animate());

        const time = performance.now() * 0.001;

        // Smooth Mouse Parallax Interpolation
        this.state.mouseX += (this.state.targetMouseX - this.state.mouseX) * 0.05;
        this.state.mouseY += (this.state.targetMouseY - this.state.mouseY) * 0.05;

        // Camera Smooth Lerp to Waypoint Target
        if (!this.state.freeOrbit) {
            this.camera.position.x += (this.targetCameraPos.x + this.state.mouseX * 1.5 - this.camera.position.x) * 0.06;
            this.camera.position.y += (this.targetCameraPos.y - this.state.mouseY * 1.2 - this.camera.position.y) * 0.06;
            this.camera.position.z += (this.targetCameraPos.z - this.camera.position.z) * 0.06;

            this.camera.rotation.x += (this.targetCameraRot.x - this.state.mouseY * 0.04 - this.camera.rotation.x) * 0.06;
            this.camera.rotation.y += (this.targetCameraRot.y + this.state.mouseX * 0.06 - this.camera.rotation.y) * 0.06;
            this.camera.rotation.z += (this.targetCameraRot.z - this.camera.rotation.z) * 0.06;
        }

        // Animate Spider Core & Legs
        if (this.spiderCoreGroup) {
            this.spiderCoreGroup.rotation.y += 0.008;
            this.spiderCoreGroup.position.y = Math.sin(time * 2) * 0.25;
        }

        if (this.spiderLegs) {
            this.spiderLegs.forEach((leg, i) => {
                const flex = Math.sin(time * 3.5 + i * 0.8) * 0.12;
                leg.rotation.x = flex;
            });
        }

        if (this.innerCrystal) {
            this.innerCrystal.rotation.x -= 0.015;
            this.innerCrystal.rotation.z += 0.01;
        }

        if (this.ring1) this.ring1.rotation.z += 0.015;
        if (this.ring2) this.ring2.rotation.x += 0.012;
        if (this.ring3) this.ring3.rotation.y += 0.018;

        // Animate 3D Web Lines Constellation
        if (this.webNodes && this.webLinesMesh) {
            let lineIdx = 0;
            const positions = this.webLinesMesh.geometry.attributes.position.array;
            const maxIdx = positions.length;

            for (let i = 0; i < this.webNodes.length; i++) {
                const n1 = this.webNodes[i];
                n1.mesh.position.add(n1.velocity);

                if (Math.abs(n1.mesh.position.x - n1.basePos.x) > 3) n1.velocity.x *= -1;
                if (Math.abs(n1.mesh.position.y - n1.basePos.y) > 3) n1.velocity.y *= -1;
                if (Math.abs(n1.mesh.position.z - n1.basePos.z) > 3) n1.velocity.z *= -1;

                for (let j = i + 1; j < this.webNodes.length; j++) {
                    const n2 = this.webNodes[j];
                    const dist = n1.mesh.position.distanceTo(n2.mesh.position);

                    if (dist < 7.5 && lineIdx + 5 < maxIdx) {
                        positions[lineIdx++] = n1.mesh.position.x;
                        positions[lineIdx++] = n1.mesh.position.y;
                        positions[lineIdx++] = n1.mesh.position.z;

                        positions[lineIdx++] = n2.mesh.position.x;
                        positions[lineIdx++] = n2.mesh.position.y;
                        positions[lineIdx++] = n2.mesh.position.z;
                    }
                }
            }
            this.webLinesMesh.geometry.attributes.position.needsUpdate = true;
        }

        // Animate Tech Satellites
        if (this.satellites) {
            this.satellites.forEach(sat => {
                sat.baseAngle += sat.speed;
                sat.group.position.x = Math.cos(sat.baseAngle) * 3.6;
                sat.group.position.z = Math.sin(sat.baseAngle) * 3.6;
                sat.group.position.y = Math.sin(time * 2 + sat.baseAngle) * 0.5;
                sat.group.rotation.x += 0.02;
                sat.group.rotation.y += 0.03;
            });
        }

        // Animate Floating Screens
        if (this.screens) {
            this.screens.forEach((screen, i) => {
                screen.position.y = 1.8 + Math.sin(time * 1.5 + i) * 0.15;
            });
        }

        // Animate Floating Polyhedra Across 3D Depth
        this.floatingObjects.forEach(obj => {
            obj.mesh.rotation.x += obj.speed.rotX;
            obj.mesh.rotation.y += obj.speed.rotY;
            obj.mesh.rotation.z += obj.speed.rotZ;
            obj.mesh.position.y = obj.speed.initialY + Math.sin(time * obj.speed.floatSpeed + obj.speed.floatOffset) * 0.8;
        });

        // Rotate Starfield & Cyber Horizon Ring
        if (this.starfield) {
            this.starfield.rotation.y = time * 0.02;
        }
        if (this.horizonRing) {
            this.horizonRing.rotation.z = time * 0.04;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE !== 'undefined') {
        window.portfolio3D = new Portfolio3DUniverse();
    }
});
