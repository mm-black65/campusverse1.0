let currentPage = 'dashboard';
let map = null;
let calendar = null;
let chatHistory = [];
const MAX_CHAT_HISTORY = 5;
let currentHashtagFilter = null;

const mockData = {
    posts: [
        {
            author: "Kashvi",
            avatar: "https://ui-avatars.com/api/?name=Kashvi&background=667eea&color=fff",
            time: "30 mins ago",
            content: "Just aced my OS viva! 🎉 The key was revising all the PYQs from ABB-III library. Also, attendance is at 75% now - finally safe! Check your attendance on JIIT portal if you haven't already 📊"
        },
        {
            author: "Anushka",
            avatar: "https://ui-avatars.com/api/?name=Anushka&background=48bb78&color=fff",
            time: "3 hours ago",
            content: "URGENT: CS301 assignment deadline extended to Friday! 🙌 Just got the mail. Also found amazing notes for DBMS in the study material section. Let's form a study group for the mid-terms?"
        },
        {
            author: "Yuvanshi",
            avatar: "https://ui-avatars.com/api/?name=Yuvanshi&background=ed8936&color=fff",
            time: "Yesterday",
            content: "The tech talk on AI in Healthcare was mind-blowing! 🤖 The Google AI speaker explained how neural networks are being used in cancer detection. Recording will be uploaded on portal soon. Highly recommend! #TechTalk2025"
        },
        {
            author: "Rohan Sharma",
            avatar: "https://ui-avatars.com/api/?name=Rohan+Sharma&background=9f7aea&color=fff",
            time: "Yesterday",
            content: "Hackathon registration is LIVE! 🚀 48-hour coding marathon at Innovation Hub next month. Teams of 4, amazing prizes from Microsoft & Amazon. Already formed a team - 2 spots left! DM if interested. Let's build something epic! 💻"
        },
        {
            author: "Priya Malhotra",
            avatar: "https://ui-avatars.com/api/?name=Priya+Malhotra&background=f56565&color=fff",
            time: "2 days ago",
            content: "Found the best spot for late-night study sessions - LRC 3rd floor near the window! 📚✨ Super quiet, great wifi, and the vending machine is close by. Also, they've added new Java and Python books in section C-14!"
        },
        {
            author: "Arjun Kapoor",
            avatar: "https://ui-avatars.com/api/?name=Arjun+Kapoor&background=38b2ac&color=fff",
            time: "2 days ago",
            content: "Placement season is here! 🎯 Google, Microsoft, and Amazon drives starting next week. Make sure your resume is updated and practice DSA. Free mock interviews happening at Sports Complex every evening. Let's crack this together! 💪"
        }
    ],
    
    chats: [
        { name: "CS Study Group", preview: "Alice: The assignment deadline is tomorrow!", unread: 3 },
        { name: "Dorm Floor 3", preview: "Anyone up for pizza tonight?", unread: 1 },
        { name: "Hackathon Team", preview: "Bob: I've pushed the latest code", unread: 0 },
        { name: "Basketball Club", preview: "Practice at 6 PM today!", unread: 2 },
        { name: "Project Partners", preview: "Carol: Let's meet at the library", unread: 5 }
    ],
    
    friends: [
        { name: "Kashvi", avatar: "https://ui-avatars.com/api/?name=Kashvi&background=667eea&color=fff" },
        { name: "Anushka", avatar: "https://ui-avatars.com/api/?name=Anushka&background=48bb78&color=fff" },
        { name: "Yuvanshi", avatar: "https://ui-avatars.com/api/?name=Yuvanshi&background=ed8936&color=fff" }
    ],
    
    buildings: [
        { name: "Aryabhatt Block I (ABB-I)", coords: [28.6198, 77.3608], type: "academic" },
        { name: "Aryabhatt Block II (ABB-II)", coords: [28.6195, 77.3612], type: "academic" },
        { name: "Aryabhatt Block III (ABB-III)", coords: [28.6201, 77.3615], type: "academic" },
        { name: "Annapurna Building (Cafeteria)", coords: [28.6196, 77.3618], type: "dining" },
        { name: "Library (LRC)", coords: [28.6200, 77.3611], type: "study" },
        { name: "Sports Complex", coords: [28.6193, 77.3607], type: "sports" },
        { name: "Hostel H1", coords: [28.6203, 77.3610], type: "hostel" },
        { name: "Hostel H2", coords: [28.6204, 77.3613], type: "hostel" },
        { name: "Main Gate (Gate 1)", coords: [28.6191, 77.3610], type: "entrance" }
    ],
    
    friendLocations: [
        { name: "Kashvi", coords: [28.6198, 77.3611] },
        { name: "Anushka", coords: [28.6200, 77.3615] },
        { name: "Yuvanshi", coords: [28.6196, 77.3612] }
    ],
    
    pyqs: [
        { title: "Data Structures Mid-Term 2024", subject: "CS201", semester: "Fall 2024", downloads: 245 },
        { title: "Algorithms Final Exam 2023", subject: "CS301", semester: "Spring 2023", downloads: 189 },
        { title: "Database Systems Quiz 2024", subject: "CS402", semester: "Fall 2024", downloads: 156 },
        { title: "Operating Systems Mid-Term 2023", subject: "CS305", semester: "Fall 2023", downloads: 203 }
    ],
    
    notes: [
        { title: "Introduction to Machine Learning", subject: "CS450", professor: "Dr. Smith", pages: 45 },
        { title: "Web Development Complete Guide", subject: "CS380", professor: "Prof. Johnson", pages: 78 },
        { title: "Computer Networks Fundamentals", subject: "CS420", professor: "Dr. Williams", pages: 62 },
        { title: "Software Engineering Principles", subject: "CS350", professor: "Prof. Davis", pages: 55 }
    ],
    
    events: [
        { 
            title: "Tech Talk: AI in Healthcare", 
            date: "2025-11-05", 
            time: "14:00",
            location: "Auditorium Hall A",
            description: "Guest speaker from Google AI discussing applications of AI in modern healthcare"
        },
        { 
            title: "Coding Competition", 
            date: "2025-11-08", 
            time: "10:00",
            location: "CS Building Lab 3",
            description: "Annual inter-college coding competition with amazing prizes"
        },
        { 
            title: "Career Fair 2025", 
            date: "2025-11-12", 
            time: "09:00",
            location: "Student Center",
            description: "Meet recruiters from top tech companies and explore internship opportunities"
        },
        { 
            title: "Hackathon Kickoff", 
            date: "2025-11-15", 
            time: "18:00",
            location: "Innovation Hub",
            description: "48-hour hackathon starts! Build innovative solutions and win prizes"
        }
    ]
};

