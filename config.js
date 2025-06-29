import dotenv from "dotenv";
dotenv.config();

const conf = {
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "on",
  AUTO_LIKE: process.env.AUTO_LIKE || "on",
  AUTO_READ_DM: process.env.AUTO_READ_DM || "off",
  AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "off",
  ADM: process.env.ANTI_DELETE || "on",
  ON: process.env.OWNER_NAME || "FLASH-MD",
  ANTICALL: process.env.ANTICALL || "off",
  ANTIPROMOTE: process.env.ANTIPROMOTE || "off",
  ANTIDEMOTE: process.env.ANTIDEMOTE || "off",
  ANTILINK: process.env.ANTILINK || "off",
  ANTILINK_ACTION: process.env.ANTILINK_ACTION || "delete",
  timezone: process.env.TIME_ZONE || "Africa/Nairobi",
  PRESENCE_DM: process.env.DM_PRESENCE || "typing",
  PRESENCE_GROUP: process.env.GROUP_PRESENCE || "paused",
  MODE: process.env.MODE || "private",
  AV: process.env.AV || "on",
  PREFIXES: process.env.PREFIX !== undefined 
  ? process.env.PREFIX.split(",").map(p => p.trim()) 
  : ["+"], 
  Session: process.env.SESSION || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01LTE83SlA2dlpCTklhM2l0T2lvR0UyNFViZ3Ura1ptekF2aUdTNG9XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZitHMi8wc3JsdjFxVllFOS9NSzY5d201WlR3dktPN0JVUmJCRGlqUGhTQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSm5mSDNxNGVlcHdkWVNSZmlFN0dLMEh3QXl3NmV6VEZFV3NnNzVsc0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UnJ2Z0Fhanc3eTQ1V2o2aWNSaTR4V3BqZ1RvQi9WK3FocVJDL0U3U3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOTUJtSVVVUE5GZWozYTRtVmYyRWtGd3lBek1iaUR5Q1ZnTllFb0Uzbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGR1lRZUdmNUFzNWhzSU1tM0FWVXcyUFhDRURDdVNoMnBFWWNlOTZ6Q289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0toK2lWS2pVVXJrTit3OWh0TldJY0YyVHk3YWRJMWNRVTBHaUlnRDQxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzNvUzRPYTBHYm92VUhRQkVndzRUZWJ3dWJUZkNmcmVUTmVDSGlwcml5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVDVlR4MndqSnNqaTliN0xhdGRZNVZ3c0RMc3RvRGxRdFhWQVpzb2lUNmlpbm51ZG9EbTMxOWhPa3VDUVV2WDJFVWUzNWlrR2FPb0NNS01rejYzRkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IndSMnlkNlhlSkJWdHBqbnA5M1NyZlo4cG1aa0pUZjRKS0wyd0hHeUxRNHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NDY4NDExNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjQ3MTk3QTRDRjY4RUZERTA3MUM1MDFCQzYyQkY3MzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTMwMDc0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NDY4NDExNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEI4NTE0NTcwREExMjE2ODg3ODUxRjdENjY1MkUxNDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTMwMDc0OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NDY4NDExNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTU0M0IxNjdEOEY1N0UxQzY2QjY5QzIyMTA4RDVCOTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTMwMDc4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMUhLVDlHOEMiLCJtZSI6eyJpZCI6IjIyNTQ2ODQxMTY4OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngeC8huCzhOC+gOqqkeqqueGthCDgvJLhj4nhjr7hj57hjqDhjqXhj4Dhjr4g4Y6q4Y+B4Y6+4Y+V4LyS4L2y4L6A8J2Qi/CdkIjwnZCG8J2Qh/CdkJPgv5DljY3kupfhrIrhrYThrIrhrYQiLCJsaWQiOiIzNTc4MTkwOTQyNjQwODoyMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYK3hJQUNFUGJya01JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBjVnJnMmF0NXNRWFFVdTZ2Znl3Z1hKMTBCN09vaTdGL0lRd1BMZVpvaVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJHaVNtNEFWVlNHd2xBRmQ5dittTDJYajJNNVZvTTVSR1VtUk4yUE82blBJYmN3VVM2OTRGbGlCbUp0bnhPYk50alBJT1NjUUEwenk4M3VKYy94aEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwRWRjSHJtVStUYmEzdkJtVTZYSXhpNForeXQrakJYc1RnWnNHM3FHM1BKRTc0WVE5djRVOTBuenE5Nis4TW5qZmFiRlNybU55OXRDRVk3by84NmNCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTQ2ODQxMTY4OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQzRmE0Tm1yZWJFRjBGTHVyMzhzSUZ5ZGRBZXpxSXV4ZnlFTUR5M21hSWwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTMwMDc0MCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJVUyJ9",
  NUMBER: process.env.OWNER_NUMBER || "+2250546841168",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""
};

export default conf;
