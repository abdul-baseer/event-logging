# EVENT-LOGGING
Custom event logging APIs for tracking user journeys

## Guideline
- Clone repo
- Run 'npm start --url' + provide your mongo db url in which you want events to be stored.

## POST /event [For logging events]

Request: [JSON]

{
	logLevel: This field can be one of the following depending on event [INFO, WARNING, ERROR],
	eventType: This field will be the event which is being logged ex. LOGIN, LOGOUT etc,
	userPrincipal: User identifier in your application ex. CNIC, Username etc,
	eventDetail: This filed will contain the details for the event you are logging.
}

Response: [JSON]

Success
{
    "statusCode": "0",
    "message": "Success"
}

Failure
{
	"statusCode": "500",
	"message": "Something went wrong"
}

## GET /events [For getting all logged events]

### Query Parameters
logLevel, eventType, userPrincipal

Response: [JSON]

{
        "_id": "5c2604b7e60ed626c8efcef1",
        "logLevel": "INFO",
        "eventType": "LOGIN",
        "userPrincipal": "4220172416173",
        "eventDetail": "User Logged in successfully."
    }