function showDashboard() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('dashboard').style.display = 'block';
    currentPage = 'dashboard';
}

function showProfile() {
    document.getElementById('dashboard').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('profilePage').classList.add('active');
    currentPage = 'profile';
    loadFriends();
}

function openFeed() {
    document.getElementById('dashboard').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('feedPage').classList.add('active');
    currentPage = 'feed';
    loadPosts();
    renderTrendingHashtags();
    loadChats();
}

function openMap() {
    document.getElementById('dashboard').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('mapPage').classList.add('active');
    currentPage = 'map';
    setTimeout(initMap, 100);
}

function openStudyMaterial() {
    document.getElementById('dashboard').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('studyPage').classList.add('active');
    currentPage = 'study';
    switchStudyTab('pyqs');
}

function openEvents() {
    document.getElementById('dashboard').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('eventsPage').classList.add('active');
    currentPage = 'events';
    setTimeout(initCalendar, 100);
    loadUpcomingEvents();
}

function loadPosts() {
    const container = document.getElementById('postsContainer');
    // get combined posts
    const postsToShow = getAllPosts();

    // apply hashtag filter if set
    const filtered = currentHashtagFilter
        ? postsToShow.filter(p => (p.content || '').toLowerCase().includes(currentHashtagFilter.toLowerCase()))
        : postsToShow;

    container.innerHTML = filtered.map(post => `
        <div class="post">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.author}">
                <div>
                    <div class="post-author">${post.author}</div>
                    <div class="post-time">${post.time}</div>
                </div>
            </div>
            <p>${post.content}</p>
        </div>
    `).join('');
}

function getAllPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('campversePosts')) || [];
    const convertedSaved = savedPosts.map(sp => ({
        author: sp.title || 'Unknown',
        avatar: sp.image ? sp.image : `https://ui-avatars.com/api/?name=${encodeURIComponent(sp.title || 'User')}&background=667eea&color=fff`,
        time: sp.time || '',
        content: sp.content || ''
    }));
    return [...convertedSaved, ...mockData.posts];
}

function extractHashtags(text) {
    if (!text) return [];
    const re = /#([\w\-]+)/g;
    const tags = [];
    let m;
    while ((m = re.exec(text)) !== null) {
        tags.push('#' + m[1]);
    }
    return tags;
}

function renderTrendingHashtags() {
    const container = document.getElementById('trendingHashtags');
    if (!container) return;
    const posts = getAllPosts();
    const counts = {};
    posts.forEach(p => {
        const tags = extractHashtags(p.content);
        tags.forEach(t => {
            const key = t.toLowerCase();
            counts[key] = (counts[key] || 0) + 1;
        });
    });

    const entries = Object.keys(counts).map(k => ({ tag: k, count: counts[k] }));
    entries.sort((a, b) => b.count - a.count);
    const top3 = entries.slice(0, 3);

    if (top3.length === 0) {
        container.innerHTML = `<div style="color:#666">No trending hashtags yet</div>`;
        return;
    }

    const html = top3.map(e => {
        const activeClass = currentHashtagFilter && currentHashtagFilter.toLowerCase() === e.tag ? 'hashtag-active' : '';
        return `<button class="hashtag-btn ${activeClass}" data-tag="${e.tag}">${e.tag} <span style="opacity:0.7">· ${e.count}</span></button>`;
    }).join('') + (currentHashtagFilter ? `<button class="hashtag-clear" onclick="clearHashtagFilter()">Clear</button>` : '');

    container.innerHTML = html;

    // attach listeners
    container.querySelectorAll('.hashtag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.getAttribute('data-tag');
            filterPostsByHashtag(tag);
        });
    });
}

function filterPostsByHashtag(tag) {
    currentHashtagFilter = tag;
    loadPosts();
    renderTrendingHashtags();
}

function clearHashtagFilter() {
    currentHashtagFilter = null;
    loadPosts();
    renderTrendingHashtags();
}

function loadChats() {
    const container = document.getElementById('chatsContainer');

    // Build chat list with data-index so we can open the specific chat
    container.innerHTML = mockData.chats.map((chat, idx) => `
        <div class="chat-item" data-chat-index="${idx}">
            <div class="chat-name">${chat.name} ${chat.unread > 0 ? `<span style="background: #667eea; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">${chat.unread}</span>` : ''}</div>
            <div class="chat-preview">${chat.preview}</div>
        </div>
    `).join('');

    // Attach click listeners to open the group chat window
    container.querySelectorAll('.chat-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.getAttribute('data-chat-index'));
            openGroupChat(idx);
        });
    });
}

// Group chat persistence key
const CHAT_STORAGE_KEY = 'campverseChats';

function openGroupChat(chatIndex) {
    const chat = mockData.chats[chatIndex];
    if (!chat) return;

    const chatWindow = document.getElementById('groupChatWindow');
    const titleEl = document.getElementById('groupChatTitle');
    titleEl.textContent = chat.name;

    // Load message history from localStorage
    const allChats = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || '{}');
    if (!allChats[chat.name]) {
        // Seed with the preview as a message from 'them'
        allChats[chat.name] = [
            { sender: 'them', text: chat.preview, time: new Date().toLocaleTimeString() }
        ];
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(allChats));
    }

    chatWindow.classList.add('active');
    renderGroupChatMessages(chat.name);

    // reset unread count visually
    mockData.chats[chatIndex].unread = 0;
    loadChats(); // refresh chat list badges

    // wire up buttons
    document.getElementById('sendGroupBtn').onclick = () => sendGroupMessage(chat.name);
    document.getElementById('closeGroupChat').onclick = closeGroupChat;
}

