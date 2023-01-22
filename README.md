# Text to Image using openai

Both the client-side and server-side are uploaded here to provide the code only. It is not deployed anywhere.

[Youtube]('https://www.youtube.com/channel/UCWCAPNPlxFFDv_ESS-K4zZw') |
[Instagram]('https://instagram.com/ig_codez')

## How to use this repository in your device

- Clone this repository
- Open the clone folder in any code editor like VS code or any other.

### Client side

- --

- Open a new terminal and type `cd client`
- type npm install *To install all the dependencies*
- Now run the app using `npm run dev`

### Server side

- --

- Open the new terminal again (2nd one)
- Type npm install
- Go to the OpenAi official website. [OpenAi]('https://openai.com/api/') and create a new account.
- Go to the profile and there go to `View API keys` page.
- Click on `Create new secret key`
- Copy the key.
- Now inside the server folder create a new file `.env`
- inside `.env` type the following:

``` javascript
OPENAI_API_KEY: "YOUR API KEY"
```

- Now type in the terminal `npm run dev`.

`Note` - If server is already running at 5000 or 3000 PORT then change the PORT.

`Thank You` - [@ezfrontendlive]('https://www.youtube.com/channel/UCWCAPNPlxFFDv_ESS-K4zZw') yt channel
