// Discord Authentication System for 67GG - Static Version

class DiscordAuth {
    constructor() {
        this.clientId = '1451597687060434972';
        this.init();
    }

    init() {
        this.checkExistingSession();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Login button event
        const loginBtn = document.getElementById('discord-login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.login());
        }

        // Logout button event
        const logoutBtn = document.getElementById('discord-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
    }

    login() {
        // Static hosting version - simulate login
        console.log('Simulating Discord login');
        
        // Create demo user
        const userData = {
            id: Math.floor(Math.random() * 1000000000000000000).toString(),
            username: 'User' + Math.floor(Math.random() * 1000),
            discriminator: '0001',
            avatar: null,
            email: 'user@example.com'
        };
        
        this.setUserSession(userData);
        this.updateAuthUI();
        this.showNotification('Zalogowano pomyślnie!', 'success');
    }

    logout() {
        // Clear local storage
        localStorage.removeItem('discord_user');
        localStorage.removeItem('discord_token');
        
        // Update UI
        this.updateAuthUI();
        
        // Show notification
        this.showNotification('Zostałeś wylogowany', 'success');
    }

    handleCallback() {
        // For static version, just clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    setUserSession(userData) {
        localStorage.setItem('discord_user', JSON.stringify(userData));
        localStorage.setItem('discord_token', 'mock_token_' + Date.now());
    }

    checkExistingSession() {
        const userData = localStorage.getItem('discord_user');
        if (userData) {
            this.updateAuthUI(JSON.parse(userData));
        } else {
            this.updateAuthUI();
        }
    }

    updateAuthUI(userData = null) {
        const authContainer = document.querySelector('.nav-auth');
        const loginBtn = document.getElementById('discord-login-btn');
        const userProfile = document.getElementById('user-profile');
        const userName = document.getElementById('user-name');
        const userAvatar = document.getElementById('user-avatar');
        const logoutBtn = document.getElementById('discord-logout-btn');

        if (userData && authContainer) {
            // User is logged in
            if (loginBtn) loginBtn.style.display = 'none';
            if (userProfile) userProfile.style.display = 'flex';
            
            if (userName) {
                userName.textContent = `${userData.username}#${userData.discriminator}`;
            }
            
            if (userAvatar) {
                const avatarUrl = userData.avatar 
                    ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
                    : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator) % 5}.png`;
                userAvatar.src = avatarUrl;
                userAvatar.alt = userData.username;
            }
        } else if (authContainer) {
            // User is not logged in
            if (loginBtn) loginBtn.style.display = 'flex';
            if (userProfile) userProfile.style.display = 'none';
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            ${type === 'success' ? 'background: #10b981;' : ''}
            ${type === 'error' ? 'background: #ef4444;' : ''}
            ${type === 'info' ? 'background: #3b82f6;' : ''}
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    getCurrentUser() {
        const userData = localStorage.getItem('discord_user');
        return userData ? JSON.parse(userData) : null;
    }

    isAuthenticated() {
        return !!localStorage.getItem('discord_user');
    }
}

// Initialize Discord Auth when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.discordAuth = new DiscordAuth();
    
    // Check if we're on callback page
    if (window.location.pathname.includes('/auth/callback')) {
        window.discordAuth.handleCallback();
    }
});