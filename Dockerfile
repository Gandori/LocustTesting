FROM python:3.8-slim-buster

ENV host='0.0.0.0'
ENV port=8080

WORKDIR /service

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD [ "python3", "run.py" ]