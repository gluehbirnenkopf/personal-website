## javascript-cv

The Site is build and deployed using netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3847d3ad-538b-462d-b1c6-4112882d8c4c/deploy-status)](https://app.netlify.com/sites/stoic-jepsen-37d71d/deploys)

This is my personal website built using ReactJS and Bulma as the CSS framework.

The personal information on the website is populated from a json file that follows the JSON Resume open source standard.

## Customizing it
Feel free to fork this project and update it with your own information and style. Just update the ´src/resume.json´ with your personal information.

If you improve the app in any way a PR would be very apreciated ;)

Update the resume.json with your personal information (check JSON Resume)
Install dependencies and run build command:

```bash
npm install
npm run build
```
You can also test the app with a development server, just run:

```bash
npm start
```

A can be created based on pdf/index.js settings
```bash
nohup npm start & sleep 10 && node pdf/pdf.js 
```
## License
MIT
