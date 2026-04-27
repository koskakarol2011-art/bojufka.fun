

const DISCORD_CONFIG = {
    WEBHOOK_URL: 'https://discord.com/api/webhooks/1462463440928112833/rjgyb5K7iEpByPk7_QbWxdX8NonjeqTsJ5skjHWJQpZFsFA8UWEpBuxkmhGf87JlJ77A',
    
   
    CHANNEL_IDS: {
        trialsupport: 'channel_id_here', // Optional: specific channel for trialsupport
        hounds: 'channel_id_here',       // Optional: specific channel for hounds
        sasp: 'channel_id_here',         // Optional: specific channel for sasp
        organizacje: 'channel_id_here'   // Optional: specific channel for organizacje
    },
    
    
    ENABLE_WEBHOOK: true,
    
    // Fallback email notification (if webhook fails)
    FALLBACK_EMAIL: 'budzikxdxd@gmail.com'
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = DISCORD_CONFIG;
}