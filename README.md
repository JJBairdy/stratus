# Stratus

An unpacked chrome extension for identifying ATT&CK techniques in text on a web page.
 

Stratus allows you to visit a web page (we suggest some CTI pieces from Unit 42 or Secure List) and launch the extension to highlight were Mitre techniques are being described or groups and malware mentioned. The project is positioned as a handrail for getting to grips with Mitre's ATT&CK Framework.

## Get the Chrome Extension

The Chrome Extension is published here - * [Chrome Store](https://chrome.google.com/webstore/detail/stratus/jjpceekakjijeamhoeedjfgmhgbefcmp).

### Behind the Project

Stratus is just a bunch of regexes that look for word indicators or strings that would sugest a technique from Mitre's ATT&CK framework is being described. It looks for matches on a web page and highlights them in text (in Yellow for a word match and Blue for a string/sentence match). The popup provides an overview of techniques.

Regexes for Malware and Actor Groups is also included!

Currently it includes updates to the Mitre Framework from April 2019.

### Using the Unpacked Version

Pull the repo into a folder.

Visit chrome://extension/

Click Developer Mode

Click 'Load Unpacked' and select the folder

### Other Projects

I have another Alpha project which uses the Stratus regexes (found in the content.js) on an RSS web scraper. It seeks to identifies techniques, malware and actor groups in the web page similar to Stratus. If it recognises a technique being used that has not previously been associated to a group or malware, it alerts the user.