function renderGroupChatMessages(chatName) {
    const messagesContainer = document.getElementById('groupChatMessages');
    messagesContainer.innerHTML = '';
    const allChats = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || '{}');
    const msgs = allChats[chatName] || [];

    msgs.forEach(m => {
        const div = document.createElement('div');
        div.classList.add('msg');
        div.classList.add(m.sender === 'me' ? 'me' : 'them');
        div.innerHTML = `<div>${escapeHtml(m.text)}</div><div style="font-size:0.7rem;color:#666;margin-top:4px">${m.time}</div>`;
        messagesContainer.appendChild(div);
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendGroupMessage(chatName) {
    const input = document.getElementById('groupChatInput');
    const text = input.value.trim();
    if (!text) return;

    const allChats = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || '{}');
    if (!allChats[chatName]) allChats[chatName] = [];

    const msg = { sender: 'me', text, time: new Date().toLocaleTimeString() };
    allChats[chatName].push(msg);
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(allChats));

    input.value = '';
    renderGroupChatMessages(chatName);

    // Optionally simulate a short auto-reply from the group (lightweight)
    setTimeout(() => {
        const reply = { sender: 'them', text: '👍', time: new Date().toLocaleTimeString() };
        const nowChats = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || '{}');
        nowChats[chatName].push(reply);
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(nowChats));
        renderGroupChatMessages(chatName);
    }, 800);
}

function handleGroupKeypress(e) {
    if (e.key === 'Enter') {
        const chatName = document.getElementById('groupChatTitle').textContent;
        sendGroupMessage(chatName);
    }
}

function closeGroupChat() {
    document.getElementById('groupChatWindow').classList.remove('active');
    document.getElementById('groupChatMessages').innerHTML = '';
}

function escapeHtml(unsafe) {
    return unsafe.replace(/[&<"']/g, function (m) {
        return ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', "'": '&#039;' })[m];
    });
}

function loadFriends() {
    const container = document.getElementById('friendsList');
    document.getElementById('friendCount').textContent = mockData.friends.length;
    container.innerHTML = mockData.friends.map(friend => `
        <div class="friend-card">
            <img src="${friend.avatar}" alt="${friend.name}">
            <p>${friend.name}</p>
        </div>
    `).join('');
}

function initMap() {
    if (map) {
        map.remove();
    }
    
    map = L.map('map').setView([28.6198098, 77.3611399], 17);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    const buildingIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #667eea; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">📍</div>',
        iconSize: [30, 30]
    });
    
    mockData.buildings.forEach(building => {
        L.marker(building.coords, { icon: buildingIcon })
            .addTo(map)
            .bindPopup(`<b>${building.name}</b><br>Type: ${building.type}`);
    });
    
    mockData.friendLocations.forEach(friend => {
        const friendIcon = L.divIcon({
            className: 'friend-marker',
            html: `<div style="background: white; border: 3px solid #48bb78; width: 35px; height: 35px; border-radius: 50%; overflow: hidden;"><img src="https://ui-avatars.com/api/?name=${friend.name}&background=48bb78&color=fff" style="width: 100%; height: 100%;"></div>`,
            iconSize: [35, 35]
        });
        
        L.marker(friend.coords, { icon: friendIcon })
            .addTo(map)
            .bindPopup(`<b>${friend.name}</b><br>Currently here`);
    });
}

function switchStudyTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const container = document.getElementById('studyContent');
    
    if (tab === 'pyqs') {
        container.innerHTML = mockData.pyqs.map(pyq => `
            <div class="material-item">
                <div class="material-info">
                    <h4>${pyq.title}</h4>
                    <div class="material-meta">
                        ${pyq.subject} • ${pyq.semester} • ${pyq.downloads} downloads
                    </div>
                </div>
                <button class="download-btn" onclick="downloadMaterial('${pyq.title}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `).join('');
    } else {
        container.innerHTML = mockData.notes.map(note => `
            <div class="material-item">
                <div class="material-info">
                    <h4>${note.title}</h4>
                    <div class="material-meta">
                        ${note.subject} • ${note.professor} • ${note.pages} pages
                    </div>
                </div>
                <button class="download-btn" onclick="downloadMaterial('${note.title}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `).join('');
    }
}

function downloadMaterial(title) {
    alert(`Downloading: ${title}\n\nThis is a prototype. In the full version, the file would be downloaded.`);
}

