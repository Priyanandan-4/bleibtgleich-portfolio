'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';

const SpotlightScene = () => {
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let renderer, scene, camera;
    let spotLight, lightHelper;
    let controls, gui;
    let animationId;

    // Initialize the scene
    const init = () => {
      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;

      // Scene setup
      scene = new THREE.Scene();

      // Camera setup
      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(7, 4, 1);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controls.maxPolarAngle = Math.PI / 2;
      controls.target.set(0, 1, 0);
      controls.update();

      // Ambient light
      const ambient = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.15);
      scene.add(ambient);

      // Load textures
      const textures = { none: null };
      const loader = new THREE.TextureLoader();
      const filenames = ['disturb.jpg', 'colors.png', 'uv_grid_opengl.jpg'];

      // Using a placeholder texture initially (you'll need to adjust paths)
      const placeholderTexture = new THREE.TextureLoader().load('/textures/disturb.jpg');
      placeholderTexture.minFilter = THREE.LinearFilter;
      placeholderTexture.magFilter = THREE.LinearFilter;
      placeholderTexture.generateMipmaps = false;
      placeholderTexture.colorSpace = THREE.SRGBColorSpace;
      textures['disturb.jpg'] = placeholderTexture;

      // For production, you would load the actual textures from your public folder
      // filenames.forEach(filename => {
      //   const texture = loader.load(`/textures/${filename}`);
      //   texture.minFilter = THREE.LinearFilter;
      //   texture.magFilter = THREE.LinearFilter;
      //   texture.generateMipmaps = false;
      //   texture.colorSpace = THREE.SRGBColorSpace;
      //   textures[filename] = texture;
      // });

      // Spotlight
      spotLight = new THREE.SpotLight(0xffffff, 100);
      spotLight.position.set(2.5, 5, 2.5);
      spotLight.angle = Math.PI / 6;
      spotLight.penumbra = 1;
      spotLight.decay = 2;
      spotLight.distance = 0;
      spotLight.map = textures['disturb.jpg'];

      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.near = 1;
      spotLight.shadow.camera.far = 10;
      spotLight.shadow.focus = 1;
      scene.add(spotLight);

      // Light helper
      lightHelper = new THREE.SpotLightHelper(spotLight);
      scene.add(lightHelper);

      // Floor plane
      const geometry = new THREE.PlaneGeometry(200, 200);
      const material = new THREE.MeshLambertMaterial({ color: 0xbcbcbc });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, -1, 0);
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      scene.add(mesh);

      // Load PLY model
      // Note: You'll need to place the model in your public folder
      const plyLoader = new PLYLoader();
      plyLoader.load('/models/ply/binary/Lucy100k.ply', (geometry) => {
        geometry.scale(0.0024, 0.0024, 0.0024);
        geometry.computeVertexNormals();

        const modelMaterial = new THREE.MeshLambertMaterial();

        const modelMesh = new THREE.Mesh(geometry, modelMaterial);
        modelMesh.rotation.y = -Math.PI / 2;
        modelMesh.position.y = 0.8;
        modelMesh.castShadow = true;
        modelMesh.receiveShadow = true;
        scene.add(modelMesh);
      });

      // GUI
      gui = new GUI({ autoPlace: true, width: 320 });
      gui.domElement.style.position = 'absolute';
      gui.domElement.style.top = '0';
      gui.domElement.style.right = '0';

      const params = {
        map: textures['disturb.jpg'],
        color: spotLight.color.getHex(),
        intensity: spotLight.intensity,
        distance: spotLight.distance,
        angle: spotLight.angle,
        penumbra: spotLight.penumbra,
        decay: spotLight.decay,
        focus: spotLight.shadow.focus,
        shadows: true
      };

      gui.add(params, 'map', textures).onChange((val) => {
        spotLight.map = val;
      });

      gui.addColor(params, 'color').onChange((val) => {
        spotLight.color.setHex(val);
      });

      gui.add(params, 'intensity', 0, 500).onChange((val) => {
        spotLight.intensity = val;
      });

      gui.add(params, 'distance', 0, 20).onChange((val) => {
        spotLight.distance = val;
      });

      gui.add(params, 'angle', 0, Math.PI / 3).onChange((val) => {
        spotLight.angle = val;
      });

      gui.add(params, 'penumbra', 0, 1).onChange((val) => {
        spotLight.penumbra = val;
      });

      gui.add(params, 'decay', 1, 2).onChange((val) => {
        spotLight.decay = val;
      });

      gui.add(params, 'focus', 0, 1).onChange((val) => {
        spotLight.shadow.focus = val;
      });

      gui.add(params, 'shadows').onChange((val) => {
        renderer.shadowMap.enabled = val;

        scene.traverse((child) => {
          if (child.material) {
            child.material.needsUpdate = true;
          }
        });
      });

      gui.open();

      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };

    // Resize handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Animation loop
    const animate = () => {
      const time = performance.now() / 3000;

      if (spotLight) {
        spotLight.position.x = Math.cos(time) * 2.5;
        spotLight.position.z = Math.sin(time) * 2.5;
        lightHelper.update();
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    init();
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationId);
      if (gui) gui.destroy();
      if (renderer) renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isClient]);

  return (
    <div className="w-full h-screen relative">
      <div id="info" className="absolute z-10 top-2 left-0 right-0 text-center text-white">
        <a href="https://threejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          three.js
        </a>{' '}
        webgl - spotlight
      </div>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default SpotlightScene;