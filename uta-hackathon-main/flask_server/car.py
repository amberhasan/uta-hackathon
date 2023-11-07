from pip._vendor import requests

PARTNER_TOKEN = "ee3213c6ec4b45498ad5dd287d4c6eec"
AUTHORIZATIONKEY = "ZDM2NGI2ZWYtNTE0Ny00NWNkLTgxNGEtMjM3ODE3NjgzOThi3"
CARMD_URL = "http://api.carmd.com/v3.0/fields?vin=<vin>&mileage=<mileage>&unit=<unit>"
CARMD_HEADER = {
    "content-type": "application/json",
    "authorization": PARTNER_TOKEN,
    "partner-token": AUTHORIZATIONKEY
}


class Car:
    def __init__(self, vin, mileage):
        self.vin = vin
        self.mileage = mileage
        

    def put_info(self):
        params = {
            "vin": self.vin,
            "mileage": self.mileage,
            "unit": "mi"
        }
        response = requests.get(url=CARMD_URL, params=params,
                                headers=CARMD_HEADER)
        response.raise_for_status()
        return response.json()