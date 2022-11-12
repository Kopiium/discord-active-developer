### What You Need Before You Follow Along.

- **Node** 16 or higher
- **Typescript**
- Patience and **Common-sense**
- oh! and **Git**

# Follow the steps bellow

#### Step 1. Go here > [Dev Portal Apps](https://discord.com/developers/applications) > Click on [New Application]
- After you do so you'll be prompted with this modal. Add a name and agree to discord's policy and click on create.
![Creating and Application](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20204128.jpg?raw=true)



### Step 2. Navigate to the bot section and click on the [Add Bot]
- If you already have a bot, skip this part.
![Creating and Application](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20204329.jpg?raw=true)

### Step 3. Now to get the bot token we just need to click on [Reset Token]
- You'll be prompted with a modal after you hit the button to confirm, just agree to it.
- If you have 2FA enabled you need to enter the OTP you have on your authenticator.

![Creating and Application](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20204613.jpg?raw=true)
### Step 3.1 Scroll down and enable these just incase, lest discord spanks you with a fat error code.

![](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20205642.jpg?raw=true)

### Step 4. Click on the [Oauth2] Section above [Bot] and go to the [URL Genereator] Sub section
- click on bot and application commands and give it admin perms
![](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20205821.jpg?raw=true)
- just like this 
![](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20205856.jpg?raw=true)

- then scroll down and copy the link thats given to you. paste that link in your browser and add the bot to your server
- after you add the bot to your server, its still offline. The next steps will walk you through how to launch it :)
![](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20205926.jpg?raw=true)

### Step 5. Clone The Repository. or... download it as a ZIP
- run this code in your terminal to clone the bot
```bash
git clone https://github.com/Kopiium/discord-active-developer.git
```
![terminal0](https://user-images.githubusercontent.com/94048100/201459318-ebf3c872-7e37-47de-a134-174587d9d8e7.jpg)

- then change into the directory where you downloaded the bot using this terminal command
```bash
cd <thefoldername>
```
![terminal1](https://user-images.githubusercontent.com/94048100/201459149-878f418a-d4a6-4f64-b03c-4d0939dddf69.jpg)
### Step 6. Install the needed packages.
- Run this command after you change into that terminal 
```bash
npm install
```
![terminal2](https://user-images.githubusercontent.com/94048100/201459154-ef92fd19-419c-4d99-997e-1e0a257e277c.jpg)

### Step 7. Open your IDE/CodeEditor of choice
- Once you opened the IDE/CodeEditor of choice, proceed to navigate to /core/config.ts
- Paste The Token you got from Step 3 in those quotes 
- Ignore the rest of the config, all you need is the token
![config](https://user-images.githubusercontent.com/94048100/201461392-cc8c6c32-89ad-484b-bad2-56d9f8a58198.jpg)

### Step 8. Running the bot
```bash
npm run compile
```
- Note: if it crashes just run `npm run dev` instead.
![terminal4](https://user-images.githubusercontent.com/94048100/201466603-45abe1b3-ff1f-4d49-801f-caa0ceaff012.png)

### Step 9. Using the command in the server.
- Just go to the server you added the bot in and do /badge
- Should reply with all good, if everything went well
![allgood](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20211302.jpg?raw=true)

### Step 10. Claim your badge from here > [[Active Dev](https://discord.com/developers/active-developer)]
- If your app is not on there, then don't worry. Its just your bot is not is registered yet.
- check back in 20-24hrs

![yayy](https://github.com/Kopiium/discord-active-developer/blob/main/assets/Screenshot%202022-11-11%20215226.jpg?raw=true)
- to those who didn't get it, here is what it looks like hehe
![sweetbadge](https://user-images.githubusercontent.com/94048100/201466902-bb8cc966-f8ff-43e0-bdb0-6f17956a4049.png)


## Ran into some issues? No worries
- Here is my Discord Tag: [Kopi#5150](https://discord.gg/JcmbfMSymT)
- Here is my Discord Server: [Netrunners+](https://discord.gg/JcmbfMSymT)
- You could also open up an issue
- #### If you're a python devoloper then I will make a python version soon
