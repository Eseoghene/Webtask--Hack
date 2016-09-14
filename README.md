# Saucelabs to Trello channel


A simple IFTT channel that creates a Trello Card anytime an automated test case run Fails on saucelabs

######This is so anyone with Trello access can analyse the logs and failure cause outside Saucelabs

This IFTT Channel was created using the Maker Channel that allows you call external REST APIs on request.

**IF** 'Failed testcase event is trigerred, **THEN** create Trello Card with Test Details

The IFTT event is triggered using [webtask.io](http://webtask.io) as a GET event when a testcase fails

When triggered, the event gets the failed test details from Saucelabs REST API, and posts it to the IFTT event API, which creates a TrelloCard. 

##How to run:
 1. Download this repository
 2. Go to the root directory of this repository
 Run in terminal or cmd prompt

```
npm install
npm install -g mocha

```

3. Create an account on IFTT and create new recipe

4. Chose Maker Channel in the trigger channel box
5. Select recieve webrequest , enter event name and click create Trigger
6. Select Trello in the Action Channel box and click create card
7. You will have to create and link your Trello account to IFTT if you do not have one.
8. Select Trello Board to create card
9. Enter List name
10. Enter this text at Title

>The test "{{Value1}}" Failed on Saucelabs

11. Enter this text at description
 
>Testname: {{Value1}}<br>
>Video URL: {{Value2}}<br>
>Test Log: {{Value3}}

12. open webtask.js in any text editor

Locate this line of code 
`http://maker.ifttt.com/trigger/test/with/key/fx95xlcNnQw9_zzIyobxv` 

Replace `test` with the IFTT event name and `fx95xlcNnQw9_zzIyobxv` with your Maker Channel key. 

To get Key visit [IFTT Maker Channel](https://iftt.com/maker)

13. Save the file and close text editor

To try, run this command in your terminal or command prompt
`mocha visitvalidtitle.js -t 30000`


A trello Card should be created containing

Testname: 
Video URL: 
Test Log: 





