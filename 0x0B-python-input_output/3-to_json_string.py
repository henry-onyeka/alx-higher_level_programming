#!/usr/bin/python3
'''
working json conversion
'''
import json

def to_json_string(my_obj):
    '''
    returning a string in json format
    '''
    return (json.dump(my_obj))
