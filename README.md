jira_timetorelease
==================

Atlassian JIRA js-widget, that shows number of days till the release.

JIRA requires too much effort to write a full-value plugin, so I decided to make a js-widget, that shows number of days till the release.

Usage:

1. Enable text gadget according to instruction — https://confluence.atlassian.com/display/JIRA/Adding+the+Text+Gadget
2. Create a new text gadget on your dashboard and insert into it full text of timeto.js

Customize:
The only feature, which you can customize, is the name of your project.
Change it in line 19 — "xhr.open("GET", "/rest/api/2/project/YOUR_PROJECT_NAME/versions/", false);"

For now script contains only Russian holidays, change it as you wish.
