# Geocoder

Geocode addresses using Google API

## Set up

1. Clone repository.
2. Create .env file in root folder of the project with this format:

`
GOOGLE_API_KEY="<YOUR_API_KEY>"
`

Follow [this guide](https://developers.google.com/maps/documentation/geocoding/get-api-key) and replace <YOUR_API_KEY>

3. Install the CLI globally running `npm i -g .` in root folder of the project.
4. Run `geocode -a "<ADDRESS_TO_GEOCODE>"` anywhere
