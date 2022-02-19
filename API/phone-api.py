"""Filename: phone-api.py """

import os
import pandas as pd
import joblib
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/predict/single', methods=['GET'])
def paramcall():
    try:
        mobile_name = pd.Series(request.args['product'])

        t1 = request.args['display']
        t2 = request.args['battery']
        t3 = request.args['mass']
        t4 = request.args['price']

        m1 = request.args['storage']
        m2 = request.args['release']

        test_1 = pd.DataFrame([[t1, t2, t3, t4]], columns=['display(ppi)', 'battery(mAh)', 'mass(g)', 'price(USD)'])
        test_2 = pd.DataFrame([[m1, m2]], columns=['storage(GB)', 'release(yr)']) 

    except Exception as e:
        raise e

    if test_1.empty:
        return(bad_request())
    else:
        print("Scaling...")
        loaded_scaler = joblib.load('./models/scaler.pkl')
        test_1_std = loaded_scaler.transform(test_1)
        test_1_std_df = pd.DataFrame(test_1_std, columns = ['display(ppi)', 'battery(mAh)', 'mass(g)', 'price(USD)'])

        test_final = pd.concat([test_1_std_df, test_2], axis=1)

        print(test_final.values)

        print("Loading the model...")
        loaded_model_1 = joblib.load('./models/production1.pkl')
        loaded_model_2 = joblib.load('./models/transport2.pkl')
        loaded_model_3 = joblib.load('./models/use3.pkl')

        y1_pred = loaded_model_1.predict(test_final)
        y2_pred = loaded_model_2.predict(test_final)
        y3_pred = loaded_model_3.predict(test_final)

        pred_each_1 = pd.Series(y1_pred)
        pred_each_2 = pd.Series(y2_pred)
        pred_each_3 = pd.Series(y3_pred)

        res = pd.concat([mobile_name, pred_each_1, pred_each_2, pred_each_3], axis=1)
        res.columns = ['product', 'production', 'transport', 'use']

        responses = jsonify(predictions=res.to_json(orient="records"))
        responses.status_code = 200

        return (responses)

@app.route('/predict/data', methods=['POST'])
def apicall():
    try:
        test_json = request.get_json()
        test = pd.DataFrame(test_json)

        mobile_name = test['product']

        test = test[['display(ppi)', 'battery(mAh)', 'mass(g)', 'storage(GB)', 'release(yr)', 'price(USD)']]

        test_1 = test[['display(ppi)', 'battery(mAh)', 'mass(g)', 'price(USD)']]
        test_2 = test[['storage(GB)',	'release(yr)']]

    except Exception as e:
        raise e

    if test.empty:
        return(bad_request())
    else:
        print("Scaling...")
        loaded_scaler = joblib.load('./models/scaler.pkl')
        test_1_std = loaded_scaler.transform(test_1)
        test_1_std_df = pd.DataFrame(test_1_std, columns = ['display(ppi)', 'battery(mAh)', 'mass(g)', 'price(USD)'])

        test_final = pd.concat([test_1_std_df, test_2], axis=1)

        print("Loading the model...")
        loaded_model_1 = joblib.load('./models/production1.pkl')
        loaded_model_2 = joblib.load('./models/transport2.pkl')
        loaded_model_3 = joblib.load('./models/use3.pkl')

        y1_pred = loaded_model_1.predict(test_final)
        y2_pred = loaded_model_2.predict(test_final)
        y3_pred = loaded_model_3.predict(test_final)

        pred_each_1 = pd.Series(y1_pred)
        pred_each_2 = pd.Series(y2_pred)
        pred_each_3 = pd.Series(y3_pred)

        res = pd.concat([mobile_name, pred_each_1, pred_each_2, pred_each_3], axis=1)
        res.columns = ['product', 'production', 'transport', 'use']

        responses = jsonify(predictions=res.to_json(orient="records"))
        responses.status_code = 200

        return (responses)


if __name__ =="__main__":
    app.run(host='20.194.102.116')