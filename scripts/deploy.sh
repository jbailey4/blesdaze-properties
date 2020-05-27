#!/bin/bash

SSH_PATH="$HOME/.ssh"

# allow ssh to remote server
# TODO investigate the SSH action (https://github.com/maddox/actions/tree/master/ssh)
mkdir -p "$SSH_PATH"
touch "$SSH_PATH/known_hosts"

echo "$PRIVATE_KEY" >> "$SSH_PATH/deploy_key"

chmod 700 "$SSH_PATH"
chmod 600 "$SSH_PATH/known_hosts"
chmod 600 "$SSH_PATH/deploy_key"

eval $(ssh-agent)
ssh-add "$SSH_PATH/deploy_key"

ssh-keyscan -t rsa $HOST >> "$SSH_PATH/known_hosts"

ssh -o StrictHostKeyChecking=no -A -tt jbailey@$HOST <<'ENDSSH'
docker pull jbailey4/blesdaze-properties
docker stop blesdaze-properties
docker rm blesdaze-properties
docker run -d \
--name blesdaze-properties \
--net nginx-proxy \
-v ./nginx/vhost.d:/etc/nginx/vhost.d:ro
-e VIRTUAL_HOST=blesdazeproperties.com \
-e LETSENCRYPT_HOST=blesdazeproperties.com \
jbailey4/blesdaze-properties
exit
ENDSSH