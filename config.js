const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121056093";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_07_37_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDYyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTcyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOE9yZndJSm05cSt1dFJ1akZLMWdxQldnTUdVRmNMMGJWUUJ3ODB6RCt5QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0h3ZWFQSkpSbDZpbnVjWFphbzlqUVwiLFxuICBcInBob25lSWRcIjogXCI4ODExODZiYS0wMzY1LTQ4YTEtYWY4Ny05MmZiYWEyOWZlNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTMzLFxuICAgICAgMjE1LFxuICAgICAgOTMsXG4gICAgICAzNyxcbiAgICAgIDkxLFxuICAgICAgMTcwLFxuICAgICAgMTYsXG4gICAgICA3MyxcbiAgICAgIDE0MCxcbiAgICAgIDIwOSxcbiAgICAgIDc2LFxuICAgICAgMjM1LFxuICAgICAgNjYsXG4gICAgICAxMixcbiAgICAgIDE5NyxcbiAgICAgIDI3LFxuICAgICAgMjM5LFxuICAgICAgNixcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICA3OSxcbiAgICAgIDc2LFxuICAgICAgMjYsXG4gICAgICAyMzMsXG4gICAgICAxOTgsXG4gICAgICAwLFxuICAgICAgMTMxLFxuICAgICAgMTIzLFxuICAgICAgMTY0LFxuICAgICAgOTIsXG4gICAgICAxLFxuICAgICAgMTIxLFxuICAgICAgODUsXG4gICAgICAxOTgsXG4gICAgICAxMCxcbiAgICAgIDEyOSxcbiAgICAgIDc1LFxuICAgICAgMjQ4LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg4MTdFWDJUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTIxMDU2MDkzOjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzY1MjAyODE3NDM4MTo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeW4wWFVRcG9tMXN3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZja1ZHamkwVGEvVWV4dmVwYVBTVTZwcnkzbjlueWhQMjVpem9GU3B6WGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS1RCdTR5bzhWem04TDJUS3pvdm5oem9SaGwzSWhCQ1FwOVhrSFl1b01kWVN4VjFIQlg0T2pTWjZUd2s4R0g3K3VoNkRySmxqU2tsd3U4bUt6WUF5Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic215SVN5NmFZM3AraVkzQzZFWDgvMVh4b2UwTFliQUdDY0ZNTmhJNDVZVGp4WXgxWjNvbE00MWVmRXRzME5DcVBOdVh4eHdzcVhYT0pEZDlTbXU2Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyMTA1NjA5Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQzNzAzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFNRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU1ELmpzb24iOiAie1wia2V5RGF0YVwiOlwia0RKLzdqODA5VTJJdDg5RnpmVHI3N283d25oMlEydEcrU0cxYStIK1N2bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDY2OTkwMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODQzNzAzNzk0OFwifSIKfQ==|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "📺",
  packname: process.env.PACK_NAME || "suhail-md❤",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "📺",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
