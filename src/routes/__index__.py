import os

ROUTERS = []

for route_file in os.listdir():
    if route_file.endswith('.py') and route_file != 'example.py':
        ROUTERS.append(__import__(route_file.replace('.py', '')))
