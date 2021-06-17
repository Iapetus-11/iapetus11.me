cd src
poetry run gunicorn --bind 0.0.0.0:80 app:app
cd ..