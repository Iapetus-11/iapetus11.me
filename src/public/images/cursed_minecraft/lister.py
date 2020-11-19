import json
import os

files = (next(os.walk('.'))[2])

print(str(files).replace("'", '"'))