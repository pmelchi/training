import time


def hello(event, context):
    print("EMC--> second update")
    time.sleep(4)
    return "Hello my friend"