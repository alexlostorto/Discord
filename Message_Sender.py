#   __  __                                  ____                 _
#  |  \/  | ___  ___ ___  __ _  __ _  ___  / ___|  ___ _ __   __| | ___ _ __
#  | |\/| |/ _ \/ __/ __|/ _` |/ _` |/ _ \ \___ \ / _ \ '_ \ / _` |/ _ \ '__|
#  | |  | |  __/\__ \__ \ (_| | (_| |  __/  ___) |  __/ | | | (_| |  __/ |
#  |_|  |_|\___||___/___/\__,_|\__, |\___| |____/ \___|_| |_|\__,_|\___|_|
#                              |___/

# CREDITS
# Author: Alex lo Storto
# Github: https://github.com/alexlostorto
# Website: https://alexlostorto.github.io/

# All code is mine and subject to the MIT License

import requests
import multiprocessing as mp


AUTHORIZATION = ''
CHANNEL_CODE = ''

header = {
    'authorization': AUTHORIZATION
}


def main():
    for i in range(100):
        payload = {
            'content': i
        }

        r = requests.post(
            f'https://discord.com/api/v9/channels/{CHANNEL_CODE}/messages', data=payload, headers=header)

        print(r.status_code)


if __name__ == "__main__":
    main()
