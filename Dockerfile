FROM nginx
COPY ssl-params.conf /etc/nginx/ssl-params.conf
COPY nginx.conf /etc/nginx/nginx.conf