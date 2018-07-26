FROM nginx
COPY nginx/production/ssl-params.conf /etc/nginx/ssl-params.conf
COPY nginx/production/nginx.conf /etc/nginx/nginx.conf