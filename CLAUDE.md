# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website for a 10-year full-stack developer (발악하는날다람쥐), showcasing career experience, technical skills, and project portfolio. Built with vanilla HTML, CSS, and JavaScript—no build tools or frameworks required.

## Tech Stack

- **Frontend**: HTML5, JavaScript (vanilla), Tailwind CSS (CDN)
- **Styling**: Tailwind CSS via CDN, custom CSS animations
- **Typography**: Google Fonts (Noto Sans KR for Korean)
- **Features**: IntersectionObserver animations, responsive design, mobile menu

## Project Structure

```
profile-my-site/
├── index.html          # Main HTML markup with semantic sections
├── style.css           # Global styles, animations, responsive design
├── main.js             # Interactive logic and animations
├── README.md           # Korean project documentation
└── CLAUDE.md           # This file
```

## Key Components & Architecture

### HTML Structure
The site is organized into semantic sections:
- **Navigation**: Fixed header with desktop and mobile menus (hamburger toggle)
- **Hero**: Landing section with gradient text, badges, and floating tech stack pills
- **About**: Career stats and domain expertise display
- **Skills**: Tech stack badges and skill bars with animated fill effects
- **Career/Portfolio**: Dynamic project grid with category filtering
- **Contact**: Email copy-to-clipboard card
- **Footer**: Dynamic year display

All Tailwind utilities are applied inline; no custom CSS classes are used for layout.

### JavaScript Logic (main.js)

**Project Rendering & Filtering**
- `renderProjects(filter)`: Generates project cards dynamically from a hardcoded projects array (19 total)
- Filter buttons toggle between categories: "전체" (all), "운영·유지관리" (maintenance), "구축" (build), "홈페이지" (website)
- Each card includes category tag, title, period, client, status badge, and tech tags
- Category colors are determined by project type (purple for maintenance, sky-blue for builds, emerald for websites)

**Scroll Animations**
- `IntersectionObserver` with threshold 0.1 triggers fade-in + slide-up animations for `.scroll-hidden` elements
- Converts `.scroll-hidden` to `.scroll-visible` on intersection
- Staggered delays applied via inline `style="transition-delay"`

**Skill Bars**
- Separate observer watches `.skill-bar` elements
- Adds `.animate` class when visible, which transitions `width` from 0% to `--target-width` CSS variable
- Uses cubic-bezier timing for smooth fill effect

**Navigation Active State**
- NavObserver watches section visibility
- Updates active nav link styling (color/font-weight) based on which section is in viewport
- Desktop and mobile nav links both supported

**Mobile Menu**
- Toggle button shows/hides mobile menu with max-height transition
- Closes on link click, outside click, or Escape key
- Uses `#mobile-menu` div with `.mobile-menu.open` class

**Email Copy**
- Click handler on copy button: writes to clipboard, shows "복사됨!" feedback for 2 seconds
- Fallback alert if clipboard API fails

### CSS Animations & Styles (style.css)

**Custom Animations**
- `pulse-blob`: Background blob elements with opacity/scale pulse
- `float`: Vertical floating effect on hero tech badges (4s duration)
- `fadeIn`: Used for sequential hero content entrance (staggered with nth-child selectors)
- `scroll-visible`: Opacity + translateY transition when elements enter viewport

**Key Classes**
- `.gradient-text`: Linear gradient text (indigo to purple) using background-clip
- `.scroll-hidden` / `.scroll-visible`: State classes for scroll animations
- `.skill-bar`: Width animation using CSS variable `--target-width`
- `.mobile-menu`: Max-height collapsible transition
- `.card-item`: Project cards with hover effects (border color, shadow, vertical shift)

**Responsive Design**
- Uses Tailwind's `md:` breakpoints
- Mobile-first: stacked layout, hamburger menu on small screens
- Desktop: multi-column grids, full horizontal navigation

## Development Workflow

### Running the Site

The site runs directly in a browser with no build step:
1. Open `index.html` in any modern browser (no server required)
2. All external dependencies load via CDN (Tailwind CSS, Google Fonts)

### Making Changes

**Adding/Editing Projects**
- Edit the `projects` array in `main.js` (lines 4–176)
- Structure: `id`, `title`, `period`, `client`, `category`, `status`, `tags`
- Call `renderProjects()` at the bottom to regenerate cards

**Updating Skills**
- Modify skill badges in HTML (lines 191–199)
- Update skill bars in HTML (lines 206–274) with new `--target-width` CSS variable values

**Styling Changes**
- Use Tailwind utility classes in HTML (color scheme: slate-700/slate-800 backgrounds, indigo-600 accents)
- Add custom animations or overrides in `style.css`
- Color palette: `#1e293b` (background), `#6366f1` (primary indigo), `#a855f7` (secondary purple)

**Animation Tweaks**
- Scroll animation threshold/delay: adjust `observerOptions` in main.js (line 253)
- Skill bar animation duration: modify CSS transition on `.skill-bar` (line 144)
- Stagger delays: modify multipliers in `renderProjects()` (line 195) and hero nth-child (lines 115–129)

### Testing

- Test all sections by scrolling—animations should fire on viewport entry
- Test project filters: click each filter button to verify card rendering and styling
- Test mobile responsiveness: resize browser or open DevTools mobile emulation
- Test mobile menu: hamburger toggle and link clicks should open/close menu
- Test email copy: click button, verify clipboard contains email and feedback shows

### Browser Compatibility

- Requires ES6+ JavaScript (const, arrow functions, template literals)
- Requires IntersectionObserver API (supported in all modern browsers)
- Requires CSS Grid and Flexbox
- Requires Clipboard API for email copy (fallback alert for unsupported browsers)

## Important Notes

- **No package.json**: This is a static site with no npm dependencies—only CDN links
- **Hardcoded Data**: Project list is in main.js; updating requires editing the array
- **Tailwind CDN**: Site depends on Tailwind's CDN for styling; no local build process
- **Korean Content**: All text, labels, and feedback strings are in Korean
- **Email**: Contact email is hardcoded in both HTML (line 329) and JavaScript (line 345)—update both if changing