function initCalendar() {
    if (calendar) {
        calendar.destroy();
    }
    
    const calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        },
        events: mockData.events.map(event => ({
            title: event.title,
            start: `${event.date}T${event.time}`,
            extendedProps: {
                location: event.location,
                description: event.description
            }
        })),
        eventClick: function(info) {
            alert(`Event: ${info.event.title}\nLocation: ${info.event.extendedProps.location}\n\n${info.event.extendedProps.description}`);
        }
    });
    calendar.render();
}

function loadUpcomingEvents() {
    const container = document.getElementById('upcomingEventsList');
    const sortedEvents = [...mockData.events].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    container.innerHTML = sortedEvents.map(event => `
        <div class="event-item">
            <div class="event-date">${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • ${event.time}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
        </div>
    `).join('');
}

function openAddEventModal() {
    document.getElementById('addEventModal').classList.add('active');
}

function closeAddEventModal() {
    document.getElementById('addEventModal').classList.remove('active');
    document.getElementById('addEventForm').reset();
}

function addEvent(e) {
    e.preventDefault();
    
    const newEvent = {
        title: document.getElementById('eventTitle').value,
        date: document.getElementById('eventDate').value,
        time: document.getElementById('eventTime').value,
        location: document.getElementById('eventLocation').value,
        description: document.getElementById('eventDescription').value
    };
    
    mockData.events.push(newEvent);
    
    if (calendar) {
        calendar.addEvent({
            title: newEvent.title,
            start: `${newEvent.date}T${newEvent.time}`,
            extendedProps: {
                location: newEvent.location,
                description: newEvent.description
            }
        });
    }
    
    loadUpcomingEvents();
    closeAddEventModal();
    alert('Event added successfully!');
}

function changeProfilePic() {
    // trigger hidden file input to choose an image
    const input = document.getElementById('profilePicInput');
    if (input) input.click();
}

// handle file selection for profile pic
document.addEventListener('DOMContentLoaded', function() {
    const profileInput = document.getElementById('profilePicInput');
    if (profileInput) {
        profileInput.addEventListener('change', function(e) {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file.');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(evt) {
                const dataUrl = evt.target.result;
                // update UI
                const profileImg = document.getElementById('profilePic');
                const headerImg = document.getElementById('headerProfilePic');
                if (profileImg) profileImg.src = dataUrl;
                if (headerImg) headerImg.src = dataUrl;
                // persist to localStorage
                const profile = JSON.parse(localStorage.getItem('campverseProfile') || '{}');
                profile.image = dataUrl;
                localStorage.setItem('campverseProfile', JSON.stringify(profile));
                alert('Profile picture updated!');
            };
            reader.readAsDataURL(file);
        });
    }

    // load saved profile image if present
    loadSavedProfileImage();
});

function loadSavedProfileImage() {
    const profile = JSON.parse(localStorage.getItem('campverseProfile') || '{}');
    if (profile && profile.image) {
        const profileImg = document.getElementById('profilePic');
        const headerImg = document.getElementById('headerProfilePic');
        if (profileImg) profileImg.src = profile.image;
        if (headerImg) headerImg.src = profile.image;
    }
}

function saveBio() {
    const bio = document.getElementById('bioText').value;
    alert('Bio saved successfully!');
}

function openSettings() {
    document.getElementById('settingsModal').classList.add('active');
}

