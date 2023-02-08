from datetime import datetime
import os
import time
import pandas
import json
import uuid

def readExcell():
    dataframe = pandas.read_excel('./lista.xlsx', engine="openpyxl")
    dict_lista = dataframe.to_dict(orient='records')
    for data in dict_lista:
        data['DATA CONTRATO INICIO'] = data['DATA CONTRATO INICIO'].strftime('%d/%m/%Y')
        data['DATA CONTRATO TERMINO'] = data['DATA CONTRATO TERMINO'].strftime('%d/%m/%Y')
    # array = []
    # array.append(dict_lista)
    endereco = '../models'
    lista_arquivos_pasta_models = os.listdir(endereco)
    arquivo = 'dbPedro.json'
                
    for arq in lista_arquivos_pasta_models:
        if(arq == arquivo):
            os.remove('../models/dbPedro.json')
    time.sleep(1)
    with open('../models/dbPedro.json', 'w') as outfile:
        outfile.write('{"stateFlags": ')
        json.dump(dict_lista, outfile)
        outfile.write('}')
try:
    readExcell()
    
except Exception as e:
    print(e)
    