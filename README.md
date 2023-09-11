# branch-international-assignment

## Additional Features Implemented

1. Figure out a scheme to help agents divide work amongst themselves, and to prevent multiple agents working on the same message at once.
2. Implement a canned message feature that allows agents to quickly respond to enquiries using a set of pre-configured stock messages.
3. Make the agent UI (and/or the customer-facing UI) more interactive by leveraging websockets or similar technology, so that new incoming messages can show up in realtime.
4. Implement a canned message feature that allows agents to quickly respond to enquiries using a set of pre-configured stock messages

## Initial Setup

Make sure you have node.js and npm installed on you machine

## Clone 

clone the repository on your system using the ```git clone``` command


## branch-backend setup

Change directory to ```branch-backend```

create a ```.env``` file and add the field mongo_uri to it

assign ```mongo_uri=``` equal to the mongo uri sent in the mail

Run the following command to install the node modules

```npm install```

Run the following command to get the backend started

```npm start```

The backend should be up and running on localhost:8080

## branch-frontend setup

Change directory to ```branch-frontend```

Run the following command to install the node modules

```npm install```

Run the following command to get the backend started

```npm start```

The frontend should be up and running on localhost:3000. Open your browser and go to http://localhost:3000
