import { tab } from "@testing-library/user-event/dist/tab.js"
import * as tabs from "../TextWindow/planetsTabs/export.js"
import { AboutMe } from "../TextWindow/planetsTabs/export.js"

export const planetsInitialState = [
  {
    id: 1,
    name: "Resume",
    src: "/images/planets/1.png",
    classList: "resume",
    rotateIndex: 1,
    position: 1,
  },
  {
    id: 2,
    name: "Skills",
    src: "/images/planets/2.png",
    classList: "skills",
    rotateIndex: 2,
    position: 2,
  },
  {
    id: 3,
    name: "Projects",
    src: "/images/planets/3.png",
    classList: "projects",
    rotateIndex: 3,
    position: 3,
  },
  {
    id: 4,
    name: "Contacts",
    src: "/images/planets/4.png",
    classList: "contact",
    rotateIndex: 4,
    position: 4,
  },
  {
    id: 5,
    name: "About Me",
    src: "/images/planets/5.png",
    classList: "about-me",
    rotateIndex: 5,
    position: 5,
  },
  {
    name: "Circle rotate degrees",
    rotateDegrees: 0,
  },
]