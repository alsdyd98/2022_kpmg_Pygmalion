# Pygmalion : Shopping Assistance Service by Predicting Carbon Emission

[2022 KPMG Ideathon Challenge] Pygmalion

**Won 3rd place**

## Overview

![image](https://user-images.githubusercontent.com/80660346/154846724-b391d8fb-a289-4117-8c48-8be83b2b007f.png)

First of all, features of product are extracted from the company website and they are converted to JSON form. In this repository, it only cares about smartphones which we selected as our sample type.

Converted JSON file is passed to our API Gateway which will return carbon emission prediction. It goes to our server which contains our AI module. AI module consists of certain models which we pre-trained through some known smartphone data. It responses the carbon emission prediction and API returns such value.

To explain more about our AI module, it is mainly controlled by `phone-api.py` which handles API communication with models. `phone-api.py` first scales the given data with pre-trained scaler and then calls three AI-models: `production1.pkl`, `transport2.pkl`, `use3.pkl`. These are the models we have trained carbon emission of production, transport, use procedure respectively through some known data of Apple, Huawei, Google smartphones. Finally, it returns those three carbon emission predictions.

## URL for API (During Competition)

[JSON]
http://20.194.102.116:5000/predict/data

You can get the carbon emission prediction by giving JSON file of information of phones to /predict/data.
JSON file should be the form like below.
  ```shell
  [{
    "product": "GalaxyS22-256GB",
    "display(ppi)": 425.0,
    "battery(mAh)": 3700.0,
    "mass(g)": 167.0,
    "storage(GB)": 256.0,
    "release(yr)": 2022,
    "price(USD)": 799.99,
    "brand": "Samsung"
   }]
   ```
  
[Single Query] 

Example URL : http://20.194.102.116:5000/predict/single?product=GalaxyS22-256GB&display=425&battery=3700&mass=167&storage=256&release=2022&price=799.99

Returns...
  ```shell
  {"predictions":"[{\"product\":\"GalaxyS22-256GB\",\"production\":71.8194846038,\"transport\":2.0652348078,\"use\":9.7403658281}]"}
  ```
  
You can also put a single query after /predict/single to receive carbon emission prediction.
The query should include information of product, display, battery, mass, storage, release, price for prediction.

## Local Requirements
  ```shell
  $ pip install numpy
  $ pip install scipy
  $ pip install scikit-learn
  $ pip install pandas
  $ pip install joblib
  $ pip install requests
  $ pip install gunicorn
  $ pip install dill
  $ pip install Flask
  ```
  
## How to Run
1. Clone this repository.
2. Satisfy every requirements.
3. Go to local repository folder, run:
  ```shell
  $ cd API
  $ nohup gunicorn --bind 0.0.0.0:5000 phone-api:app &
  ```
 
## P-market Explore
### Normal price comparing shopping
The main service of Usual Shopping mall was Comparing price 
![보통사용](https://user-images.githubusercontent.com/80660346/154839034-cbbb795d-a538-4ef8-96b9-9f26ae5c8a2c.gif)
### Switch to Carbon Filter mode
We can go into Carbon Filter mode, which Pymalion Serves by clicking 'Carbon Filter' button.
![스위치](https://user-images.githubusercontent.com/80660346/154839039-722ff9a2-27fe-4f0d-bf6e-d859329ebc98.gif)
### Sorting by carbon, and go into carbon-zero shopping
With our service, Customers can go into high-involvement shopping without considering price.

<strong> ONLY CARBON-EMISSION </strong><br>
![탄소필터모드](https://user-images.githubusercontent.com/80660346/154839070-6cee7228-f901-4253-a327-c5023dcb04d0.gif)
### Demo Link
https://alsdyd98.github.io/2022_kpmg_Pygmalion/P-market/index.html

## File Description
- `phone-api.py`: Python scripts that works for API communication & model implication
- `scaler.pkl`: Model of scaling given data
- `production1.pkl`: Prediction model of carbon emmision on production process
- `transport2.pkl`: Prediction model of carbon emmision on transport process
- `use3.pkl`: Prediction model of carbon emmision on use process
