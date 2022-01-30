cd src
poetry run uvicorn app:app --host localhost --port 80 --reload --use-colors --log-level debug
cd ..
