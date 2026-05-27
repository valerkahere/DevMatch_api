#!/bin/bash
# NOTE: ID CHANGES AT RUNTIME WITH uuid()
curl -X GET -i http://localhost:3000/profiles/4c85ab8c-d1cf-4d7d-aa42-8e4bc1b135d7 \
  -H "Content-Type: application/json" \
