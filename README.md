<h1 align="center">Discord</h1>

This repository includes 2 programs:

```python
# Files
[
'Message_Sender.py',
'Infinite_Type.js'
]
```

## How it Works

#### Message Sender

This program is written in Python and automatically sends messages repeatedly at certain intervals. To set it up, you will need to get the AUTHORIZATION token and the CHANNEL_CODE. These can be found in the developers console when you send a message.

```python
# Sends 100 messages to the specified channel
def main():
    for i in range(100):
        payload = {
            'content': i
        }

        r = requests.post(
            f'https://discord.com/api/v9/channels/{CHANNEL_CODE}/messages', data=payload, headers=header)

        print(r.status_code)
```

#### Infinite Type

This program is written in Javascript and repeatedly sends 'typing' POST requests every 8 seconds. This will make it look like you are constantly typing. To use the program, copy and paste the code into the developer console while on the Discord website/app.

```javascript
# Repeatedly sends 'typing' POST requests
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

    setTimeout(function () {infiniteType();}, 8000);
}
```

## Credits

Everything is coded by Alex lo Storto

Licensed under the MIT License.
