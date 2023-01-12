  1 #!/usr/bin/python3
  2 '''
  3 working json conversion
  4 '''
  5 
  6 import json
  7 
  8 def to_json_string(my_obj):
  9     '''
 10     returning a string in json format
 11     '''
 12 
 13     return (json.dumps(my_obj))
