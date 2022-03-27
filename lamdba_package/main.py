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

    numbers_response = {'number_list': number_list}

    request_response = dict(statusCode=200, headers={})
    request_response['headers']['Content-Type'] = 'application/json'
    request_response['body'] = json.dumps(numbers_response)

    return request_response
