# campusverse
CampusVerse is a modern, responsive web portal designed for college students to manage their campus life. Built with vanilla HTML, CSS, and JavaScript, it provides a clean and intuitive interface for accessing campus resources, connecting with friends, and staying organized.
Features
1. Dashboard
Clean 4-card layout with Feed, Campus Map, Study Material, and Events sections
Modern design with gradient header and card-based UI
Responsive layout that adapts to different screen sizes
Preview of latest feed post on the dashboard
2. Profile Management
Profile picture display with change functionality (avatar generation)
Editable bio section (200 character limit)
Friends list showing 3 friends: Kashvi, Anushka, and Yuvanshi
Access to settings from profile page
Profile icon in header for quick access
3. Feed Section
Split view layout: Posts on left, Group Chats on right
4 mock posts with author info, timestamps, and content
5 mock group chats with unread message counts
Clean, modern post cards with avatar images
4. Interactive Campus Map
Powered by Leaflet.js
Real JIIT Noida Sector 62 campus location (28.6198°N, 77.3611°E)
Shows 9 actual campus buildings:
Aryabhatt Block I (ABB-I) - Academic
Aryabhatt Block II (ABB-II) - Academic
Aryabhatt Block III (ABB-III) - Academic
Annapurna Building - Cafeteria
Library (LRC) - Learning Resource Centre
Sports Complex
Hostel H1 and H2
Main Gate (Gate 1)
Displays 3 friend locations (Kashvi, Anushka, Yuvanshi) with avatar markers
Interactive popups for each marker showing building name and type
Responsive map interface with zoom level 17 for detailed view
5. Study Material
Tabbed interface for PYQs and Lecture Notes
Previous Year Questions: 4 sample exams with download counts
Lecture Notes: 4 sample notes with professor info and page counts
Download buttons for each material (placeholder functionality)
6. Events Calendar
Full calendar view using FullCalendar.js
Month and week view options
4 upcoming events with dates, times, and locations
Add event functionality with modal form
Upcoming events sidebar for quick reference
Event details include title, date, time, location, and description
7. CampusGPT Chatbot
Floating chatbot icon in bottom-right corner
Pop-up chat window interface
Remembers last 5 message pairs (10 total messages)
Context-aware responses about college and study topics
Handles questions about: studying, exams, assignments, time management, stress, library resources
Smooth animations for messages
8. Settings Panel
Light/Dark theme toggle with persistent storage
Update Account option (placeholder)
Delete Account option with confirmation
Accessible from profile page
9. Themes
Light mode (default): Soft colors with white cards
Dark mode: Dark background with adjusted colors
Theme preference saved in localStorage
Smooth transitions between themes
Technical Stack
Frontend
HTML5: Semantic markup with accessibility in mind
CSS3: Modern styling with CSS custom properties for theming
JavaScript (ES6+): Vanilla JS for all functionality
External Libraries (CDN)
Leaflet.js v1.9.4: Interactive maps
FullCalendar.js v6.1.10: Event calendar
Font Awesome v6.4.0: Icons throughout the interface

File Structure
/

├── index.html          # Main HTML structure

├── style.css           # All styling and theme definitions

├── script.js           # Core functionality and mock data

├── assets/             # Folder for static assets (currently empty)

├── .gitignore          # Git ignore file

└── replit.md           # This documentation file

Mock Data
All data is stored in JavaScript arrays within script.js:

Posts: 4 sample posts from different users
Chats: 5 group chats with previews and unread counts
Friends: 3 friends - Kashvi, Anushka, and Yuvanshi
Buildings: 9 actual JIIT Noida campus buildings with real coordinates
Friend Locations: 3 friends positioned at different campus locations
PYQs: 4 previous year question papers
Notes: 4 lecture note sets
Events: 4 upcoming campus events
Design Philosophy
Modern & Minimal: Clean interface with ample whitespace
Responsive: Works on desktop, tablet, and mobile devices
Accessible: Semantic HTML and clear visual hierarchy
Smooth Interactions: Transitions and animations for better UX
Light Colors: Soft purples and blues (primary: #667eea, secondary: #764ba2)
Rounded Corners: 12-20px border radius for modern look
Card Shadows: Subtle shadows that increase on hover
Color Scheme
Light Mode
Background: #f8f9fa
Card Background: #ffffff
Primary: #667eea (Purple)
Secondary: #764ba2 (Deep Purple)
Text: #2d3748
Text Light: #718096
Dark Mode
Background: #1a202c
Card Background: #2d3748
Same accent colors
Text: #e2e8f0
Text Light: #a0aec0
User Preferences
None currently documented.


Smart AI Chatbot now uses stored data:
Answers questions about upcoming events from calendar
Provides building locations from campus map
Explains JIIT portal access and attendance requirements
Lists available PYQs and lecture notes
Gives information about library, hostels, cafeteria, sports complex
Recognizes friends' names (Kashvi, Anushka, Yuvanshi)
Personalized greeting: "Hi Mahi!"
Context-aware responses directing to relevant sections
Known Limitations (Prototype)
No backend/database - all data is static
Profile picture change uses URL-based avatar generation
Download buttons show alerts instead of downloading files
Chat messages are read-only (no actual messaging)
Map shows JIIT Noida campus with approximate building coordinates (exact GPS coordinates for each building not available)
Settings actions (update/delete account) are placeholders
No user authentication
No data persistence beyond localStorage for theme preference
Future Enhancements (Next Phase)
User authentication system for personalized profiles
Real-time chat functionality for group chats
Backend API integration for persistent data
File upload for study materials and profile pictures
Real-time friend location tracking
Push notifications for events
Search functionality across all sections
Social features (likes, comments on posts)
Assignment/homework tracker
Grade calculator and GPA tracker
Running the Project
The project runs on a simple Python HTTP server on port 5000.

Workflow: CampusVerse Portal Command: http://127.0.0.1:5501/index.html: Open the webview to see the portal

No build process or dependencies installation required - all libraries are loaded via CDN.

Browser Compatibility
Chrome/Edge (latest)
Firefox (latest)
Safari (latest)
Mobile browsers (iOS Safari, Chrome Mobile)
Development Notes
All functionality is self-contained in three files (HTML, CSS, JS)
No framework dependencies - pure vanilla JavaScript
Uses localStorage only for theme preference
External libraries loaded from CDN for easy setup
Map uses actual JIIT Noida Sector 62 campus coordinates
Building locations are approximate positions within campus (based on campus layout)
