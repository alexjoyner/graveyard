FROM postgres:11

# Add Tini
ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
# Tini is now available at /tini
# ENTRYPOINT ["/tini", "--", "docker-entrypoint.sh"]

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK CMD pg_isready -U postgres || exit 1