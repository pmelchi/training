import os


def hello(event, context):
    print("A change3")
    return os.environ['FIRST_NAME']