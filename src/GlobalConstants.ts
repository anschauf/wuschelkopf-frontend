
// anchors
export const homeRoute = 'home'
export const roadmapRoute = 'roadmap'
export const rarityRoute = 'rarity'
export const teamRoute = 'team'
export const faqRoute = 'faq'

// Smart contract constants
export const maxNumberOfMint = 5
export const mintingFee = 0.04 // must be equal to 'PRICE' defined in the smart contract

// Countdown
export const countDownMounth =  process.env.REACT_APP_MINT_DROP_MOUNTH ? parseInt(process.env.REACT_APP_MINT_DROP_MOUNTH) : 7
export const countDownDay = process.env.REACT_APP_MINT_DROP_DAY ? parseInt(process.env.REACT_APP_MINT_DROP_DAY) : 10


// Links
export const opensea_collection_url = process.env.REACT_APP_COLLECTION_URL
export const discord_channel_url = 'https://discord.gg/H7E2teR9Bh'
export const twitter_channel_url = 'https://twitter.com/WuschelkopfN'