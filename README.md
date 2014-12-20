jira_timetorelease
==================

Atlassian JIRA js-widget shows number of days till the release.

Usage:

1. Enable text gadget according to instruction — https://confluence.atlassian.com/display/JIRA/Adding+the+Text+Gadget
2. Create a new text gadget on your dashboard and insert into it full text of timeto.html

Customize:

The only feature, which you can customize, is the name of your project.
Change it in line 19 — "xhr.open("GET", "/rest/api/2/project/YOUR_PROJECT_NAME/versions/", false);"

Script contains only Russian holidays, change it if you wish.

Look & Feel:

![Example](http://i.imgur.com/bcCOe8d.png)
