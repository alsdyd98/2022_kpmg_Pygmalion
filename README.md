# Pygmalion : Shopping Assistance Service by Predicting Carbon Emission

[2022 KPMG Ideathon Challenge] Pygmalion

## Overview
We suggest you 

## URL for API

[JSON]
http://20.194.102.116:5000/predict/data
  
[Single Query] 
(example)
http://20.194.102.116:5000/predict/single?product=GalaxyS22-256GB&display=425&battery=3700&mass=167&storage=256&release=2022&price=799.99
  
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
  $ cd myapp
  $ nohup npm start &
  ...
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
