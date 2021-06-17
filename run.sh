cd src
poetry run gunicorn --bind 0.0.0.0:42069 src:app
cd ..