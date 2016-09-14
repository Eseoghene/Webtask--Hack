# Saucelabs to Trello channel


A simple IFTT channel that creates a Trello Card anytime an automated test case run Fails on saucelabs

######This is so anyone with Trello access can analyse the logs and failure cause outside Saucelabs

This IFTT Channel was created using the Maker Channel that allows you call external REST APIs on request.

**IF** 'Failed testcase event is trigerred, **THEN** create Trello Card with Test Details

The IFTT event is triggered using [webtask.io](http://webtask.io) as a GET event when a testcase fails

When triggered, the event gets the failed test details from Saucelabs REST API, and posts it to the IFTT event API, which creates a TrelloCard. 

##How to install:
 1. Download this repository
 2. Go to the root directory of this repository and run

```
npm install
npm install -g mocha
npm i -g wt-cli
```








