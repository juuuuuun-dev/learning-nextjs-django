FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --upgrade pip \
  && pip3 config list \
  && pip install -r requirements.txt \
  && groupadd uwsgi && useradd -r -g uwsgi uwsgi
COPY --chown=uwsgi:uwsgi . .
USER uwsgi
CMD ["uwsgi", "--ini", "/app/django.ini"]
