# ([v][0-9]+[.][0-9]+[.][0-9]+)
version=v2.0.0
sed -i.bak -e "s/[v][0-9]*[.][0-9]*[.][0-9]*/$version/g" "docker-compose.prod.yml"