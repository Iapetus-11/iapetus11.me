cd src
authbind --deep poetry run gunicorn -b 0.0.0.0:80 -k uvicorn.workers.UvicornWorker app:app --workers 1
cd ..
