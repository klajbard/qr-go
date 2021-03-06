import { IOptions, RecursivePartial } from "tsparticles";

const particlesConfig: RecursivePartial<IOptions> = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "circle",
    },
    line_linked: {
      enable: true,
      distance: 200,
      opacity: 0.6,
      color: "#000",
    },
    stroke: {
      opacity: 0.9,
      color: "#000",
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: false,
    },
    links: {
      enable: true,
      distance: 20,
      color: "#000000",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: true,
        rotateX: 750,
        rotateY: 1500,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.35,
        },
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: 0.4,
      },
      repulse: {
        distance: 100,
        duration: 5,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