function closeSettings() {
    document.getElementById('settingsModal').classList.remove('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

function updateAccount() {
    alert('Update Account:\n\nThis feature allows you to update your email, password, and other account details.\n\nIn the full version, you would be able to edit your account information here.');
}

function deleteAccount() {
    const confirm = window.confirm('Are you sure you want to delete your account?\n\nThis action cannot be undone!');
    if (confirm) {
        alert('Account deletion requested.\n\nIn the full version, your account would be scheduled for deletion after a verification email.');
    }
}

function toggleChatbot() {
    document.getElementById('chatbotWindow').classList.toggle('active');
}

function handleChatKeypress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('chatbotMessages');
    
    messagesContainer.innerHTML += `
        <div class="user-message">
            <p>${message}</p>
        </div>
    `;
    
    chatHistory.push({ role: 'user', content: message });
    if (chatHistory.length > MAX_CHAT_HISTORY * 2) {
        chatHistory = chatHistory.slice(-MAX_CHAT_HISTORY * 2);
    }
    
    input.value = '';
    
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        messagesContainer.innerHTML += `
            <div class="bot-message">
                <p>${botResponse}</p>
            </div>
        `;
        chatHistory.push({ role: 'bot', content: botResponse });
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('event') || msg.includes('happening') || msg.includes('upcoming')) {
        const upcomingEvents = mockData.events.slice(0, 3);
        const eventList = upcomingEvents.map(e => `• ${e.title} on ${e.date} at ${e.location}`).join('\n');
        return `Here are the upcoming events at JIIT:\n${eventList}\n\nCheck the Events section for more details!`;
    }
    
    if (msg.includes('building') || msg.includes('where is') || msg.includes('location') || msg.includes('abb') || msg.includes('aryabhatt')) {
        const buildings = mockData.buildings.filter(b => b.type === 'academic' || b.type === 'study');
        return `JIIT Noida has ${mockData.buildings.length} main buildings including:\n• ${buildings.map(b => b.name).join('\n• ')}\n\nCheck the Campus Map to see their exact locations!`;
    }
    
    if (msg.includes('attendance') || msg.includes('portal') || msg.includes('webkiosk')) {
        return "You can check your attendance on the official JIIT Web Portal! Click the 'JIIT Portal' button in the header to access webkiosk. Login with your enrollment number to view attendance, marks, and grades. Remember: minimum 75% attendance is required!";
    }
    
    if (msg.includes('pyq') || msg.includes('previous year') || msg.includes('question paper')) {
        const pyqList = mockData.pyqs.slice(0, 2).map(p => `• ${p.title} (${p.subject})`).join('\n');
        return `I found ${mockData.pyqs.length} PYQs in the Study Material section:\n${pyqList}\n...and more! Check the Study Material section to download them.`;
    }
    
    if (msg.includes('notes') || msg.includes('lecture')) {
        const notesList = mockData.notes.slice(0, 2).map(n => `• ${n.title} by ${n.professor}`).join('\n');
        return `Here are some lecture notes available:\n${notesList}\n...and ${mockData.notes.length - 2} more! Visit the Study Material section to access all notes.`;
    }
    
    if (msg.includes('library') || msg.includes('lrc') || msg.includes('book')) {
        return "The Learning Resource Centre (LRC) is located in ABB-III! It has 35 air-conditioned reading spaces, thousands of books, e-journals, and is open 24/7 during exam season. Best study spot: 3rd floor near the window! 📚";
    }
    
    if (msg.includes('hostel') || msg.includes('accommodation')) {
        return "JIIT has 5 hostels (H1-H5) - 2 for boys and 3 for girls. All rooms have AC, Wi-Fi, study tables, and almirah. Hostel fees range from ₹60,000-₹1,10,000/year including mess. Check the Campus Map to see hostel locations!";
    }
    
    if (msg.includes('cafeteria') || msg.includes('food') || msg.includes('mess') || msg.includes('annapurna')) {
        return "Annapurna Building is our main cafeteria with capacity for 930 students! It serves breakfast, lunch, and dinner. There's also a vending machine near the LRC 3rd floor for late-night snacks. 🍕";
    }
    
    if (msg.includes('sports') || msg.includes('gym') || msg.includes('fitness')) {
        return "The Sports Complex has indoor facilities (gym, table tennis) and outdoor fields for cricket, football, basketball, volleyball, and badminton. Separate gyms for boys and girls. Free mock interview sessions also happen here during placement season! 💪";
    }
    
    if (msg.includes('friend') || msg.includes('kashvi') || msg.includes('anushka') || msg.includes('yuvanshi')) {
        return `Your friends ${mockData.friends.map(f => f.name).join(', ')} are on campus! Check the Campus Map to see their current locations. You can also view them in your Profile section.`;
    }
    
    const responses = {
        study: [
            "For effective studying, try the Pomodoro Technique: 25 minutes of focused study followed by a 5-minute break. The LRC 3rd floor is perfect for this!",
            "Active recall and spaced repetition work great! Use the PYQs from Study Material section to practice. Don't just read - test yourself!",
            "Create a study schedule using our Events calendar. Consistency beats marathon sessions. Check out the study groups in Feed section!"
        ],
        exam: [
            "Start early and practice with our PYQs! We have 4 previous year papers available in Study Material section.",
            "During exams, read all questions first and tackle what you know. Also, maintain 75% attendance - check it on JIIT Portal!",
            "Get enough sleep before exams. A well-rested brain performs much better! The LRC is open 24/7 if you need late-night study space."
        ],
        assignment: [
            "Break assignments into smaller tasks. Check if there are any study groups in the Feed section looking for partners!",
            "Start early! Last-minute work causes stress. Use the Events calendar to mark your assignment deadlines.",
            "Ask classmates for help. Join the CS Study Group or Project Partners chat from the Feed section!"
        ],
        placement: [
            "Placement season is here! Check the Feed for updates on company drives. Free mock interviews happen at Sports Complex every evening.",
            "Keep your resume updated and practice DSA regularly. Check upcoming Career Fair events in the Events section!",
            "Top companies like Google, Microsoft, and Amazon recruit from JIIT. Stay active in placement-related group chats!"
        ]
    };
    
    for (const [key, responseArray] of Object.entries(responses)) {
        if (msg.includes(key) || msg.includes(key + 's') || msg.includes(key + 'ing')) {
            return responseArray[Math.floor(Math.random() * responseArray.length)];
        }
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello Mahi! I'm CampusGPT, your AI assistant for JIIT Noida. Ask me about events, buildings, attendance, study materials, campus facilities, or study tips!";
    }
    
    if (msg.includes('thank') || msg.includes('thanks')) {
        return "You're welcome! Happy to help with anything campus-related! 😊";
    }
    
    if (msg.includes('help') || msg.includes('what can you do')) {
        return "I can help you with:\n• Upcoming events & deadlines\n• Campus building locations\n• Attendance & JIIT Portal access\n• Study materials (PYQs & notes)\n• Campus facilities (library, hostel, cafeteria, sports)\n• Study tips & exam preparation\n\nWhat would you like to know?";
    }
    
    return "I can help with campus info, events, study materials, attendance, and study tips! Try asking about upcoming events, building locations, PYQs, or how to check attendance on the portal. What would you like to know?";
}

