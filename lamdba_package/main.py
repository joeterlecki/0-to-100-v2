import json


def generate_number_list(start_number, end_number):
    number_list = []
    for number in range(start_number, end_number):
        number_list.append(number)

    return number_list


def lambda_handler(event, context):
    start_number = int(event['queryStringParameters']['start_number'])
    end_number = int(event['queryStringParameters']['end_number'])

    number_list = generate_number_list(start_number, end_number + 1)

    numbers_response = {}
    numbers_response['number_list'] = number_list

    request_reponse = {}
    request_reponse['statusCode'] = 200
    request_reponse['headers'] = {}
    request_reponse['headers']['Content-Type'] = 'application/json'
    request_reponse['headers']['Access-Control-Allow-Origin'] = '*'
    request_reponse['body'] = json.dumps(numbers_response)

    return request_reponse
