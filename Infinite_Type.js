//   ___        __ _       _ _         _____
//  |_ _|_ __  / _(_)_ __ (_) |_ ___  |_   _|   _ _ __   ___ 
//   | || '_ \| |_| | '_ \| | __/ _ \   | || | | | '_ \ / _ \
//   | || | | |  _| | | | | | ||  __/   | || |_| | |_) |  __/
//  |___|_| |_|_| |_|_| |_|_|\__\___|   |_| \__, | .__/ \___|
//                                          |___/|_|

// CREDITS
// Author: Alex lo Storto
// Github: https://github.com/alexlostorto
// Website: https://alexlostorto.github.io/

// All code is mine and subject to the MIT License

const AUTHORIZATION = '';
const CHANNEL_CODE = '';
const WAIT = 8000;  // Time to wait between each POST request


function infiniteType() {
    fetch(`https://discord.com/api/v9/channels/${CHANNEL_CODE}/typing`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB",
            "authorization": AUTHORIZATION,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-debug-options": "bugReporterEnabled",
            "x-discord-locale": "en-GB",
            "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDA4Iiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDQiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLUdCIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTY4MTQ3LCJuYXRpdmVfYnVpbGRfbnVtYmVyIjoyNzc5OCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
        },
        "referrer": "https://discord.com/channels/@me/${CHANNEL_CODE}",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    setTimeout(function () {infiniteType();}, WAIT);
}

infiniteType()