function updateFeedPreview() {
    const preview = document.getElementById('feedPreview');
    // Prefer latest saved post from localStorage (if any), otherwise fallback to mockData
    const savedPosts = JSON.parse(localStorage.getItem('campversePosts')) || [];
    if (savedPosts.length > 0) {
        const latest = savedPosts[0];
        preview.textContent = `${latest.title}: ${latest.content.substring(0, 60)}...`;
        return;
    }

    if (mockData.posts.length > 0) {
        const latest = mockData.posts[0];
        preview.textContent = `${latest.author}: ${latest.content.substring(0, 60)}...`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').checked = true;
    }
    
    updateFeedPreview();
    
    window.onclick = function(event) {
        const settingsModal = document.getElementById('settingsModal');
        const addEventModal = document.getElementById('addEventModal');
        
        if (event.target === settingsModal) {
            closeSettings();
        }
        if (event.target === addEventModal) {
            closeAddEventModal();
        }
    };

    // JIIT Shelf widget handlers
    const openShelfBtn = document.getElementById('openShelfBtn');
    const shelfModal = document.getElementById('shelfModal');
    const closeShelfBtn = document.getElementById('closeShelfBtn');
    const openShelfNew = document.getElementById('openShelfNew');

    if (openShelfBtn) openShelfBtn.addEventListener('click', () => {
        shelfModal.classList.add('active');
        shelfModal.setAttribute('aria-hidden', 'false');
        // lazy-load iframe src if desired (already set in HTML) 
    });
    if (closeShelfBtn) closeShelfBtn.addEventListener('click', () => {
        shelfModal.classList.remove('active');
        shelfModal.setAttribute('aria-hidden', 'true');
    });
    if (openShelfNew) openShelfNew.addEventListener('click', () => {
        // open the live JIIT Shelf in a new tab (user-provided URL)
        window.open('https://jiitshelf.vercel.app/', '_blank');
    });
});
