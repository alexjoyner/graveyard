FROM nginx

ENV MAIN_CONFIG_FILE nginx.local.conf

COPY api-locations.conf /etc/nginx/api-locations.conf
COPY ssl-params.conf /etc/nginx/ssl-params.conf
COPY ${MAIN_CONFIG_FILE} /etc/nginx/nginx.conf
