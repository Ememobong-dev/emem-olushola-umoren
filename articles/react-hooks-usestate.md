---
title: "React Hooks Series – Part 1: Building an Accordion using useState"
slug: "react-hooks-usestate"
description: "Learn how to use useState by building an interactive accordion in React."
author: "Umoren Emem Olushola"
date: "2025-05-15"
tags: ["React", "Hooks", "Frontend", "JavaScript"]
cardImage: "/images/articlesImages/react-useState1/img1.png"
gallery:
  - "/images/articlesImages/react-useState1/img1.png"
  - "/images/ayocpa.png"
  - "/images/wow.png"
---

Welcome to Part 1 of my React Hooks Series.  
We're kicking it off with something clean and super beginner-friendly: **an accordion using `useState`**.

This article breaks down a live FAQ page I built recently using React and state management — and of course, in the Reacty way. Think of a group of FAQ items where you can click on a question to show/hide the answer. Only one answer should be open at a time and yeppp.



## 💡 The Structure
We split the UI into components:

- BannerHeader for the top banner (just a styled heading)
- Accordion component for each FAQ item
- Card component for wrapping the whole FAQ box

## The Accordian Component

![Accordion Screenshot](/images/articlesImages/react-useState1/code1b.png)


Here’s what happens step-by-step:

1. Each accordion is passed:
   1. question / response: Each accordion needs text to display. These are just strings from the faqData.
   
   2.  index: This represents the position of the current accordion item in the list.
   
   3.  currentIndex: This holds the index of the currently open accordion. If none is open, it's -1.
   
   4.  handleCurrentIndex: A function passed from the parent to update which accordion is open (i.e., it sets the active state from the parent).