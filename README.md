# post-relay

##Create a Shortened URL to Trigger a flow

1. Build some flow with a trigger in it
2. Select the trigger and grab its Webhook URL
3. Add your webhook URL to this link, adding &onload=true to the end to trigger on load of page.

```

fracture.cc/post-relay/index.html?uri=WEBHOOK-URL-GOES-HERE

or

fracture.cc/post-relay/index.html?uri=WEBHOOK-URL-GOES-HERE&onload=true

```

Then go to bit.ly to shorten your URL

##Trigger by scanning Meshtag

1. Go to http://www.meshtag.com/ and download the app
2. Follow the app's instruction to set up a new meshtag
3. Use the shortened URL made in the other steps for your meshtag.

VOILA!
Next time someone scans that meshtag pattern you created your trigger will get triggered either on load of the page or by pressing the POST button that shows.

Example:


somedomain.com/index.html?uri=SOME-WEBHOOK

Add onload=true to trigger on load, and then whenever you press the post button.

somedomain.com/index.html?uri=SOME-WEBHOOK&onload=true
