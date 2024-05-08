# DEADSHOT.io Desktop
These are unofficial Electron builds for the game DEADSHOT.io, with an integrated adblocker script, prevention of it being modified with hotkeys, etc. You can download them in the releases or build it on your own.

## How to build
1. Download the code
2. Install node.js
3. Run the following command:
```
npm install -g nativefier
```
5. Run the following command to build it:
```
nativefier "https://deadshot.io" \
--icon "icon.ico" \
--name "DEADSHOT.io" \
--inject "inject.js" \
--portable \
--user-agent "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0" \
--internal-urls ".*accounts.google.com.*|remotedesktop.google.com/access/" \
--enable-es3-apis \
--ignore-gpu-blacklist
```
6. (Optional) Open with Resource Hacker and replace the icon of the .exe
