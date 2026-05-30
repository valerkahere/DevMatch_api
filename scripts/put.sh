#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/f7ef2f2b-f0b6-4832-9882-45f153ec4d57 \
	-H "Content-Type: application/json" \
	-d '{
	"name": "Braai",
	
	"description": "bla bla bla This JavaScript coder is a master of syntax, a weaver of the web, and a connoisseur of coffee. In the morning, I like to make a wheatgrass juice and set aside an hour to read up on the latest JS releases before starting my day. There'\''s just something electric about a fresh npm install, you know? Want to contribute to a new universe together?"
}'
