import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/portfolio",
    title: "portfolio",
  },
  {
    path: "/capabilities",
    title: "capabilities",
    subMenu: [
      {
        path: "/capabilities/discovery",
        title: "discovery",
      },
      {
        path: "/capabilities/design",
        title: "design",
      },
      {
        path: "/capabilities/strategy",
        title: "strategy",
      },
      {
        path: "/capabilities/evaluation",
        title: "evaluation",
      },
    ]
  },
  {
    path: "/contact",
    title: "contact",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/morgan-baker-developer-inverness",
    name: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/bagseye",
    name: "GitHub",
  },
]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]
