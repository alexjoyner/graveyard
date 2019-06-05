FROM nginx

RUN apt-get update && apt-get install -y curl

ENV MAIN_CONFIG_FILE nginx.local.conf


COPY api-locations.conf /etc/nginx/api-locations.conf
COPY ssl-params.conf /etc/nginx/ssl-params.conf
COPY ${MAIN_CONFIG_FILE} /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

COPY wait-for-routes.sh .

RUN chmod +x ./wait-for-routes.sh 

# ENTRYPOINT [ "/bin/bash", "./wait-for-routes.sh", "nginx -g daemon off;" ]
# CMD [ "nginx", "-g", "daemon off;" ]
CMD ["/bin/bash", "./wait-for-routes.sh", "nginx"]
